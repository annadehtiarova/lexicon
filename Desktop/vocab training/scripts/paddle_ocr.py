#!/usr/bin/env python3
import base64
import difflib
import json
import os
import sys
import tempfile
from pathlib import Path

import argostranslate.translate
import spacy
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
from paddleocr import PaddleOCR


CANONICAL_SPELLINGS = {
    "muessen": "müssen",
    "koennen": "können",
    "moechten": "möchten",
    "fuer": "für",
    "ueber": "über",
    "naechste": "nächste",
}

TRANSLATION_OVERRIDES = {
    "müssen": "must",
    "können": "can",
    "möchten": "would like",
}


def read_input() -> dict:
    value = sys.stdin.read()
    return json.loads(value)


def result_to_text(result) -> list[tuple[str, float]]:
    payload = getattr(result, "json", result)
    if callable(payload):
        payload = payload()
    if isinstance(payload, str):
        payload = json.loads(payload)

    data = payload.get("res", payload) if isinstance(payload, dict) else {}
    texts = data.get("rec_texts", []) if isinstance(data, dict) else []
    scores = data.get("rec_scores", []) if isinstance(data, dict) else []

    return [
        (text.strip(), float(scores[index]) if scores else 1.0)
        for index, text in enumerate(texts)
        if isinstance(text, str)
        and text.strip()
        and (not scores or float(scores[index]) >= 0.4)
    ]


def create_ocr() -> PaddleOCR:
    return PaddleOCR(
        lang="german",
        text_detection_model_name="PP-OCRv5_mobile_det",
        text_recognition_model_name="PP-OCRv5_mobile_rec",
        use_doc_orientation_classify=False,
        use_doc_unwarping=False,
        use_textline_orientation=False,
    )


def correct_b2_spelling(word: str, lexicon: set[str]) -> str:
    candidate = word.lower()
    if candidate in CANONICAL_SPELLINGS:
        return CANONICAL_SPELLINGS[candidate]
    normalized = (
        candidate.replace("ae", "ä")
        .replace("oe", "ö")
        .replace("ue", "ü")
        .replace("ss", "ß")
    )
    canonical = {
        value.replace("ä", "ae").replace("ö", "oe").replace("ü", "ue").replace("ß", "ss"): value
        for value in lexicon
    }
    if candidate in lexicon and candidate not in canonical:
        return word
    if normalized in lexicon or normalized != candidate:
        return normalized
    if candidate in canonical:
        return canonical[candidate]
    matches = difflib.get_close_matches(normalized, lexicon, n=1, cutoff=0.9)
    return matches[0] if matches else word


def translate_terms(terms: list[str], tokenizer, model) -> list[str]:
    if not terms:
        return []
    encoded = tokenizer(
        terms,
        return_tensors="pt",
        padding=True,
        truncation=True,
    )
    generated = model.generate(**encoded, max_new_tokens=20)
    return tokenizer.batch_decode(generated, skip_special_tokens=True)


def clean_translation(value: str) -> str:
    return value.strip().rstrip(".,;:!?\u3002").lower()


def noun_article(token) -> str:
    if "Number=Plur" in token.morph:
        return "die"
    gender = token.morph.get("Gender")
    if "Masc" in gender:
        return "der"
    if "Fem" in gender:
        return "die"
    if "Neut" in gender:
        return "das"
    return "die"


def build_example(lemma: str, pos: str, token, index: int, used: set[str]) -> str:
    if pos == "noun":
        noun = f"{noun_article(token)} {lemma[:1].upper() + lemma[1:]}"
        templates = [
            f"{noun} spielt im Alltag eine wichtige Rolle.",
            f"Viele Menschen sprechen heute über {noun}.",
            f"Wir müssen {noun} in diesem Zusammenhang genauer betrachten.",
        ]
    elif pos == "verb":
        special_cases = {
            "müssen": "Wir müssen heute besonders vorsichtig sein.",
            "können": "Wir können diese Aufgabe gemeinsam lösen.",
            "sein": "Es ist wichtig, ehrlich zu sein.",
            "werden": "Die Situation wird sich bald verändern.",
            "erfordern": "Diese Aufgabe kann viel Geduld erfordern.",
            "berücksichtigen": "Wir sollten alle wichtigen Faktoren berücksichtigen.",
        }
        templates = [special_cases[lemma]] if lemma in special_cases else [
            f"Ich versuche, {lemma} regelmäßig zu üben.",
            f"Diese Situation kann dazu führen, dass wir {lemma} müssen.",
            f"Es ist wichtig, {lemma} im Alltag anzuwenden.",
        ]
    elif pos == "adj":
        templates = [
            f"Die Situation ist heute besonders {lemma}.",
            f"Er findet diese Lösung sehr {lemma}.",
            f"Das war eine {lemma} Entscheidung.",
        ]
    else:
        templates = [
            f"Sie arbeitet {lemma} an diesem Projekt.",
            f"Er erklärt die Idee {lemma} und verständlich.",
            f"Wir sollten {lemma} darüber sprechen.",
        ]
    for offset in range(len(templates)):
        sentence = templates[(index + offset) % len(templates)]
        if sentence not in used:
            used.add(sentence)
            return sentence
    return templates[index % len(templates)]


def enrich_text(text: str, translation_overrides: list[dict], nlp, tokenizer, model) -> list[dict[str, str]]:
    def normalize_key(value: str) -> str:
        return (
            value.lower()
            .removeprefix("der ")
            .removeprefix("die ")
            .removeprefix("das ")
            .replace("ä", "ae")
            .replace("ö", "oe")
            .replace("ü", "ue")
            .replace("ß", "ss")
        )

    translations = {
        normalize_key(item["german"]): item["english"]
        for item in translation_overrides
        if isinstance(item, dict)
        and isinstance(item.get("german"), str)
        and isinstance(item.get("english"), str)
    }
    document = nlp(text)
    results: list[dict[str, str]] = []
    seen: set[str] = set()
    used_examples: set[str] = set()
    pending_translations: list[str] = []

    for token in document:
        if not token.is_alpha:
            continue
        # Only these lexical categories become study-set entries.
        allowed_pos = {"NOUN", "VERB", "AUX", "ADJ", "ADV"}
        if token.pos_ not in allowed_pos:
            continue
        if token.is_stop and token.pos_ not in {"VERB", "AUX"}:
            continue
        lemma = correct_b2_spelling(token.lemma_, set())
        corrected_surface = correct_b2_spelling(token.text, set())
        translation = translations.get(normalize_key(lemma)) or translations.get(normalize_key(corrected_surface))
        translation = translation or TRANSLATION_OVERRIDES.get(lemma.lower())
        key = normalize_key(lemma)
        if key in seen:
            continue
        seen.add(key)
        if token.pos_ == "NOUN":
            display_word = f"{noun_article(token)} {lemma[:1].upper() + lemma[1:]}"
        else:
            display_word = lemma.lower()
        pos = "verb" if token.pos_ in {"VERB", "AUX"} else token.pos_.lower()
        results.append({
            "german": display_word,
            "english": clean_translation(translation or ""),
            "pos": pos,
            "example": build_example(lemma, pos, token, len(results), used_examples),
        })
        if not translation:
            pending_translations.append(lemma)

    translated = translate_terms(pending_translations, tokenizer, model)
    translated_index = 0
    for result in results:
        if result["english"]:
            continue
        result["english"] = clean_translation(
            translated[translated_index]
            if translated_index < len(translated)
            else argostranslate.translate.translate(result["german"], "de", "en")
        )
        translated_index += 1

    for result in results:
        if (
            result["pos"] == "verb"
            and result["english"].lower() not in {"must", "can", "would like"}
            and not result["english"].lower().startswith("to ")
        ):
            result["english"] = f"to {result['english']}"

    example_translations = translate_terms(
        [result["example"] for result in results], tokenizer, model
    )
    for index, result in enumerate(results):
        result["exampleEnglish"] = clean_translation(
            example_translations[index] if index < len(example_translations) else ""
        )

    return results


def extract_text(request: dict, ocr: PaddleOCR, nlp, tokenizer, model) -> dict:
    text_blocks: list[str] = []

    with tempfile.TemporaryDirectory(prefix="lexikon-ocr-") as directory:
        for index, encoded in enumerate(request.get("images", [])):
            image_path = Path(directory) / f"image-{index}.jpg"
            image_path.write_bytes(base64.b64decode(encoded))
            for result in ocr.predict(input=str(image_path)):
                text_blocks.extend(text for text, _score in result_to_text(result))

    text = "\n".join(text_blocks)
    return {"text": text, "words": enrich_text(text, request.get("translation_overrides", []), nlp, tokenizer, model)}


def main() -> None:
    ocr = create_ocr()
    nlp = spacy.load("de_core_news_sm", exclude=["parser", "ner"])
    tokenizer = AutoTokenizer.from_pretrained("Helsinki-NLP/opus-mt-de-en")
    model = AutoModelForSeq2SeqLM.from_pretrained("Helsinki-NLP/opus-mt-de-en")
    model.eval()
    for line in sys.stdin:
        if not line.strip():
            continue
        try:
            request = json.loads(line)
            print(json.dumps(extract_text(request, ocr, nlp, tokenizer, model), ensure_ascii=False), flush=True)
        except Exception as error:
            print(json.dumps({"error": str(error)}), flush=True)


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(json.dumps({"error": str(error)}), file=sys.stderr)
        sys.exit(1)
