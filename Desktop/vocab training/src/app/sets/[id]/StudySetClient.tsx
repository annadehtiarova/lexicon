"use client";

import { use, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  deleteWord,
  getSet,
  setMasteredWordIds,
  updateWord,
} from "@/lib/storage";
import { VocabWord } from "@/lib/types";
import { WORD_BANK } from "@/lib/wordBank";
import {
  EXERCISE_SET_ID,
  EXERCISE_SET_NAME,
  getExerciseSetWords,
} from "@/lib/exerciseData";
import CardsMode from "@/components/modes/CardsMode";
import MultipleChoiceMode from "@/components/modes/MultipleChoiceMode";
import TypingMode from "@/components/modes/TypingMode";
import GapsMode from "@/components/modes/GapsMode";
import MatchingMode from "@/components/modes/MatchingMode";
import {
  ChevronLeftIcon,
  SparklesIcon,
  ListChecksIcon,
  KeyboardIcon,
  ColumnsIcon,
  GridIcon,
  TrashIcon,
} from "@/components/icons";

const MODES = [
  { key: "cards", label: "Cards", Icon: SparklesIcon },
  { key: "quiz", label: "Quiz", Icon: ListChecksIcon },
  { key: "write", label: "Write", Icon: KeyboardIcon },
  { key: "gaps", label: "Gaps", Icon: ColumnsIcon },
  { key: "match", label: "Match", Icon: GridIcon },
] as const;

type ModeKey = (typeof MODES)[number]["key"];

const KNOWN_NOUN_ARTICLES = new Map(
  WORD_BANK.filter((word) => word.pos === "noun").map((word) => {
    const match = word.german.match(/^(der|die|das)\s+(.+)$/i);

    return match
      ? [match[2].toLowerCase(), match[1].toLowerCase()]
      : [word.german.toLowerCase(), "die"];
  }),
);

function displayGerman(word: VocabWord): string {
  if (word.pos !== "noun") return word.german.toLowerCase();

  const existingArticle = word.german.match(/^(der|die|das)\s+(.+)$/i);

  if (existingArticle) {
    return `${existingArticle[1].toLowerCase()} ${existingArticle[2].charAt(0).toUpperCase()}${existingArticle[2].slice(1)}`;
  }

  const noun = word.german.toLowerCase();

  const article = KNOWN_NOUN_ARTICLES.get(noun) ?? inferNounArticle(noun);

  return `${article} ${word.german.charAt(0).toUpperCase()}${word.german.slice(1)}`;
}

function inferNounArticle(noun: string): string {
  if (/(chen|lein|ment|um|ma|zeug)$/.test(noun)) return "das";
  if (/(ung|heit|keit|schaft|tion|tät|ik|ei|ie|ur|enz|anz|age|ade|ette|elle|ose|sis|itis)$/.test(noun)) return "die";
  if (/(ismus|ling|or|us|ist|ant|ent|eur|är)$/.test(noun)) return "der";
  if (/e$/.test(noun)) return "die";
  return "der";
}

interface ResolvedSet {
  name: string;
  words: VocabWord[];
  masteredWordIds: string[];
  isPersisted: boolean;
}

function resolveSet(id: string): ResolvedSet | null {
  if (id === EXERCISE_SET_ID) {
    return {
      name: EXERCISE_SET_NAME,
      words: getExerciseSetWords(),
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  const stored = getSet(id);

  if (!stored) return null;

  return {
    name: stored.name,
    words: stored.words,
    masteredWordIds: stored.masteredWordIds,
    isPersisted: true,
  };
}

export default function StudySetClient({ id }: { id: string }) {

  const [set, setSet] = useState<ResolvedSet | null | undefined>(undefined);
  const [mode, setMode] = useState<ModeKey>("cards");
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [editingWordId, setEditingWordId] = useState<string | null>(null);
  const [draftGerman, setDraftGerman] = useState("");
  const [draftEnglish, setDraftEnglish] = useState("");

  useEffect(() => {
    const resolved = resolveSet(id);

    setSet(resolved);
    setMasteredIds(new Set(resolved?.masteredWordIds ?? []));
  }, [id]);

  const words: VocabWord[] = useMemo(
    () =>
      (set?.words ?? []).map((word) => ({
        ...word,
        german: displayGerman(word),
        english:
          word.pos === "verb" &&
          !word.english.toLowerCase().startsWith("to ")
            ? `to ${word.english.toLowerCase()}`
            : word.english.toLowerCase(),
      })),
    [set],
  );

  if (set === undefined) return null;

  if (set === null) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-slate-300">
          This study set couldn&apos;t be found.
        </p>

        <Link
          href="/"
          className="rounded-full bg-[#c6e940] px-5 py-2 font-medium text-[#0e1a01] hover:opacity-90"
        >
          Back home
        </Link>
      </main>
    );
  }

  const handleKnewIt = (wordId: string) => {
    if (!set.isPersisted) return;
    deleteWord(id, wordId);
    setSet((current) =>
      current
        ? { ...current, words: current.words.filter((word) => word.id !== wordId) }
        : current,
    );
    setMasteredIds((current) => {
      const next = new Set(current);
      next.delete(wordId);
      return next;
    });
  };

  const handleDeleteWord = (wordId: string) => {
    if (!set.isPersisted) return;

    deleteWord(id, wordId);

    setSet((current) =>
      current
        ? {
            ...current,
            words: current.words.filter((word) => word.id !== wordId),
          }
        : current,
    );

    setMasteredIds((current) => {
      const next = new Set(current);
      next.delete(wordId);
      return next;
    });
  };

  const startEditing = (word: VocabWord) => {
    if (!set.isPersisted) return;

    setEditingWordId(word.id);
    setDraftGerman(word.german);
    setDraftEnglish(word.english);
  };

  const cancelEditing = () => {
    setEditingWordId(null);
    setDraftGerman("");
    setDraftEnglish("");
  };

  const saveEditing = (wordId: string) => {
    const german = draftGerman.trim();
    const english = draftEnglish.trim();

    if (!german || !english) return;

    updateWord(id, wordId, { german, english });

    setSet((current) =>
      current
        ? {
            ...current,
            words: current.words.map((word) =>
              word.id === wordId
                ? { ...word, german, english }
                : word,
            ),
          }
        : current,
    );

    cancelEditing();
  };

  return (
    <main className="flex flex-1 justify-center px-4 pb-24">
      <div className="w-full max-w-3xl">
        <div className="pt-10">
          <Link
            href="/"
            className="flex w-fit items-center gap-1.5 text-sm text-[#9da5b5] hover:text-[#f3f5f9]"
          >
            <ChevronLeftIcon />
            All sets
          </Link>
        </div>

        <div className="pt-5">
          <h1 className="font-heading text-4xl tracking-[-0.72px] text-[#f3f5f9]">
            {set.name}
          </h1>

          <p className="font-body pt-2 text-sm text-[#9da5b5]">
            {words.length} words · {masteredIds.size} mastered
          </p>
        </div>

        <div className="pt-8">
          <div className="flex h-9 w-full items-center rounded-full bg-[#1d2433] p-1">
            {MODES.map(({ key, label, Icon }) => {
              const active = mode === key;

              return (
                <button
                  key={key}
                  onClick={() => setMode(key)}
                  className={`flex h-full flex-1 items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? "bg-[#090f1c] text-[#f3f5f9] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]"
                      : "text-[#9da5b5] hover:text-[#f3f5f9]"
                  }`}
                >
                  <Icon />
                  {label}
                </button>
              );
            })}
          </div>

          <div className="pb-6">
            {mode === "cards" && (
              <CardsMode
                words={words}
                masteredIds={masteredIds}
                onKnewIt={handleKnewIt}
              />
            )}

            {mode === "quiz" && (
              <div className="pt-8">
                <MultipleChoiceMode words={words} />
              </div>
            )}

            {mode === "write" && (
              <div className="pt-8">
                <TypingMode words={words} />
              </div>
            )}

            {mode === "gaps" && <GapsMode words={words} />}

            {mode === "match" && (
              <div className="pt-8">
                <MatchingMode words={words} />
              </div>
            )}
          </div>
        </div>

        <section className="pt-6">
          <h2 className="font-heading text-2xl text-[#f3f5f9]">
            All words
          </h2>

          <div className="mt-4 overflow-hidden rounded-2xl border-[0.556px] border-[#2b3342]">
            {words.map((word, i) => (
              <div
                key={word.id}
                className={`flex items-center justify-between gap-4 px-5 py-3.5 ${
                  i !== words.length - 1
                    ? "border-b-[0.556px] border-[#2b3342]"
                    : ""
                }`}
              >
                {editingWordId === word.id ? (
                  <div className="flex w-full flex-col gap-3">
                    <input
                      value={draftGerman}
                      onChange={(event) =>
                        setDraftGerman(event.target.value)
                      }
                      className="h-9 rounded-lg border border-[#3a4457] bg-[#0f1521] px-3 text-sm text-[#f3f5f9] outline-none focus:border-[#c6e940]"
                      aria-label="German word"
                    />

                    <input
                      value={draftEnglish}
                      onChange={(event) =>
                        setDraftEnglish(event.target.value)
                      }
                      className="h-9 rounded-lg border border-[#3a4457] bg-[#0f1521] px-3 text-sm text-[#f3f5f9] outline-none focus:border-[#c6e940]"
                      aria-label="English translation"
                    />

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => saveEditing(word.id)}
                        className="rounded-full bg-[#c6e940] px-4 py-1.5 text-xs font-semibold text-[#0e1a01]"
                      >
                        Save
                      </button>

                      <button
                        type="button"
                        onClick={cancelEditing}
                        className="rounded-full bg-[#20293a] px-4 py-1.5 text-xs text-[#f3f5f9]"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <button
                        type="button"
                        onClick={() => startEditing(word)}
                        className="text-left font-heading text-base tracking-[-0.32px] text-[#f3f5f9]"
                      >
                        {displayGerman(word)}
                      </button>

                      <p className="font-body pt-1 text-xs italic text-[#9da5b5]">
                        {word.example}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <div className="text-right">
                        <button
                          type="button"
                          onClick={() => startEditing(word)}
                          className="font-body text-right text-sm text-[#9da5b5]"
                        >
                          {word.english}
                        </button>

                        <p className="font-body pt-0.5 text-[11px] uppercase tracking-[0.55px] text-[rgba(157,165,181,0.7)]">
                          {word.pos}
                        </p>
                      </div>

                      {set.isPersisted && (
                        <button
                          onClick={() => handleDeleteWord(word.id)}
                          className="rounded-full p-1.5 text-[#9da5b5] hover:bg-[#20293a] hover:text-red-400"
                          aria-label={`Delete ${word.german}`}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
