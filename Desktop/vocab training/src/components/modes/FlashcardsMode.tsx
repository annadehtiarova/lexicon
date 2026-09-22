"use client";

import { useState } from "react";
import { VocabWord } from "@/lib/types";

interface FlashcardsModeProps {
  words: VocabWord[];
}

export default function FlashcardsMode({ words }: FlashcardsModeProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const word = words[index];

  const go = (delta: number) => {
    setFlipped(false);
    setIndex((i) => (i + delta + words.length) % words.length);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={() => setFlipped((f) => !f)}
        className="flex h-56 w-full max-w-md select-none flex-col items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/60 px-6 text-center transition-transform hover:scale-[1.01]"
      >
        <span className="text-2xl font-semibold text-slate-100">
          {flipped ? word.english : word.german}
        </span>
        {flipped && (
          <span className="mt-3 text-sm text-slate-400">{word.example}</span>
        )}
        <span className="mt-4 text-xs text-slate-500">Click to flip</span>
      </button>

      <div className="flex items-center gap-4">
        <button
          onClick={() => go(-1)}
          className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
        >
          ← Prev
        </button>
        <span className="text-sm text-slate-400">
          {index + 1} / {words.length}
        </span>
        <button
          onClick={() => go(1)}
          className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
