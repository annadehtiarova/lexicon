"use client";

import { useMemo, useState } from "react";
import { VocabWord } from "@/lib/types";
import { ArrowRightIcon, CheckIcon, XIcon } from "@/components/icons";

interface MultipleChoiceModeProps {
  words: VocabWord[];
  onCorrect: (id: string) => void;
  onBatchComplete: () => void;
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

export default function MultipleChoiceMode({ words, onCorrect, onBatchComplete }: MultipleChoiceModeProps) {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(() => buildQuestion(words, 0));
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const handleSelect = (id: string) => {
    if (selected) return;
    setSelected(id);
    if (id === question.correct.id) {
      setScore((s) => s + 1);
      onCorrect(id);
    }
  };

  const next = () => {
    if (index === words.length - 1) {
      onBatchComplete();
      return;
    }
    const nextIndex = (index + 1) % words.length;
    setSelected(null);
    setIndex(nextIndex);
    setQuestion(buildQuestion(words, nextIndex));
  };

  const answered = selected !== null;
  const answeredCount = index + (answered ? 1 : 0);

  return (
    <div className="flex flex-col items-start pt-0">
      <div className="flex w-full items-center justify-between text-xs text-[#5d6f74]">
        <span className="font-body uppercase tracking-[2px]">Question {index + 1}</span>
        <span>{score} correct / {answeredCount} answered</span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#d5ddd7]">
        <div className="h-full rounded-full bg-[#263fd6] transition-all" style={{ width: `${(answeredCount / words.length) * 100}%` }} />
      </div>
      <div className="mt-4 flex min-h-[158px] w-full flex-col items-center justify-center gap-2 border border-[#dce4bd] bg-[#f8fbdc] px-6 py-8 text-center shadow-none">
        <p className="font-body text-xs uppercase tracking-[2.4px] text-[#5d6f74]">
          What does this mean?
        </p>
        <p className="font-heading mt-1 text-2xl text-black">
          {question.correct.german}
        </p>
        {answered && <p className={`mt-2 text-xs ${selected === question.correct.id ? "text-[#315500]" : "text-[#a63d2d]"}`}>{selected === question.correct.id ? "Correct" : "Incorrect"}</p>}
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
                showState && opt.id === selected && isCorrect ? "border-[#b8d34c] bg-[#d8f56d]/60 text-[#172b35]" : showState && opt.id === selected ? "border-red-400 bg-red-500/10 text-[#a63d2d]" : "border-[#9bb8bc] bg-white text-[#172b35] hover:-translate-y-0.5 hover:border-[#263fd6]"
              }`}
            >
              <span>{opt.english}</span>
              {showState && opt.id === selected && isCorrect && <CheckIcon />}
              {showState && opt.id === selected && !isCorrect && <XIcon />}
            </button>
          );
        })}
      </div>

      {selected && (
        <button
          onClick={next}
          className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#d8f56d] text-sm font-semibold text-[#172b35]"
        >
          Next word <ArrowRightIcon />
        </button>
      )}
    </div>
  );
}
