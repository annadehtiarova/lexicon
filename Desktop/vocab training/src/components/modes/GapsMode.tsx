"use client";

import { useState } from "react";
import { VocabWord } from "@/lib/types";

interface GapsModeProps {
  words: VocabWord[];
}

function buildSentence(word: VocabWord) {
  const escaped = word.german.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(escaped, "i");
  if (re.test(word.example)) {
    return word.example.replace(re, "ـــــ");
  }
  return `${word.example} (ـــــ = ${word.english})`;
}

function normalize(text: string) {
  return text.trim().toLowerCase();
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
    <div className="flex flex-col items-center gap-6 pt-8">
      <div className="w-full max-w-md rounded-2xl border-[0.556px] border-[#2b3342] bg-slate-900/40 p-6 text-center">
        <p className="font-body text-xs uppercase tracking-widest text-[#9da5b5]">
          Fill in the gap
        </p>
        <p className="font-heading mt-2 text-xl text-[#f3f5f9]">
          {buildSentence(word)}
        </p>
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && (result ? next() : check())}
        placeholder="Missing German word…"
        disabled={result !== null}
        className="w-full max-w-md rounded-xl border border-[#2b3342] bg-slate-900/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-[#c6e940] focus:outline-none"
      />

      {result && (
        <p
          className={`text-sm ${result === "correct" ? "text-lime-300" : "text-red-300"}`}
        >
          {result === "correct" ? "Correct!" : `Correct answer: ${word.german}`}
        </p>
      )}

      <button
        onClick={result ? next : check}
        className="rounded-full bg-[#c6e940] px-6 py-2 font-medium text-[#0e1a01] hover:opacity-90"
      >
        {result ? "Next word →" : "Check answer"}
      </button>
    </div>
  );
}
