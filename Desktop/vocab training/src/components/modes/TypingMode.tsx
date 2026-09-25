"use client";

import { useState } from "react";
import { VocabWord } from "@/lib/types";
import { ArrowRightIcon, CheckIcon, XIcon } from "@/components/icons";

interface TypingModeProps {
  words: VocabWord[];
  onCorrect: (id: string) => void;
  onBatchComplete: () => void;
}

function normalize(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/^(the|der|die|das)\s+/, "");
}

export default function TypingMode({ words, onCorrect, onBatchComplete }: TypingModeProps) {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const word = words[index];

  const check = () => {
    if (!input.trim()) return;
    const isCorrect = normalize(input) === normalize(word.german);
    setResult(isCorrect ? "correct" : "incorrect");
    if (isCorrect) onCorrect(word.id);
  };

  const next = () => {
    if (index === words.length - 1) {
      onBatchComplete();
      return;
    }
    setInput("");
    setResult(null);
    setIndex((i) => (i + 1) % words.length);
  };

  return (
    <div className="flex flex-col items-start pt-0">
      <div className="flex w-full justify-between text-xs text-[#5d6f74]"><span className="uppercase tracking-[2px]">Write</span><span>{index + 1} of {words.length}</span></div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#d5ddd7]"><div className="h-full rounded-full bg-[#263fd6]" style={{ width: `${((index + (result ? 1 : 0)) / words.length) * 100}%` }} /></div>
      <div className="mt-4 flex min-h-[158px] w-full flex-col items-center justify-center gap-2 border border-[#dce4bd] bg-[#f8fbdc] px-6 py-8 text-center shadow-none">
        <p className="text-xs uppercase tracking-widest text-[#5d6f74]">
          Type the German word
        </p>
        <p className="font-heading mt-1 text-2xl text-black">
          {word.english}
        </p>
      </div>
      <label className="mt-5 w-full text-xs uppercase tracking-[1.8px] text-[#5d6f74]" htmlFor="typing-answer">Your answer</label>
      <input
        id="typing-answer"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && (result ? next() : check())}
        placeholder="Type the German word"
        disabled={result !== null}
        className="mt-2 h-12 w-full rounded-xl border border-[#9bb8bc] bg-white px-5 text-base text-[#172b35] outline-none placeholder:text-[#5d6f74] focus:border-[#263fd6]"
      />

      {result && (
        <div className={`mt-4 flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-sm ${result === "correct" ? "border-[#b7d83a] bg-[#f3f8d5] font-semibold text-[#315500]" : "border-red-400 bg-red-500/10 text-[#a63d2d]"}`}>{result === "correct" ? <CheckIcon /> : <XIcon />}<span>
          {result === "correct"
            ? "Correct!"
            : `Correct answer: ${word.german}`}</span></div>
      )}

      <button
        onClick={result ? next : check}
        className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#d8f56d] text-sm font-semibold text-[#172b35]"
      >
        {result ? <>Next word <ArrowRightIcon /></> : "Check answer"}
      </button>
    </div>
  );
}
