"use client";

import { useState } from "react";
import { VocabWord } from "@/lib/types";
import { ArrowRightIcon, CheckIcon, XIcon } from "@/components/icons";

interface GapsModeProps {
  words: VocabWord[];
}

function buildSentence(word: VocabWord, wordIndex: number) {
  const germanWord = word.german.replace(/^(der|die|das)\s+/i, "");
  const escaped = germanWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(escaped, "i");
  if (re.test(word.example)) {
    const parts = word.example.split(re);
    return parts.map((part, index) => (
      <span key={`${word.id}-${index}`}>
        {part}
        {index < parts.length - 1 && (
          <span className="mx-1 inline-block w-28 translate-y-1 border-b-2 border-[#c6e940]" aria-label="missing word" />
        )}
      </span>
    ));
  }
  const templates = word.pos === "verb"
    ? ["Ich möchte ________ heute besser verstehen.", "Wir müssen lernen, wie man ________ kann.", "Sie versucht, regelmäßig zu ________.", "Es ist nicht immer leicht, ________ zu lernen.", "Viele Menschen wollen ________, obwohl es schwierig ist.", "Im Alltag kann es hilfreich sein, ________ zu üben."]
    : word.pos === "noun"
      ? ["Die Bedeutung von ________ ist im Alltag wichtig.", "Viele Menschen sprechen heute über ________.", "Wir sollten ________ genauer betrachten.", "In diesem Text wird ________ ausführlich erklärt.", "Für dieses Thema spielt ________ eine große Rolle.", "Ein gutes Beispiel für ________ findet man im Alltag."]
      : word.pos === "adj"
        ? ["Die Situation ist heute besonders ________.", "Er findet diese Lösung sehr ________.", "Das war eine ________ Entscheidung.", "Eine ________ Antwort hilft in diesem Fall weiter.", "Die Ergebnisse sind insgesamt ________.", "Sie beschreibt das Problem als ________."]
        : ["Sie arbeitet ________ an diesem Projekt.", "Er erklärt die Idee ________.", "Wir sollten ________ darüber sprechen.", "Die Aufgabe wurde ________ gelöst.", "Sie beantwortet die Frage ________.", "Das Thema wird ________ diskutiert."];
  const [before, after] = templates[wordIndex % templates.length].split("________");
  return <>{before}<span className="mx-1 inline-block w-28 translate-y-1 border-b-2 border-[#c6e940]" aria-label="missing word" />{after}</>;
}

function normalize(text: string) {
  return text.trim().toLowerCase().replace(/^(der|die|das)\s+/, "").replace(/[.!?,;:]+$/, "");
}

export default function GapsMode({ words }: GapsModeProps) {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const word = words[index];

  const check = () => {
    if (!input.trim()) return;
    const isCorrect = normalize(input) === normalize(word.german);
    setResult(isCorrect ? "correct" : "incorrect");
  };

  const next = () => {
    setInput("");
    setResult(null);
    setIndex((i) => (i + 1) % words.length);
  };

  return (
    <div className="flex flex-col items-start pt-8">
      <div className="flex w-full justify-between text-xs text-[#9da5b5]"><span className="uppercase tracking-[2px]">Gaps</span><span>{index + 1} of {words.length}</span></div>
      <div className="mt-3 h-1.5 w-full rounded-full bg-[rgba(198,233,64,0.16)]"><div className="h-full rounded-full bg-[#c6e940]" style={{ width: `${((index + (result ? 1 : 0)) / words.length) * 100}%` }} /></div>
      <div className="mt-6 flex min-h-[224px] w-full flex-col items-center justify-center rounded-[28px] border border-[#2b3342] bg-[linear-gradient(172.7deg,rgba(24,31,47,0.96),rgba(16,22,35,0.88))] px-6 py-12 text-center shadow-[0_24px_70px_rgba(0,0,5,0.9)]">
        <p className="font-body text-xs uppercase tracking-widest text-[#9da5b5]">
          Fill in the gap
        </p>
        <p className="font-heading mt-4 max-w-full break-words text-2xl leading-relaxed text-[#f3f5f9]">
          {buildSentence(word, index)}
        </p><p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#69758a]">
          {word.exampleEnglish || `Hint: “${word.english}”`}
        </p>
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && (result ? next() : check())}
        placeholder="Missing German word…"
        disabled={result !== null}
        className="mt-5 h-12 w-full rounded-2xl border border-[#2b3342] bg-[#0d141f] px-5 text-base text-[#f3f5f9] placeholder:text-[#596477] focus:border-[#c6e940] focus:outline-none"
      />

      {result && (
          <div className={`mt-4 flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${result === "correct" ? "text-[#dff58a]" : "text-[#ffb0a6]"}`}>{result === "correct" ? <CheckIcon /> : <XIcon />}<span>
          {result === "correct" ? "Correct!" : `Correct answer: ${word.german}`}
        </span></div>
      )}

      <button
        onClick={result ? next : check}
        className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#c6e940] text-sm font-semibold text-[#0e1a01]"
      >
        {result ? <>Next sentence <ArrowRightIcon /></> : "Check answer"}
      </button>
    </div>
  );
}
