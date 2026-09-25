"use client";

import { useState } from "react";
import { VocabWord } from "@/lib/types";
import { ArrowRightIcon, CheckIcon, XIcon } from "@/components/icons";

interface TypingModeProps {
  words: VocabWord[];
  onCorrect: (id: string) => void;
  onNextBatch?: () => void;
  previousCorrect: number;
  totalWords: number;
}

function normalize(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/^(the|der|die|das)\s+/, "");
}

export default function TypingMode({ words, onCorrect, onNextBatch, previousCorrect, totalWords }: TypingModeProps) {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const word = words[index];

  const check = () => {
    if (!input.trim()) return;
    const isCorrect = normalize(input) === normalize(word.german);
    setResult(isCorrect ? "correct" : "incorrect");
    if (isCorrect) {
      setScore((current) => current + 1);
      onCorrect(word.id);
    }
  };

  const next = () => {
    if (index === words.length - 1 && onNextBatch) {
      onNextBatch();
      return;
    }
    if (index === words.length - 1) {
      setFinished(true);
      return;
    }
    setInput("");
    setResult(null);
    setIndex((i) => (i + 1) % words.length);
  };

  if (finished) {
    return (
      <div className="flex w-full flex-col items-center gap-3 pt-5 text-center">
        <div className="flex min-h-[158px] w-full flex-col items-center justify-center border border-[#dce4bd] bg-[#f8fbdc] px-6 py-8">
          <p className="font-body text-xs uppercase tracking-[2px] text-[#5d6f74]">Write complete</p>
          <p className="font-heading mt-2 text-3xl font-semibold text-[#172b35]">{previousCorrect + score} out of {totalWords} correct</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start pt-0">
      <div className="flex w-full justify-between text-xs text-[#9da5b5]"><span className="uppercase tracking-[2px]">Write</span><span>{index + 1} of {words.length}</span></div>
      <div className="h-1.5 w-full overflow-hidden bg-[#d5ddd7]"><div className="h-full bg-[#263fd6]" style={{ width: `${((index + (result ? 1 : 0)) / words.length) * 100}%` }} /></div>
      <div className="mt-4 flex min-h-[158px] w-full flex-col items-center justify-center gap-2 border border-[#dce4bd] bg-[#f8fbdc] px-6 py-8 text-center shadow-none">
        <p className="text-xs uppercase tracking-widest text-[#5d6f74]">
          Type the German word
        </p>
        <p className="font-heading mt-1 text-2xl tracking-[-0.4px] text-black">
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
        className="mt-2 h-10 w-full rounded-xl border border-[#b8c8c9] bg-white px-4 text-sm text-[#172b35] outline-none placeholder:text-[#5d6f74] focus:border-[#263fd6]"
      />

      {result && (
        <div className={`mt-4 flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${result === "correct" ? "border-[#b7d83a] bg-[#f3f8d5] font-semibold text-[#315500]" : "border-[rgba(255,102,87,0.35)] text-[#ffb0a6]"}`}>{result === "correct" ? <CheckIcon /> : <XIcon />}<span>
          {result === "correct"
            ? "Correct!"
            : `Correct answer: ${word.german}`}</span></div>
      )}

      <button
        onClick={result ? next : check}
        className="mt-4 flex h-9 w-full items-center justify-center gap-2 rounded-full bg-[#d8f56d] text-sm font-semibold text-[#172b35]"
      >
        {result ? <>Next word <ArrowRightIcon /></> : "Check answer"}
      </button>
    </div>
  );
}
