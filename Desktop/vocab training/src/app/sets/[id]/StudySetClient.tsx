"use client";

import { use, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  addBuiltInWord,
  addWord,
  updateBuiltInWord,
  deleteWord,
  deleteBuiltInWord,
  getSet,
  loadBuiltInWords,
  ExerciseKey,
  ExerciseProgress,
  LastBatchResult,
  clearLastBatchResult,
  isWordMastered,
  loadLastBatchResult,
  loadExerciseProgress,
  saveLastBatchResult,
  saveExerciseProgress,
  setMasteredWordIds,
  updateWord,
} from "@/lib/storage";
import { VocabWord } from "@/lib/types";
import { displayGerman } from "@/lib/wordDisplay";
import { THEMA1_VERBS_SET_ID, getThema1VerbsSet } from "@/lib/thema1VerbsData";
import { THEMA1_NOUNS_SET_ID, getThema1NounsSet } from "@/lib/thema1NounsData";
import { THEMA1_ADJECTIVES_SET_ID, getThema1AdjectivesSet } from "@/lib/thema1AdjectivesData";
import { THEMA1_SENTENCES_SET_ID, getThema1SentencesSet } from "@/lib/thema1SentencesData";
import CardsMode from "@/components/modes/CardsMode";
import MultipleChoiceMode from "@/components/modes/MultipleChoiceMode";
import MatchingMode from "@/components/modes/MatchingMode";
import GapsMode from "@/components/modes/GapsMode";
import {
  ChevronLeftIcon,
  SparklesIcon,
  ListChecksIcon,
  GridIcon,
  KeyboardIcon,
  TrashIcon,
  XIcon,
} from "@/components/icons";

const MODES = [
  { key: "cards", label: "Cards", Icon: SparklesIcon },
  { key: "quiz", label: "Quiz", Icon: ListChecksIcon },
  { key: "match", label: "Match", Icon: GridIcon },
] as const;

type ModeKey = (typeof MODES)[number]["key"] | "gaps";
const BATCH_SIZE = 15;
const GAP_MODE = { key: "gaps", label: "Gap", Icon: KeyboardIcon } as const;

interface ResolvedSet {
  name: string;
  words: VocabWord[];
  masteredWordIds: string[];
  isPersisted: boolean;
}

function resolveSet(id: string): ResolvedSet | null {
  if (id === THEMA1_VERBS_SET_ID) {
    const builtInSet = getThema1VerbsSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === THEMA1_NOUNS_SET_ID) {
    const builtInSet = getThema1NounsSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === THEMA1_ADJECTIVES_SET_ID) {
    const builtInSet = getThema1AdjectivesSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === THEMA1_SENTENCES_SET_ID) {
    const builtInSet = getThema1SentencesSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
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
  const [practiceBatch, setPracticeBatch] = useState(0);
  const [practiceWordIds, setPracticeWordIds] = useState<string[] | null>(null);
  const [deferredWordIds, setDeferredWordIds] = useState<string[]>([]);
  const [completedModes, setCompletedModes] = useState<Set<ModeKey>>(new Set());
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [lastBatchResult, setLastBatchResult] = useState<LastBatchResult | null>(null);
  const [exerciseProgress, setExerciseProgress] = useState<ExerciseProgress>({
    cards: [],
    quiz: [],
    match: [],
    gaps: [],
  });
  const pendingProgressRef = useRef<ExerciseProgress>({
    cards: [],
    quiz: [],
    match: [],
    gaps: [],
  });
  const [editingWordId, setEditingWordId] = useState<string | null>(null);
  const [draftGerman, setDraftGerman] = useState("");
  const [draftEnglish, setDraftEnglish] = useState("");
  const [draftExample, setDraftExample] = useState("");
  const [draftPos, setDraftPos] = useState("noun");
  const [draftArticle, setDraftArticle] = useState("der");
  const [isAddingWord, setIsAddingWord] = useState(false);
  const [newGerman, setNewGerman] = useState("");
  const [newEnglish, setNewEnglish] = useState("");
  const [newPos, setNewPos] = useState("noun");
  const [newExample, setNewExample] = useState("");
  const [wordSearch, setWordSearch] = useState("");
  const [exerciseRevision, setExerciseRevision] = useState(0);

  useEffect(() => {
    const resolved = resolveSet(id);
    const resolvedWords = resolved
      ? resolved.isPersisted
        ? resolved.words
        : loadBuiltInWords(id, resolved.words)
      : [];
    setSet(
      resolved
        ? {
            ...resolved,
            words: resolvedWords,
          }
        : resolved,
    );
    const progress = loadExerciseProgress(id);
    const requiredExercises: ExerciseKey[] =
      id === THEMA1_SENTENCES_SET_ID
        ? ["cards", "gaps"]
        : ["cards", "quiz", "match"];
    pendingProgressRef.current = progress;
    setExerciseProgress(progress);
    const savedBatchResult = loadLastBatchResult(id);
    setLastBatchResult(savedBatchResult);
    setPracticeBatch(savedBatchResult?.batch ?? 0);
    const remainingWords = resolvedWords;
    const mastered = remainingWords
      .filter((word) => isWordMastered(word.id, progress, requiredExercises))
      .map((word) => word.id);
    setMasteredIds(new Set(mastered));
    setPracticeWordIds(
      remainingWords
        .filter((word) => !mastered.includes(word.id))
        .map((word) => word.id),
    );
    setDeferredWordIds([]);
    setPracticeBatch(0);
    setCompletedModes(new Set());
    setMode("cards");
  }, [id]);

  const words: VocabWord[] = useMemo(
    () => {
      const uniqueWords = new Map<string, VocabWord>();
      for (const word of set?.words ?? []) {
        if (uniqueWords.has(word.id)) continue;
        uniqueWords.set(word.id, {
          ...word,
          german: displayGerman(word),
          english:
            id === THEMA1_SENTENCES_SET_ID
              ? word.english
              : word.pos === "verb" && !word.english.toLowerCase().startsWith("to ")
                ? `to ${word.english.toLowerCase()}`
                : word.english.toLowerCase(),
        });
      }
      return [...uniqueWords.values()];
    },
    [set],
  );
  const queuedWords = words.filter(
    (word) => practiceWordIds?.includes(word.id) ?? false,
  );
  const practiceWords = queuedWords.slice(0, BATCH_SIZE);
  const visibleWords = words.filter((word) => {
    const query = wordSearch.trim().toLowerCase();
    if (!query) return true;
    return [word.b1, word.german, word.english, word.pos, word.example]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });

  const markCorrect = (exercise: ExerciseKey, wordId: string) => {
    const current = pendingProgressRef.current;
    if (current[exercise].includes(wordId)) return;
    pendingProgressRef.current = {
      ...current,
      [exercise]: [...current[exercise], wordId],
    };
  };

  const commitProgress = () => {
    const next = pendingProgressRef.current;
    saveExerciseProgress(id, next);
    setExerciseProgress(next);
    const masteredWords = words
      .filter((word) =>
        isWordMastered(
          word.id,
          next,
          id === THEMA1_SENTENCES_SET_ID
            ? ["cards", "gaps"]
            : ["cards", "quiz", "match"],
        ),
      );
    const masteredWordIds = new Set(masteredWords.map((word) => word.id));
    setMasteredIds(masteredWordIds);
    const readyWordIds = [
      ...queuedWords
        .slice(practiceWords.length)
        .filter((word) => !masteredWordIds.has(word.id)),
      ...words
        .filter((word) => deferredWordIds.includes(word.id))
        .filter((word) => !masteredWordIds.has(word.id)),
    ].map((word) => word.id);
    const nextDeferredWordIds = practiceWords
      .filter((word) => !masteredWordIds.has(word.id))
      .map((word) => word.id);
    const nextPracticeWordIds = readyWordIds.length
      ? readyWordIds
      : nextDeferredWordIds;
    setPracticeWordIds(nextPracticeWordIds);
    setDeferredWordIds(readyWordIds.length ? nextDeferredWordIds : []);
    const result = {
      batch: practiceBatch + 1,
      mastered: practiceWords.filter((word) =>
        masteredWordIds.has(word.id),
      ).length,
      total: practiceWords.length,
    };
    saveLastBatchResult(id, result);
    return result;
  };

  const completeModeBatch = (completedMode: ModeKey, waitForBatchAdvance = false) => {
    if (completedModes.has(completedMode)) return;
    const nextCompleted = new Set(completedModes);
    nextCompleted.add(completedMode);
    setCompletedModes(nextCompleted);

    const sequence: ModeKey[] =
      id === THEMA1_SENTENCES_SET_ID
        ? ["cards", "gaps"]
        : ["cards", "quiz", "match"];
    const nextMode = sequence[sequence.indexOf(completedMode) + 1];
    if (nextMode) {
      setMode(nextMode);
      return;
    }

    setLastBatchResult(commitProgress());
    if (waitForBatchAdvance) return;
    setMode("cards");
    setCompletedModes(new Set());
  };

  const continueToNextBatch = () => {
    setPracticeBatch((current) => current + 1);
    setMode("cards");
    setCompletedModes(new Set());
  };

  const resetSet = () => {
    if (!window.confirm("Reset all progress for this set and start over?")) return;

    const resetProgress: ExerciseProgress = {
      cards: [],
      quiz: [],
      match: [],
      gaps: [],
    };
    pendingProgressRef.current = resetProgress;
    saveExerciseProgress(id, resetProgress);
    clearLastBatchResult(id);
    setExerciseProgress(resetProgress);
    setLastBatchResult(null);
    setMasteredIds(new Set());
    setPracticeWordIds(words.map((word) => word.id));
    setDeferredWordIds([]);
    setPracticeBatch(0);
    setCompletedModes(new Set());
    setMode("cards");
    setExerciseRevision((revision) => revision + 1);
  };

  const modeProgress = MODES.map(({ key, label }) => ({
    key,
    label,
    count: practiceWords.filter((word) => exerciseProgress[key].includes(word.id)).length,
    complete: completedModes.has(key),
  }));
  const visibleModes =
    id === THEMA1_SENTENCES_SET_ID
      ? [...MODES.filter(({ key }) => key === "cards"), GAP_MODE]
      : MODES;
  const isSentenceSet = id === THEMA1_SENTENCES_SET_ID;

  if (set === undefined || practiceWordIds === null) return null;

  if (set === null) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-slate-300">This study set couldn&apos;t be found.</p>

        <Link
          href="/"
          className="rounded-full bg-[#d8f56d] px-5 py-2 font-medium text-[#172b35] hover:opacity-90"
        >
          Back home
        </Link>
      </main>
    );
  }

  const handleKnewIt = (wordId: string) => {
    markCorrect("cards", wordId);
  };

  const handleDeleteWord = (wordId: string) => {
    if (!set.isPersisted) {
      deleteBuiltInWord(id, wordId);
    } else {
      deleteWord(id, wordId);
    }

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
    const nextProgress = Object.fromEntries(
      (Object.keys(pendingProgressRef.current) as ExerciseKey[]).map((exercise) => [
        exercise,
        pendingProgressRef.current[exercise].filter((savedId) => savedId !== wordId),
      ]),
    ) as ExerciseProgress;
    pendingProgressRef.current = nextProgress;
    saveExerciseProgress(id, nextProgress);
    setExerciseProgress(nextProgress);
    setPracticeWordIds((current) => current?.filter((queuedId) => queuedId !== wordId) ?? []);
    setDeferredWordIds((current) => current.filter((queuedId) => queuedId !== wordId));
    setCompletedModes(new Set());
    setExerciseRevision((revision) => revision + 1);
  };

  const startEditing = (word: VocabWord) => {
    setEditingWordId(word.id);
    const articleMatch = word.german.match(/^(der|die|das)\s+(.+)$/i);
    setDraftGerman(articleMatch ? articleMatch[2] : word.german);
    setDraftEnglish(word.english);
    setDraftExample(word.example);
    setDraftPos(word.pos);
    setDraftArticle(articleMatch?.[1].toLowerCase() ?? "der");
  };

  const cancelEditing = () => {
    setEditingWordId(null);
    setDraftGerman("");
    setDraftEnglish("");
    setDraftExample("");
    setDraftPos("noun");
    setDraftArticle("der");
  };

  const saveEditing = (wordId: string) => {
    const germanWord = draftGerman.trim().replace(/^(der|die|das)\s+/i, "");
    const german =
      draftPos === "noun" ? `${draftArticle} ${germanWord}` : germanWord;
    const english = draftEnglish.trim();

    if (!german || !english) return;

    const changes = {
      german,
      english,
      example: draftExample.trim(),
      pos: draftPos,
    };
    if (set.isPersisted) updateWord(id, wordId, changes);
    else updateBuiltInWord(id, wordId, changes);

    setSet((current) =>
      current
        ? {
            ...current,
                words: current.words.map((word) =>
              word.id === wordId
                ? { ...word, ...changes }
                : word,
            ),
          }
        : current,
    );

    cancelEditing();
  };

  const saveNewWord = () => {
    if (!newGerman.trim() || !newEnglish.trim()) return;
    const word: VocabWord = {
      id: crypto.randomUUID(),
      german: newGerman.trim(),
      english: newEnglish.trim(),
      pos: newPos,
      example: newExample.trim(),
    };
    if (set.isPersisted) addWord(id, word);
    else addBuiltInWord(id, word);
    setSet((current) =>
      current ? { ...current, words: [...current.words, word] } : current,
    );
    setPracticeWordIds((current) => (current ? [...current, word.id] : [word.id]));
    setNewGerman("");
    setNewEnglish("");
    setNewExample("");
    setIsAddingWord(false);
  };

  return (
    <main className="flex flex-1 justify-center bg-white px-4 pb-16">
      <div className="w-full max-w-[478px] border-x border-[#dce4e2] bg-white px-5 pb-10 md:max-w-[760px]">
        <div className="pt-5">
          <Link
            href="/"
            className="flex w-fit items-center gap-1.5 text-sm text-[#263fd6] hover:text-[#1d2fb5]"
          >
            <ChevronLeftIcon />
            All sets
          </Link>
        </div>

        <div className="pt-5">
          <h1 className="font-heading text-[23px] font-medium tracking-[-0.35px] text-[#172b35]">
            {set.name}
          </h1>

          <p className="font-body pt-1 text-[9px] text-[#5d6f74]">
            {words.length} words · {masteredIds.size} mastered
          </p>
          <div className="mt-2 text-center" aria-label={`${masteredIds.size} of ${words.length} words mastered`}>
            <p className="font-heading text-2xl font-semibold leading-none text-[#172b35]">{masteredIds.size}/{words.length}</p>
            <p className="mt-1 text-[10px] text-[#5d6f74]">words mastered</p>
          </div>
          <div className="mt-2 text-center">
            <span className="inline-flex min-h-7 items-center rounded-full border border-[#dce4bd] bg-[#f8fbdc] px-3 text-[10px] font-medium text-[#5d6f74]">
              {lastBatchResult
                ? `Last batch ${lastBatchResult.batch}: ${lastBatchResult.mastered}/${lastBatchResult.total} mastered`
                : "Last batch: none completed yet"}
            </span>
            <button
              type="button"
              onClick={resetSet}
              className="mt-2 block w-full text-xs text-[#5d6f74] underline decoration-[#9bb8bc] underline-offset-2 hover:text-[#263fd6]"
            >
              Reset progress
            </button>
          </div>
        </div>

          {words.length > 0 && masteredIds.size >= words.length ? (
            <div className="mt-5 flex flex-col items-center gap-4 rounded-lg border border-[#dce4bd] bg-[#f8fbdc] px-5 py-8 text-center">
              <div className="flex flex-col gap-2">
                <h2 className="font-heading text-2xl font-semibold text-[#172b35]">
                  Well done!
                </h2>
                <p className="text-sm text-[#5d6f74]">
                  You have mastered all the words.
                </p>
              </div>
              <button
                type="button"
                onClick={resetSet}
                className="flex h-10 items-center justify-center rounded-full bg-[#d8f56d] px-5 text-sm font-semibold text-[#172b35] hover:opacity-90"
              >
                Reset progress
              </button>
            </div>
          ) : (
          <div className="pt-5">
          <div className="flex h-9 w-full items-center rounded-full border border-[#d5d7d7] bg-white p-0">
            {visibleModes.map(({ key, label, Icon }) => {
              const active = mode === key;

              return (
                <button
                  key={key}
                  onClick={() => setMode(key)}
                    className={`flex h-full flex-1 items-center justify-center gap-1.5 rounded-full text-[13px] font-medium transition-colors ${
                    active
                      ? "bg-[#d8f56d] text-[#172b35]"
                      : "text-[#172b35] hover:bg-white"
                  }`}
                >
                  <Icon className="hidden h-4 w-4 sm:block" />
                  {label}
                </button>
              );
            })}
          </div>

          <div className="pb-5 pt-2">
            {mode === "cards" && (
              <CardsMode
                key={`cards-${practiceBatch}-${exerciseRevision}`}
                words={practiceWords}
                onCorrect={handleKnewIt}
                onBatchComplete={() => completeModeBatch("cards")}
                frontLabel={id === THEMA1_SENTENCES_SET_ID ? "B1 sentence" : undefined}
                backLabel={id === THEMA1_SENTENCES_SET_ID ? "B2 sentence" : undefined}
              />
            )}

            {mode === "quiz" && (
              <div>
                <MultipleChoiceMode
                  key={`quiz-${practiceBatch}-${exerciseRevision}`}
                  words={practiceWords}
                  onCorrect={(wordId) => markCorrect("quiz", wordId)}
                  onBatchComplete={() => completeModeBatch("quiz")}
                />
              </div>
            )}

            {mode === "match" && (
              <div>
                <MatchingMode
                  key={`match-${practiceBatch}-${exerciseRevision}`}
                  words={practiceWords}
                  onCorrect={(wordId) => markCorrect("match", wordId)}
                  onExerciseComplete={() => completeModeBatch("match", true)}
                  onBatchContinue={continueToNextBatch}
                />
              </div>
            )}

            {mode === "gaps" && id === THEMA1_SENTENCES_SET_ID && (
              <GapsMode
                key={`gaps-${practiceBatch}-${exerciseRevision}`}
                questions={practiceWords.map((word) => ({
                  sentence: "",
                  translation: word.german,
                  answer: word.english,
                  wordId: word.id,
                }))}
                words={practiceWords}
                onCorrect={(wordId) => markCorrect("gaps", wordId)}
                onBatchComplete={() => completeModeBatch("gaps")}
                rewriteMode
              />
            )}

          </div>
        </div>
        )}

        <section className="pt-5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-heading text-xl font-semibold text-[#172b35]">
              Vocabulary notes
            </h2>
            <button
              type="button"
              onClick={() => setIsAddingWord(true)}
              className="rounded-full bg-[#d8f56d] px-4 py-2 text-sm font-semibold text-[#172b35]"
            >
              Add word
            </button>
          </div>

          {isAddingWord && (
            <div className="mt-4 grid gap-3 border border-[#dce4bd] bg-[#f8fbdc] p-4 sm:grid-cols-2">
              <input
                value={newGerman}
                onChange={(event) => setNewGerman(event.target.value)}
                placeholder="German word"
                className="rounded-lg border border-[#9bb8bc] bg-white px-3 py-2 text-sm text-[#172b35]"
              />
              <input
                value={newEnglish}
                onChange={(event) => setNewEnglish(event.target.value)}
                placeholder="English translation"
                className="rounded-lg border border-[#9bb8bc] bg-white px-3 py-2 text-sm text-[#172b35]"
              />
              <select
                value={newPos}
                onChange={(event) => setNewPos(event.target.value)}
                className="rounded-lg border border-[#9bb8bc] bg-white px-3 py-2 text-sm text-[#172b35]"
              >
                <option value="noun">Noun</option>
                <option value="verb">Verb</option>
                <option value="adjective">Adjective</option>
                <option value="adverb">Adverb</option>
                <option value="other">Other</option>
              </select>
              <input
                value={newExample}
                onChange={(event) => setNewExample(event.target.value)}
                placeholder="German example (optional)"
                className="rounded-lg border border-[#9bb8bc] bg-white px-3 py-2 text-sm text-[#172b35]"
              />
              <div className="flex gap-2 sm:col-span-2">
                <button
                  type="button"
                  onClick={saveNewWord}
                  className="rounded-full bg-[#d8f56d] px-4 py-2 text-sm font-semibold text-[#172b35]"
                >
                  Save word
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddingWord(false)}
                  className="rounded-full bg-[#eef1ff] px-4 py-2 text-sm text-[#263fd6]"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="relative mt-4">
            <input
              type="text"
              role="searchbox"
              value={wordSearch}
              onChange={(event) => setWordSearch(event.target.value)}
              placeholder="Search words, translations, or types"
              className="h-11 w-full rounded-xl border border-[#b8c8c9] bg-white px-4 pr-11 text-sm text-[#172b35] outline-none placeholder:text-[#5d6f74] focus:border-[#263fd6]"
              aria-label="Search all words"
            />
            {wordSearch && (
              <button
                type="button"
                onClick={() => setWordSearch("")}
                className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#5d6f74] hover:bg-[#eef1ff] hover:text-[#263fd6]"
                aria-label="Clear search"
                title="Clear search"
              >
                <XIcon className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="mt-4 overflow-x-auto rounded-xl border border-[#dce4bd] bg-white">
            {(isSentenceSet || words.some((word) => word.b1)) && (
              <div className={`grid min-w-130 ${isSentenceSet ? "grid-cols-2" : "grid-cols-3"} gap-3 border-b border-[#d5ddd7] bg-[#f8fbdc] px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-[#5d6f74]`}>
                <span>B1</span>
                <span>B2</span>
                {!isSentenceSet && <span>English</span>}
              </div>
            )}
            {visibleWords.map((word, i) => (
              <div
                key={word.id}
                className={`${isSentenceSet ? "grid min-w-130 grid-cols-2 items-center gap-3" : word.b1 ? "grid min-w-130 grid-cols-3 items-center gap-3" : "flex items-center justify-between gap-4"} px-3 py-2.5 ${
                  i !== visibleWords.length - 1
                    ? "border-b border-[#d5ddd7]"
                    : ""
                }`}
              >
                {editingWordId === word.id ? (
                  <div className={`${isSentenceSet ? "col-span-2 " : word.b1 ? "col-span-3 " : ""}flex w-full flex-col gap-3`}>
                    <input
                      value={draftGerman}
                      onChange={(event) => setDraftGerman(event.target.value)}
                      className="h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#263fd6]"
                      aria-label="German word"
                    />

                    <input
                      value={draftEnglish}
                      onChange={(event) => setDraftEnglish(event.target.value)}
                      className="h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#263fd6]"
                      aria-label="English translation"
                    />

                    <input
                      value={draftExample}
                      onChange={(event) => setDraftExample(event.target.value)}
                      className="h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#263fd6]"
                      aria-label="German example"
                      placeholder="German example (optional)"
                    />

                    {draftPos === "noun" && (
                      <select
                        value={draftArticle}
                        onChange={(event) =>
                          setDraftArticle(event.target.value)
                        }
                        className="h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#263fd6]"
                        aria-label="Article"
                      >
                        <option value="der">der</option>
                        <option value="die">die</option>
                        <option value="das">das</option>
                      </select>
                    )}

                    <select
                      value={draftPos}
                      onChange={(event) => setDraftPos(event.target.value)}
                      className="h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#263fd6]"
                      aria-label="Part of speech"
                    >
                      <option value="noun">Noun</option>
                      <option value="verb">Verb</option>
                      <option value="adjective">Adjective</option>
                      <option value="adverb">Adverb</option>
                      <option value="other">Other</option>
                    </select>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => saveEditing(word.id)}
                        className="rounded-full bg-[#d8f56d] px-4 py-1.5 text-xs font-semibold text-[#172b35]"
                      >
                        Save
                      </button>

                      <button
                        type="button"
                        onClick={cancelEditing}
                        className="rounded-full bg-[#eef1ff] px-4 py-1.5 text-xs text-[#172b35]"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {isSentenceSet ? (
                      <button
                        type="button"
                        onClick={() => startEditing(word)}
                        className="text-left text-sm text-[#5d6f74]"
                      >
                        {word.german}
                      </button>
                    ) : word.b1 ? (
                      <p className="text-sm text-[#5d6f74]">{word.b1}</p>
                    ) : null}
                    {isSentenceSet ? (
                      <div className="flex min-w-0 items-start justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => startEditing(word)}
                          className="font-body min-w-0 text-left text-sm text-black"
                        >
                          {word.english}
                        </button>
                        <button
                          onClick={() => handleDeleteWord(word.id)}
                          className="shrink-0 rounded-full p-1.5 text-[#5d6f74] hover:bg-[#eef1ff] hover:text-[#263fd6]"
                          aria-label={`Delete ${word.german}`}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                    <div className="flex items-start gap-2">
                      {masteredIds.has(word.id) && (
                        <span
                          className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#263fd6]"
                          aria-label="Mastered"
                        />
                      )}
                      <div>
                        <button
                          type="button"
                          onClick={() => startEditing(word)}
                          className="text-left font-heading text-base tracking-[-0.32px] text-[#172b35]"
                        >
                          {displayGerman(word)}
                        </button>

                        {word.example && (
                          <p className="font-body pt-1 text-xs italic text-[#5d6f74]">
                            {word.example}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex min-w-0 items-center justify-between gap-3">
                      <div className="text-right">
                        <button
                          type="button"
                          onClick={() => startEditing(word)}
                          className="font-body text-right text-sm text-black"
                        >
                          {word.english}
                        </button>

                        {!word.b1 && (
                          <p className="font-body pt-0.5 text-[11px] uppercase tracking-[0.55px] text-[#5d6f74]">
                            {word.pos}
                          </p>
                        )}
                      </div>

                      <button
                        onClick={() => handleDeleteWord(word.id)}
                        className="rounded-full p-1.5 text-[#5d6f74] hover:bg-[#eef1ff] hover:text-[#263fd6]"
                        aria-label={`Delete ${word.german}`}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                    </>
                    )}
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
