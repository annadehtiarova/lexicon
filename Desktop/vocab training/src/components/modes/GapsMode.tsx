"use client";

import { Fragment } from "react";
import { useState } from "react";
import { VocabWord } from "@/lib/types";
import { TEAMARBEIT_GAP_TEST } from "@/lib/teamarbeitGapTest";
import { ArrowRightIcon, CheckIcon, XIcon } from "@/components/icons";

interface GapsModeProps {
  words: VocabWord[];
  onCorrect: (id: string) => void;
  onBatchComplete: () => void;
}

function normalize(text: string) {
  return text.trim().toLowerCase();
}

export default function GapsMode({ words, onCorrect, onBatchComplete }: GapsModeProps) {
  const prompts = TEAMARBEIT_GAP_TEST.filter((prompt) =>
    words.some((word) => word.id === prompt.wordId),
  );
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const prompt = prompts[index];
  const sentenceParts = prompt.sentence.split("______");
  const gapAnswers = sentenceParts.length > 2
    ? prompt.answer.split(/\s+/)
    : [prompt.answer];

  const check = () => {
    if (!prompt || !input.trim() || result === "correct") return;
    const isCorrect = normalize(input) === normalize(prompt.answer);
    setResult(isCorrect ? "correct" : "incorrect");
    if (isCorrect) onCorrect(prompt.wordId);
  };

  const advance = () => {
    if (!result) return;
    if (index === prompts.length - 1) {
      onBatchComplete();
      return;
    }
    setInput("");
    setResult(null);
    setIndex((current) => current + 1);
  };

  if (prompts.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <p className="text-sm text-[#5d6f74]">No gap questions for this batch.</p>
        <button
          type="button"
          onClick={onBatchComplete}
          className="flex h-10 items-center gap-2 rounded-full bg-[#d8f56d] px-5 text-sm font-semibold text-[#172b35]"
        >
          Continue <ArrowRightIcon />
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 pt-3">
      <div className="flex w-full items-center justify-between text-xs text-[#5d6f74]">
        <span>FILL IN THE GAP</span>
        <span>{index + 1}/{prompts.length}</span>
      </div>

      <div className="flex min-h-[158px] w-full flex-col items-center justify-center gap-3 border border-[#dce4bd] bg-[#f8fbdc] px-5 py-6 text-center">
        <p className="font-heading text-xl text-[#172b35]">
          {sentenceParts.map((part, partIndex) => (
            <Fragment key={partIndex}>
              {part}
              {partIndex < sentenceParts.length - 1 && (
                <span
                  className="inline-block border-b-2 border-[#263fd6] px-1 text-center align-baseline"
                  style={{ minWidth: `${Math.max(5, prompt.answer.length)}ch` }}
                >
                  {result
                    ? gapAnswers[partIndex] ?? prompt.answer
                    : " "}
                </span>
              )}
            </Fragment>
          ))}
        </p>
        <p className="font-body text-sm text-[#5d6f74]">{prompt.translation}</p>
      </div>

      <form
        className="flex flex-col gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (result) advance();
          else check();
        }}
      >
        <input
          autoComplete="off"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            if (result === "incorrect") setResult(null);
          }}
          placeholder="Type the missing German word or phrase"
          disabled={result === "correct"}
          aria-label="Missing German word or phrase"
          className={`h-11 w-full rounded-xl border bg-white px-4 text-sm text-[#172b35] outline-none placeholder:text-[#5d6f74] ${result === "incorrect" ? "border-[#c33d32] focus:border-[#c33d32]" : "border-[#b8c8c9] focus:border-[#263fd6]"}`}
        />

        {result && (
          <p className={`flex items-center gap-2 text-sm ${result === "correct" ? "text-[#315500]" : "text-[#a63d2d]"}`}>
            {result === "correct" ? <CheckIcon /> : <XIcon />}
            {result === "correct" ? "Correct" : "Incorrect"}
          </p>
        )}

        <button
          type="submit"
          disabled={!input.trim()}
          className="flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#d8f56d] text-sm font-semibold text-[#172b35] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {result ? <>Next sentence <ArrowRightIcon /></> : "Check answer"}
        </button>
      </form>
    </div>
  );
}
