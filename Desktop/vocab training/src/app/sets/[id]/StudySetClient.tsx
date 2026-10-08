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
  loadLastBatchResult,
  loadExerciseProgress,
  saveLastBatchResult,
  saveExerciseProgress,
  setMasteredWordIds,
  updateWord,
} from "@/lib/storage";
import { VocabWord } from "@/lib/types";
import { displayGerman } from "@/lib/wordDisplay";
import {
  ARBEITSRAEUME_SET_ID,
  getArbeitsraeumeSet,
} from "@/lib/arbeitsraeumeData";
import { UMZUG_SET_ID, getUmzugSet } from "@/lib/umzugData";
import { ADILS_JOB_SET_ID, getAdilsJobSet } from "@/lib/adilsJobData";
import { PROBLEM_SET_ID, getProblemSet } from "@/lib/problemData";
import {
  EMAIL_HAUSVERWALTUNG_SET_ID,
  getEmailHausverwaltungSet,
} from "@/lib/emailHausverwaltungData";
import { AUSDRUECKE_SET_ID, getAusdrueckeSet } from "@/lib/ausdrueckeData";
import { SPAETI_SET_ID, getSpaetiSet } from "@/lib/spaetiData";
import {
  GESPRAECH_MEHMET_SET_ID,
  getGespraechMehmetSet,
} from "@/lib/gespraechMitMehmetData";
import { BEITRAEGE_SET_ID, getBeitraegeSet } from "@/lib/beitraegeData";
import { DIENSTPLAN_SET_ID, getDienstplanSet } from "@/lib/dienstplanData";
import { TEAMARBEIT_SET_ID, getTeamarbeitSet } from "@/lib/teamarbeitData";
import { PROTOKOLL_SET_ID, getProtokollSet } from "@/lib/protokollData";
import { TEAMGESPRÄCH_SET_ID, getTeamgesprächSet } from "@/lib/teamgespraechData";
import { TEAMROLLE_SET_ID, getTeamrolleSet } from "@/lib/teamrolleData";
import CardsMode from "@/components/modes/CardsMode";
import MultipleChoiceMode from "@/components/modes/MultipleChoiceMode";
import TypingMode from "@/components/modes/TypingMode";
import MatchingMode from "@/components/modes/MatchingMode";
import GapsMode from "@/components/modes/GapsMode";
import { TEAMARBEIT_GAP_TEST, TEAMARBEIT_GAP_WORD_IDS } from "@/lib/teamarbeitGapTest";
import { PROTOKOLL_GAP_TEST, PROTOKOLL_GAP_WORD_IDS } from "@/lib/protokollGapTest";
import {
  ChevronLeftIcon,
  SparklesIcon,
  ListChecksIcon,
  KeyboardIcon,
  GridIcon,
  TrashIcon,
  XIcon,
} from "@/components/icons";

const MODES = [
  { key: "cards", label: "Cards", Icon: SparklesIcon },
  { key: "quiz", label: "Quiz", Icon: ListChecksIcon },
  { key: "write", label: "Write", Icon: KeyboardIcon },
  { key: "match", label: "Match", Icon: GridIcon },
  { key: "gaps", label: "Gaps", Icon: KeyboardIcon },
] as const;

type ModeKey = (typeof MODES)[number]["key"];
const BATCH_SIZE = 15;

function isWordMastered(wordId: string, progress: ExerciseProgress) {
  const requiredExercises: ExerciseKey[] = ["cards", "quiz", "write", "match"];
  if (TEAMARBEIT_GAP_WORD_IDS.has(wordId) || PROTOKOLL_GAP_WORD_IDS.has(wordId)) {
    requiredExercises.push("gaps");
  }
  return requiredExercises.every((exercise) => progress[exercise].includes(wordId));
}

interface ResolvedSet {
  name: string;
  words: VocabWord[];
  masteredWordIds: string[];
  isPersisted: boolean;
}

function resolveSet(id: string): ResolvedSet | null {
  if (id === ARBEITSRAEUME_SET_ID) {
    const builtInSet = getArbeitsraeumeSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === UMZUG_SET_ID) {
    const builtInSet = getUmzugSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === ADILS_JOB_SET_ID) {
    const builtInSet = getAdilsJobSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === PROBLEM_SET_ID) {
    const builtInSet = getProblemSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === EMAIL_HAUSVERWALTUNG_SET_ID) {
    const builtInSet = getEmailHausverwaltungSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === AUSDRUECKE_SET_ID) {
    const builtInSet = getAusdrueckeSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === SPAETI_SET_ID) {
    const builtInSet = getSpaetiSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === GESPRAECH_MEHMET_SET_ID) {
    const builtInSet = getGespraechMehmetSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === BEITRAEGE_SET_ID) {
    const builtInSet = getBeitraegeSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === DIENSTPLAN_SET_ID) {
    const builtInSet = getDienstplanSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === TEAMARBEIT_SET_ID) {
    const builtInSet = getTeamarbeitSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === PROTOKOLL_SET_ID) {
    const builtInSet = getProtokollSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === TEAMGESPRÄCH_SET_ID) {
    const builtInSet = getTeamgesprächSet();
    return {
      name: builtInSet.name,
      words: builtInSet.words,
      masteredWordIds: [],
      isPersisted: false,
    };
  }

  if (id === TEAMROLLE_SET_ID) {
    const builtInSet = getTeamrolleSet();
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
  const hasGapExercise = id === TEAMARBEIT_SET_ID || id === PROTOKOLL_SET_ID;
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
    write: [],
    match: [],
    gaps: [],
  });
  const pendingProgressRef = useRef<ExerciseProgress>({
    cards: [],
    quiz: [],
    write: [],
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
    pendingProgressRef.current = progress;
    setExerciseProgress(progress);
    const savedBatchResult = loadLastBatchResult(id);
    setLastBatchResult(savedBatchResult);
    setPracticeBatch(savedBatchResult?.batch ?? 0);
    const remainingWords = resolvedWords;
    const mastered = remainingWords
      .filter((word) => isWordMastered(word.id, progress))
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
    () =>
      (set?.words ?? []).map((word) => ({
        ...word,
        german: displayGerman(word),
        english:
          word.pos === "verb" && !word.english.toLowerCase().startsWith("to ")
            ? `to ${word.english.toLowerCase()}`
            : word.english.toLowerCase(),
      })),
    [set],
  );
  const queuedWords = words.filter(
    (word) => practiceWordIds?.includes(word.id) ?? false,
  );
  const practiceWords = queuedWords.slice(0, BATCH_SIZE);
  const visibleWords = words.filter((word) => {
    const query = wordSearch.trim().toLowerCase();
    if (!query) return true;
    return [word.german, word.english, word.pos, word.example]
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
      .filter((word) => isWordMastered(word.id, next));
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

    const sequence: ModeKey[] = hasGapExercise
      ? ["cards", "quiz", "write", "match", "gaps"]
      : ["cards", "quiz", "write", "match"];
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
      write: [],
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
  const visibleModes = MODES.filter(
    ({ key }) => key !== "gaps" || hasGapExercise,
  );

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

          {practiceWords.length === 0 ? (
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

            {mode === "write" && (
              <div>
                <TypingMode
                  key={`write-${practiceBatch}-${exerciseRevision}`}
                  words={practiceWords}
                  onCorrect={(wordId) => markCorrect("write", wordId)}
                  onBatchComplete={() => completeModeBatch("write")}
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

            {mode === "gaps" && hasGapExercise && (
              <GapsMode
                key={`gaps-${practiceBatch}-${exerciseRevision}`}
                questions={id === TEAMARBEIT_SET_ID ? TEAMARBEIT_GAP_TEST : PROTOKOLL_GAP_TEST}
                words={practiceWords}
                onCorrect={(wordId) => markCorrect("gaps", wordId)}
                onBatchComplete={() => completeModeBatch("gaps")}
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

          <div className="mt-4 overflow-hidden rounded-xl border border-[#dce4bd] bg-white">
            {visibleWords.map((word, i) => (
              <div
                key={word.id}
                className={`flex items-center justify-between gap-4 px-3 py-2.5 ${
                  i !== visibleWords.length - 1
                    ? "border-b border-[#d5ddd7]"
                    : ""
                }`}
              >
                {editingWordId === word.id ? (
                  <div className="flex w-full flex-col gap-3">
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

                        <p className="font-body pt-1 text-xs italic text-[#5d6f74]">
                          {word.example}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <div className="text-right">
                        <button
                          type="button"
                          onClick={() => startEditing(word)}
                          className="font-body text-right text-sm text-black"
                        >
                          {word.english}
                        </button>

                        <p className="font-body pt-0.5 text-[11px] uppercase tracking-[0.55px] text-[#5d6f74]">
                          {word.pos}
                        </p>
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
