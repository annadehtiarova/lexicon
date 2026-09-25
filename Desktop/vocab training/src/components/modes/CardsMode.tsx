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
  onKnewIt: (id: string) => void;
  onNextBatch?: () => void;
}

export default function CardsMode({
  words,
  masteredIds,
  onKnewIt,
  onNextBatch,
}: CardsModeProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const word = words[index];
  const total = words.length;
  const progress = total > 1 ? (index / (total - 1)) * 100 : 100;

  const advance = () => {
    setFlipped(false);
    setIndex((i) => Math.min(i + 1, total - 1));
  };

  const goBack = () => {
    setFlipped(false);
    setIndex((i) => Math.max(i - 1, 0));
  };

  const handleKnewIt = () => {
    onKnewIt(word.id);
    setFlipped(false);
    setIndex((current) => Math.min(current, Math.max(words.length - 2, 0)));
  };

  return (
    <div className="flex flex-col items-start pt-8">
      <div className="h-1.5 w-full overflow-hidden bg-[#d5ddd7]">
        <div
          className="h-full bg-[#08758d] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="w-full pt-4">
        <button
          onClick={() => setFlipped((f) => !f)}
          className="flex min-h-[256px] w-full flex-col items-center justify-center gap-3 border border-[#c7d1ca] bg-[#fffaf0] px-6 py-12 text-center shadow-[6px_6px_0_rgba(8,117,141,0.1)]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(244,239,229,0.8))",
          }}
        >
          <p className="font-body text-xs uppercase tracking-[2.4px] text-[#5d6f74]">
            {flipped ? "English" : "German"}
          </p>
          <p className="font-heading text-4xl tracking-[-0.72px] text-[#172b35]">
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
          className="flex h-9 items-center gap-2 rounded-full border border-[#9bb8bc] bg-[#fffaf0] px-4 py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(8,117,141,0.08)] disabled:opacity-45"
        >
          <ChevronLeftIcon /> Back
        </button>

        <div className="flex items-start gap-2">
          <button
            onClick={handleKnewIt}
            className="flex h-9 items-center gap-2 rounded-full border border-[#9bb8bc] bg-[#fffaf0] px-4 py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(8,117,141,0.08)] hover:border-[#08758d] hover:text-[#08758d]"
          >
            <CheckIcon /> Delete
          </button>
          <button
            onClick={advance}
            className="flex h-9 items-center gap-2 rounded-full bg-[#08758d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#075a70]"
          >
            <XIcon /> Learn
          </button>
        </div>

        <button
          type="button"
          onClick={advance}
          className="flex h-9 items-center gap-2 rounded-full border border-[#9bb8bc] bg-[#fffaf0] px-4 py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(8,117,141,0.08)] hover:border-[#08758d] hover:text-[#08758d]"
        >
          Next <ArrowRightIcon />
        </button>
      </div>

      <p className="font-body w-full pt-4 text-center text-xs text-[#5d6f74]">
        Card {index + 1} of {total} · {masteredIds.size} mastered
      </p>
      {index === total - 1 && onNextBatch && (
        <button
          type="button"
          onClick={onNextBatch}
          className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#08758d] text-sm font-semibold text-white hover:bg-[#075a70]"
        >
          Next batch <ArrowRightIcon />
        </button>
      )}
    </div>
  );
}
