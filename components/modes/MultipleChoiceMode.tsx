"use client";

import { useMemo, useState } from "react";
import { VocabWord } from "@/lib/types";
import { ArrowRightIcon, CheckIcon, XIcon } from "@/components/icons";

interface MultipleChoiceModeProps {
  words: VocabWord[];
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

export default function MultipleChoiceMode({ words }: MultipleChoiceModeProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const question = useMemo(() => buildQuestion(words, index), [words, index]);

  const handleSelect = (id: string) => {
    if (selected) return;
    setSelected(id);
    if (id === question.correct.id) setScore((s) => s + 1);
  };

  const next = () => {
    setSelected(null);
    setIndex((i) => (i + 1) % words.length);
  };

  const answered = selected !== null;
  const answeredCount = index + (answered ? 1 : 0);

  return (
    <div className="flex flex-col items-start pt-8">
      <div className="flex w-full items-center justify-between text-xs text-[#9da5b5]">
        <span className="font-body uppercase tracking-[2px]">Question {index + 1}</span>
        <span>{score} correct / {answeredCount} answered</span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[rgba(198,233,64,0.16)]">
        <div className="h-full rounded-full bg-[#c6e940] transition-all" style={{ width: `${(answeredCount / words.length) * 100}%` }} />
      </div>
      <div className="mt-6 flex min-h-[224px] w-full flex-col items-center justify-center rounded-[28px] border border-[#2b3342] bg-[linear-gradient(172.7deg,rgba(24,31,47,0.96),rgba(16,22,35,0.88))] px-6 py-12 text-center shadow-[0_24px_70px_rgba(0,0,5,0.9)]">
        <p className="font-body text-xs uppercase tracking-[2.4px] text-[#9da5b5]">
          What does this mean?
        </p>
        <p className="font-heading mt-3 text-4xl text-[#f3f5f9]">
          {question.correct.german}
        </p>
        {answered && <p className={`mt-3 text-xs ${selected === question.correct.id ? "text-[#c6e940]" : "text-[#ff8b7b]"}`}>{selected === question.correct.id ? "Correct" : `Answer: ${question.correct.english}`}</p>}
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
                showState && isCorrect ? "border-[#c6e940] bg-[rgba(198,233,64,0.12)] text-[#e8f9a8]" : showState && opt.id === selected ? "border-[#ff6657] bg-[rgba(255,102,87,0.12)] text-[#ffb0a6]" : showState ? "border-[#2b3342] bg-[#111827] text-[#69758a]" : "border-[#2b3342] bg-[rgba(17,24,39,0.72)] text-[#e5e9f0] hover:-translate-y-0.5 hover:border-[#596477]"
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
          className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#c6e940] text-sm font-semibold text-[#0e1a01]"
        >
          Next word <ArrowRightIcon />
        </button>
      )}
    </div>
  );
}
