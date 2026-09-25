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
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[rgba(198,233,64,0.2)]">
        <div
          className="h-full rounded-full bg-[#c6e940] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="w-full pt-4">
        <button
          onClick={() => setFlipped((f) => !f)}
          className="flex min-h-[256px] w-full flex-col items-center justify-center gap-3 rounded-[28px] border-[0.556px] border-[#2b3342] px-6 py-12 text-center shadow-[0px_24px_70px_0px_rgba(0,0,5,0.9)] backdrop-blur-[10px]"
          style={{
            backgroundImage:
              "linear-gradient(172.7deg, rgba(24, 31, 47, 0.9) 8.5%, rgba(16, 22, 35, 0.75) 91.5%)",
          }}
        >
          <p className="font-body text-xs uppercase tracking-[2.4px] text-[#9da5b5]">
            {flipped ? "English" : "German"}
          </p>
          <p className="font-heading text-4xl tracking-[-0.72px] text-[#f3f5f9]">
            {flipped ? word.english : word.german}
          </p>
          <p className="font-body text-xs text-[#9da5b5]">
            Tap the card to reveal
          </p>
        </button>
      </div>

      <div className="flex w-full items-center justify-between pt-4">
        <button
          onClick={goBack}
          disabled={index === 0}
          className="flex h-9 items-center gap-2 rounded-full border-[0.556px] border-[#2b3342] bg-[#090f1c] px-4 py-2 text-sm font-medium text-[#9da5b5] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] disabled:opacity-50"
        >
          <ChevronLeftIcon /> Back
        </button>

        <div className="flex items-start gap-2">
          <button
            onClick={handleKnewIt}
            className="flex h-9 items-center gap-2 rounded-full border-[0.556px] border-[#2b3342] bg-[#090f1c] px-4 py-2 text-sm font-medium text-[#9da5b5] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#151e2d]"
          >
            <CheckIcon /> Delete
          </button>
          <button
            onClick={advance}
            className="flex h-9 items-center gap-2 rounded-full bg-[#c6e940] px-4 py-2 text-sm font-semibold text-[#0e1a01] hover:opacity-90"
          >
            <XIcon /> Learn
          </button>
        </div>

        <button
          type="button"
          onClick={advance}
          className="flex h-9 items-center gap-2 rounded-full border-[0.556px] border-[#2b3342] bg-[#090f1c] px-4 py-2 text-sm font-medium text-[#9da5b5] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#151e2d]"
        >
          Next <ArrowRightIcon />
        </button>
      </div>

      <p className="font-body w-full pt-4 text-center text-xs text-[#9da5b5]">
        Card {index + 1} of {total} · {masteredIds.size} mastered
      </p>
      {index === total - 1 && onNextBatch && (
        <button
          type="button"
          onClick={onNextBatch}
          className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#c6e940] text-sm font-semibold text-[#0e1a01] hover:opacity-90"
        >
          Next batch <ArrowRightIcon />
        </button>
      )}
    </div>
  );
}
