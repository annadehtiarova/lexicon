import { createWorker } from "tesseract.js";
import { pipeline } from "@huggingface/transformers";
import { BankEntry, WORD_BANK } from "@/lib/wordBank";

export interface ExtractedWord {
  german: string;
  english: string;
  pos: string;
  example: string;
}

export interface ExtractResult {
  topic: string;
  words: ExtractedWord[];
}

async function prepareImage(file: File): Promise<File> {
  const bitmap = await createImageBitmap(file);

  const maxDimension = 2400;
  const scale = Math.min(
    1,
    maxDimension / Math.max(bitmap.width, bitmap.height),
  );

  if (scale === 1) {
    bitmap.close();
    return file;
  }

  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);

  const context = canvas.getContext("2d");

  if (!context) {
    bitmap.close();
    return file;
  }

  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", 0.85),
  );

  return blob
    ? new File([blob], `${file.name}.jpg`, { type: "image/jpeg" })
    : file;
}

function normalizeWord(word: string): string {
  return word
    .toLowerCase()
    .trim()
    .replace(/[.,;:!?()[\]{}"„“”]/g, "")
    .replace(/\s+/g, " ");
}

function removeArticle(word: string): string {
  return word
    .replace(/^(der|die|das|den|dem|des|ein|eine|einer|einem|einen)\s+/i, "")
    .trim();
}

function wordStem(word: string): string {
  return removeArticle(word).toLowerCase();
}

function buildKnownForms(): Map<string, BankEntry> {
  const forms = new Map<string, BankEntry>();
  for (const entry of WORD_BANK) {
    const base = wordStem(entry.german);
    forms.set(base, entry);
    if (entry.pos === "verb") {
      const stem = base.replace(/(en|ern|eln|ieren)$/, "");
      ["e", "st", "t", "en", "te", "test", "ten", "end", "endest", "endete", "iert", "ierte"].forEach((ending) => {
        forms.set(`${stem}${ending}`, entry);
      });
    }
    if (entry.pos === "noun") {
      const pluralForms = [
        `${base}e`, `${base}en`, `${base}er`, `${base}s`,
        base.replace(/e$/, "en"), base.replace(/ung$/, "ungen"),
      ];
      pluralForms.forEach((form) => forms.set(form, entry));
    }
  }
  return forms;
}

const GERMAN_FUNCTION_WORDS = new Set(
  "aber als am an auch auf aus bei bin bis das dass dein dem den der des die du ein eine einem einen einer eines er es für gegen haben hat ich im in ist ja kein mit nach nicht nur oder sie sind und vom von war was wir zu zum zur"
    .split(" "),
);

const COMMON_PERSON_NAMES = new Set(
  "anna andreas anton ben benjamin carla carmen christian christina daniel david denise dieter dirk dominik elena elias emil emma eric erika felix finn florian franz friedrich gabriel georg gregor hans hannah heike helena henrik henriette holger ines ingrid jan jana jasmin johann johanna jonas josef julia julian justin karl karla katharina katja klaus konrad laura lea lena leon leonard lia linda lisa lorenz lukas lukas marc marcel maria marie mario markus martin matthias max maximilian maya michael miriam monika nadine niklas nico nina noah norbert oliver oskar otto paul paula peter philipp sabine sara sarah simon sofia sophie stefan stefanie susanne theo theresa thomas tim tina tobias tom ulrich ursula viktor walter wilhelm wilma wolfgang yvonne zara zoe",
); 

function classifyUnknownWord(word: string): ExtractedWord["pos"] | null {
  const lower = word.toLowerCase();
  if (GERMAN_FUNCTION_WORDS.has(lower) || lower.length < 3) return null;
  if (COMMON_PERSON_NAMES.has(lower)) return null;

  // German infinitives are safest to recognize by their infinitive endings.
  if (/(en|ern|eln|ieren)$/.test(lower)) return "verb";

  // Common productive adjective/adverb endings.
  if (/(ig|lich|isch|bar|sam|los|voll|weise)$/.test(lower)) return "adjective";
  if (/(weise|wärts|her|hin|mal|so|sehr|heute|morgen|gestern)$/.test(lower)) {
    return "adverb";
  }

  // Capitalized words in German text are noun candidates. Sentence-initial
  // words remain excluded unless the OCR word has a recognizable noun ending.
  if (/^[A-ZÄÖÜ]/.test(word) || /(ung|heit|keit|schaft|tion|tät|ik|ei)$/.test(lower)) {
    return "noun";
  }

  return null;
}

type Translator = (
  inputs: string | string[],
  options?: Record<string, unknown>,
) => Promise<Array<{ translation_text?: string }> | { translation_text?: string }>;

let translatorPromise: Promise<Translator> | null = null;

function getTranslator() {
  translatorPromise ??= pipeline(
    "translation",
    "Xenova/opus-mt-de-en",
  );
  return translatorPromise;
}

async function findVocabulary(text: string): Promise<ExtractedWord[]> {
  const knownTranslations = new Map<string, BankEntry>();
  for (const entry of WORD_BANK) {
    knownTranslations.set(normalizeWord(entry.german), entry);
    knownTranslations.set(normalizeWord(removeArticle(entry.german)), entry);
  }

  const matches: ExtractedWord[] = [];
  const seen = new Set<string>();
  const knownForms = buildKnownForms();

  for (const rawWord of text.match(/[\p{L}]+(?:['’.-][\p{L}]+)*/gu) ?? []) {
    const key = normalizeWord(rawWord);

    if (seen.has(key)) continue;
    seen.add(key);

    const entry = knownTranslations.get(key) ?? knownForms.get(key);
    const knownPos = entry?.pos;
    const pos = knownPos === "noun"
      ? "noun"
      : knownPos === "verb"
        ? "verb"
        : knownPos === "adjective"
          ? "adjective"
          : knownPos === "adverb"
            ? "adverb"
            : classifyUnknownWord(rawWord);
    if (!pos) continue;

    matches.push({
      german: entry?.german ?? rawWord,
      english: entry?.english ?? "",
      pos,
      example: entry?.example ?? "",
    });
  }

  const unknownWords = matches.filter((word) => !word.english);
  if (unknownWords.length === 0) return matches;

  const translator = await getTranslator();
  const translations = await translator(unknownWords.map((word) => word.german), {
    max_new_tokens: 32,
    num_beams: 4,
    do_sample: false,
  });
  const output = Array.isArray(translations) ? translations : [translations];
  let translationIndex = 0;

  return matches.map((word) => {
    if (word.english) return word;
    const translation = output[translationIndex++]?.translation_text;
    return {
      ...word,
      english: typeof translation === "string" ? translation.toLowerCase() : "",
    };
  });
}

export async function extractVocabFromImages(
  files: File[],
): Promise<ExtractResult> {
  if (files.length === 0) {
    throw new Error("No images selected");
  }

  const worker = await createWorker("deu");

  try {
    await worker.setParameters({
      preserve_interword_spaces: "1",
    });

    const preparedFiles = await Promise.all(
      files.map(prepareImage),
    );

    const recognizedText: string[] = [];

    for (const file of preparedFiles) {
      const result = await worker.recognize(file);
      const pageData = result.data as typeof result.data & {
        words?: Array<{ confidence: number; text: string }>;
      };
      const confidentWords = pageData.words
        ?.filter((word) => word.confidence >= 45)
        .map((word) => word.text)
        .filter(Boolean);
      recognizedText.push(
        confidentWords?.length ? confidentWords.join(" ") : result.data.text,
      );
    }

    const text = recognizedText.join("\n");

    if (!text.trim()) {
      throw new Error("No text could be detected in the image");
    }

    const words = await findVocabulary(text);

    if (words.length === 0) {
      throw new Error("No vocabulary words from the image could be recognized");
    }

    return {
      topic: "Extracted vocabulary",
      words,
    };
  } finally {
    await worker.terminate();
  }
}
