"use client";

import { useState } from "react";
import { VocabWord } from "@/lib/types";
import { ArrowRightIcon, CheckIcon, XIcon } from "@/components/icons";

interface TypingModeProps {
  words: VocabWord[];
}

function normalize(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/^(the|der|die|das)\s+/, "");
}

export default function TypingMode({ words }: TypingModeProps) {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const word = words[index];

  const check = () => {
    if (!input.trim()) return;
    const isCorrect = normalize(input) === normalize(word.english);
    setResult(isCorrect ? "correct" : "incorrect");
  };

  const next = () => {
    setInput("");
    setResult(null);
    setIndex((i) => (i + 1) % words.length);
  };

  return (
    <div className="flex flex-col items-start pt-8">
      <div className="flex w-full justify-between text-xs text-[#9da5b5]"><span className="uppercase tracking-[2px]">Write</span><span>{index + 1} of {words.length}</span></div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[rgba(198,233,64,0.16)]"><div className="h-full rounded-full bg-[#c6e940]" style={{ width: `${((index + (result ? 1 : 0)) / words.length) * 100}%` }} /></div>
      <div className="mt-6 flex min-h-[224px] w-full flex-col items-center justify-center rounded-[28px] border border-[#2b3342] bg-[linear-gradient(172.7deg,rgba(24,31,47,0.96),rgba(16,22,35,0.88))] px-6 py-12 text-center shadow-[0_24px_70px_rgba(0,0,5,0.9)]">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Type the German word
        </p>
        <p className="font-heading mt-3 text-4xl text-[#f3f5f9]">
          {word.english}
        </p>
      </div>
      <label className="mt-5 w-full text-xs uppercase tracking-[1.8px] text-[#9da5b5]" htmlFor="typing-answer">Your answer</label>
      <input
        id="typing-answer"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && (result ? next() : check())}
        placeholder="Type the German word"
        disabled={result !== null}
        className="mt-2 h-12 w-full rounded-2xl border border-[#2b3342] bg-[#0d141f] px-5 text-base text-[#f3f5f9] outline-none placeholder:text-[#596477] focus:border-[#c6e940]"
      />

      {result && (
        <div className={`mt-4 flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${result === "correct" ? "border-[rgba(198,233,64,0.35)] text-[#dff58a]" : "border-[rgba(255,102,87,0.35)] text-[#ffb0a6]"}`}>{result === "correct" ? <CheckIcon /> : <XIcon />}<span>
          {result === "correct"
            ? "Correct!"
            : `Correct answer: ${word.german}`}</span></div>
      )}

      <button
        onClick={result ? next : check}
        className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#c6e940] text-sm font-semibold text-[#0e1a01]"
      >
        {result ? <>Next word <ArrowRightIcon /></> : "Check answer"}
      </button>
    </div>
  );
}
