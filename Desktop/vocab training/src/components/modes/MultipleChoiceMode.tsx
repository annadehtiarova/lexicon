"use client";

import { useMemo, useState } from "react";
import { VocabWord } from "@/lib/types";
import { ArrowRightIcon, CheckIcon, XIcon } from "@/components/icons";

interface MultipleChoiceModeProps {
  words: VocabWord[];
  onCorrect: (id: string) => void;
  onNextBatch?: () => void;
  previousCorrect: number;
  totalWords: number;
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

export default function MultipleChoiceMode({ words, onCorrect, onNextBatch, previousCorrect, totalWords }: MultipleChoiceModeProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

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
    if (index === words.length - 1) {
      setFinished(true);
      return;
    }
    setSelected(null);
    setIndex((i) => i + 1);
  };

  const answered = selected !== null;
  const answeredCount = index + (answered ? 1 : 0);

  if (finished) {
    return (
      <div className="flex w-full flex-col items-center gap-3 pt-5 text-center">
        <div className="flex min-h-[158px] w-full flex-col items-center justify-center border border-[#dce4bd] bg-[#f8fbdc] px-6 py-8">
          <p className="font-body text-xs uppercase tracking-[2px] text-[#5d6f74]">Quiz complete</p>
          <p className="font-heading mt-2 text-3xl font-semibold text-[#172b35]">{previousCorrect + score} out of {totalWords} correct</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start pt-0">
      <div className="flex w-full items-center justify-between text-xs text-[#5d6f74]">
        <span className="font-body uppercase tracking-[2px]">Question {index + 1}</span>
        <span>{score} correct / {answeredCount} answered</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden bg-[#d5ddd7]">
        <div className="h-full bg-[#263fd6] transition-all" style={{ width: `${(answeredCount / words.length) * 100}%` }} />
      </div>
      <div className="mt-4 flex min-h-[158px] w-full flex-col items-center justify-center gap-2 border border-[#dce4bd] bg-[#f8fbdc] px-6 py-8 text-center shadow-none">
        <p className="font-body text-xs uppercase tracking-[2.4px] text-[#5d6f74]">
          What does this mean?
        </p>
        <p className="font-heading mt-1 text-2xl tracking-[-0.4px] text-[#172b35]">
          {question.correct.german}
        </p>
        {answered && <p className={`mt-3 text-xs font-semibold ${selected === question.correct.id ? "text-[#08758d]" : "text-[#7a3038]"}`}>{selected === question.correct.id ? "Correct" : "Incorrect"}</p>}
      </div>

      <div className="mt-5 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        {question.options.map((opt) => {
          const isCorrect = opt.id === question.correct.id;
          const showState = selected !== null;
          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className={`flex min-h-[46px] items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                showState && isCorrect ? "border-[#6f9f70] bg-[#78ae79]/25 text-[#315500]" : showState && opt.id === selected ? "border-[#b84b55] bg-[#b84b55]/20 text-[#7a3038]" : showState ? "border-[#d5ddd7] bg-[#f0eee7] text-[#7a8789]" : "border-[#b8c8c9] bg-white text-[#172b35] hover:-translate-y-0.5 hover:border-[#263fd6]"
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
          className="mt-5 flex h-9 w-full items-center justify-center gap-2 rounded-full bg-[#d8f56d] text-sm font-semibold text-[#172b35]"
        >
          Next word <ArrowRightIcon />
        </button>
      )}
    </div>
  );
}
