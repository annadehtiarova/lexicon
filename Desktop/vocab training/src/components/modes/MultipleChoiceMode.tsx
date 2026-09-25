"use client";

import { useMemo, useState } from "react";
import { VocabWord } from "@/lib/types";
import { ArrowRightIcon, CheckIcon, XIcon } from "@/components/icons";

interface MultipleChoiceModeProps {
  words: VocabWord[];
  onCorrect: (id: string) => void;
  onNextBatch?: () => void;
}

function buildQuestion(words: VocabWord[], index: number) {
  const correct = words[index];
  const distractors = words
    .filter((w) => w.id !== correct.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  const options = [...distractors, correct].sort(() => Math.random() - 0.5);
  return { correct, options };
}

export default function MultipleChoiceMode({ words, onCorrect, onNextBatch }: MultipleChoiceModeProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const question = useMemo(() => buildQuestion(words, index), [words, index]);

  const handleSelect = (id: string) => {
    if (selected) return;
    setSelected(id);
    if (id === question.correct.id) {
      setScore((s) => s + 1);
      onCorrect(id);
    }
  };

  const next = () => {
    if (index === words.length - 1 && onNextBatch) {
      onNextBatch();
      return;
    }
    setSelected(null);
    setIndex((i) => (i + 1) % words.length);
  };

  const answered = selected !== null;
  const answeredCount = index + (answered ? 1 : 0);

  return (
    <div className="flex flex-col items-start pt-8">
      <div className="flex w-full items-center justify-between text-xs text-[#5d6f74]">
        <span className="font-body uppercase tracking-[2px]">Question {index + 1}</span>
        <span>{score} correct / {answeredCount} answered</span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden bg-[#d5ddd7]">
        <div className="h-full bg-[#08758d] transition-all" style={{ width: `${(answeredCount / words.length) * 100}%` }} />
      </div>
      <div className="mt-6 flex min-h-[224px] w-full flex-col items-center justify-center border border-[#c7d1ca] bg-[#fffaf0] px-6 py-12 text-center shadow-[6px_6px_0_rgba(8,117,141,0.1)]">
        <p className="font-body text-xs uppercase tracking-[2.4px] text-[#5d6f74]">
          What does this mean?
        </p>
        <p className="font-heading mt-3 text-4xl text-[#172b35]">
          {question.correct.german}
        </p>
        {answered && <p className={`mt-3 text-xs ${selected === question.correct.id ? "text-[#08758d]" : "text-[#b44735]"}`}>{selected === question.correct.id ? "Correct" : `Answer: ${question.correct.english}`}</p>}
      </div>

      <div className="mt-5 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        {question.options.map((opt) => {
          const isCorrect = opt.id === question.correct.id;
          const showState = selected !== null;
          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className={`flex min-h-[58px] items-center justify-between rounded-2xl border px-5 py-3 text-left text-sm transition-all ${
                showState && isCorrect ? "border-[#08758d] bg-[#e4f2f3] text-[#075a70]" : showState && opt.id === selected ? "border-[#e76548] bg-[#fff0df] text-[#a63d2d]" : showState ? "border-[#d5ddd7] bg-[#f0eee7] text-[#7a8789]" : "border-[#9bb8bc] bg-[#fffaf0] text-[#172b35] hover:-translate-y-0.5 hover:border-[#08758d]"
              }`}
            >
              <span>{opt.english}</span>
              {showState && isCorrect && <CheckIcon />}
              {showState && opt.id === selected && !isCorrect && <XIcon />}
            </button>
          );
        })}
      </div>

      {selected && (
        <button
          onClick={next}
          className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#08758d] text-sm font-semibold text-white hover:bg-[#075a70]"
        >
          Next word <ArrowRightIcon />
        </button>
      )}
    </div>
  );
}
