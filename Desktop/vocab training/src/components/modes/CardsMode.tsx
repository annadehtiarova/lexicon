"use client";

import { useState } from "react";
import { VocabWord } from "@/lib/types";
import {
  ChevronLeftIcon,
  CheckIcon,
  XIcon,
  ArrowRightIcon,
} from "@/components/icons";

interface CardsModeProps {
  words: VocabWord[];
  masteredIds: Set<string>;
  onCorrect: (id: string) => void;
  onNextBatch?: () => void;
}

export default function CardsMode({
  words,
  masteredIds,
  onCorrect,
  onNextBatch,
}: CardsModeProps) {
  const [cardOrder, setCardOrder] = useState(() => words);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const word = cardOrder[index];
  const total = cardOrder.length;
  const progress = total > 1 ? (index / (total - 1)) * 100 : 100;

  const advance = () => {
    setFlipped(false);
    setIndex((i) => Math.min(i + 1, total - 1));
  };

  const goBack = () => {
    setFlipped(false);
    setIndex((i) => Math.max(i - 1, 0));
  };

  const handleAgain = () => {
    const remaining = cardOrder.filter((card) => card.id !== word.id);
    const insertionIndex = Math.min(index + 5, remaining.length);
    remaining.splice(insertionIndex, 0, word);
    setCardOrder(remaining);
    setFlipped(false);
    setIndex(Math.min(index, Math.max(remaining.length - 1, 0)));
  };

  return (
    <div className="flex flex-col items-start pt-0">
      <div className="h-1.5 w-full overflow-hidden bg-[#d5ddd7]">
        <div
          className="h-full bg-[#263fd6] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="w-full pt-4">
        <button
          onClick={() => setFlipped((f) => !f)}
          className="flex min-h-[158px] w-full flex-col items-center justify-center gap-2 border border-[#dce4bd] bg-[#f8fbdc] px-6 py-8 text-center shadow-none"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(248,251,220,0.8))",
          }}
        >
          <p className="font-body text-xs uppercase tracking-[2.4px] text-[#5d6f74]">
            {flipped ? "English" : "German"}
          </p>
          <p className="font-heading text-2xl tracking-[-0.4px] text-[#172b35]">
            {flipped ? word.english : word.german}
          </p>
          <p className="font-body text-xs text-[#5d6f74]">
            Tap the card to reveal
          </p>
        </button>
      </div>

      <div className="flex w-full items-center justify-between pt-4">
        <button
          onClick={goBack}
          disabled={index === 0}
          className="flex h-9 w-9 items-center justify-center gap-2 rounded-full border border-[#9bb8bc] bg-[#fffaf0] py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(8,117,141,0.08)] disabled:opacity-45 sm:w-auto sm:px-4"
          aria-label="Back"
          title="Back"
        >
          <ChevronLeftIcon /> <span className="hidden sm:inline">Back</span>
        </button>

        <div className="flex items-start gap-2">
          <button
            onClick={handleAgain}
            className="flex h-9 items-center gap-2 rounded-full border border-[#9bb8bc] bg-[#fffaf0] px-4 py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(8,117,141,0.08)] hover:border-[#08758d] hover:text-[#08758d]"
          >
            <CheckIcon /> Again
          </button>
          <button
            onClick={() => {
              onCorrect(word.id);
              advance();
            }}
            className="flex h-9 items-center gap-2 rounded-full bg-[#d8f56d] px-4 py-2 text-sm font-semibold text-[#172b35]"
          >
            <XIcon /> I know it
          </button>
        </div>

        <button
          type="button"
          onClick={advance}
          className="flex h-9 w-9 items-center justify-center gap-2 rounded-full border border-[#9bb8bc] bg-[#fffaf0] py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(8,117,141,0.08)] hover:border-[#08758d] hover:text-[#08758d] sm:w-auto sm:px-4"
          aria-label="Next"
          title="Next"
        >
          <span className="hidden sm:inline">Next</span> <ChevronLeftIcon className="h-4 w-4 shrink-0 rotate-180" />
        </button>
      </div>

      <p className="font-body w-full pt-4 text-center text-xs text-[#5d6f74]">
        Card {index + 1} of {total} · {masteredIds.size} mastered
      </p>
      {index === total - 1 && onNextBatch && (
        <button
          type="button"
          onClick={onNextBatch}
          className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#d8f56d] text-sm font-semibold text-[#172b35]"
        >
          Next batch <ArrowRightIcon />
        </button>
      )}
    </div>
  );
}
