import { StudySet } from "./types";
import { TEAMARBEIT_GAP_WORD_IDS } from "./teamarbeitGapTest";
import { PROTOKOLL_GAP_WORD_IDS } from "./protokollGapTest";
import { TEAMGESPRÄCH_GAP_WORD_IDS } from "./teamgespraechGapTest";
import { TEAMROLLE_GAP_WORD_IDS } from "./teamrolleGapTest";

const STORAGE_KEY = "lexikon.sets";
const BUILT_IN_PROGRESS_KEY = "lexikon.builtInProgress";
const BUILT_IN_DELETED_WORDS_KEY = "lexikon.builtInDeletedWords";
const BUILT_IN_ADDED_WORDS_KEY = "lexikon.builtInAddedWords";
const BUILT_IN_WORD_OVERRIDES_KEY = "lexikon.builtInWordOverrides";
const LAST_BATCH_RESULT_KEY = "lexikon.lastBatchResults";
export type ExerciseKey = "cards" | "quiz" | "write" | "match" | "gaps";
export type ExerciseProgress = Record<ExerciseKey, string[]>;

export interface LastBatchResult {
  batch: number;
  mastered: number;
  total: number;
}

export function loadLastBatchResult(setId: string): LastBatchResult | null {
  if (typeof window === "undefined") return null;
  try {
    const results = JSON.parse(window.localStorage.getItem(LAST_BATCH_RESULT_KEY) ?? "{}") as Record<string, LastBatchResult>;
    const result = results[setId];
    return result && typeof result.batch === "number" && typeof result.mastered === "number" && typeof result.total === "number" ? result : null;
  } catch {
    return null;
  }
}

export function saveLastBatchResult(setId: string, result: LastBatchResult) {
  if (typeof window === "undefined") return;
  try {
    const results = JSON.parse(window.localStorage.getItem(LAST_BATCH_RESULT_KEY) ?? "{}") as Record<string, LastBatchResult>;
    results[setId] = result;
    window.localStorage.setItem(LAST_BATCH_RESULT_KEY, JSON.stringify(results));
  } catch {
    // Ignore unavailable browser storage.
  }
}

export function clearLastBatchResult(setId: string) {
  if (typeof window === "undefined") return;
  try {
    const results = JSON.parse(window.localStorage.getItem(LAST_BATCH_RESULT_KEY) ?? "{}") as Record<string, LastBatchResult>;
    delete results[setId];
    window.localStorage.setItem(LAST_BATCH_RESULT_KEY, JSON.stringify(results));
  } catch {
    // Ignore unavailable browser storage.
  }
}

const EMPTY_PROGRESS: ExerciseProgress = { cards: [], quiz: [], write: [], match: [], gaps: [] };

export function loadExerciseProgress(setId: string): ExerciseProgress {
  if (typeof window === "undefined") return { ...EMPTY_PROGRESS };
  try {
    const progress = JSON.parse(window.localStorage.getItem(BUILT_IN_PROGRESS_KEY) ?? "{}") as Record<string, Partial<ExerciseProgress>>;
    const saved = progress[setId] ?? {};
    return {
      cards: Array.isArray(saved.cards) ? saved.cards : [],
      quiz: Array.isArray(saved.quiz) ? saved.quiz : [],
      write: Array.isArray(saved.write) ? saved.write : [],
      match: Array.isArray(saved.match) ? saved.match : [],
      gaps: Array.isArray(saved.gaps) ? saved.gaps : [],
    };
  } catch {
    return { ...EMPTY_PROGRESS };
  }
}

export function isWordMastered(wordId: string, progress: ExerciseProgress) {
  const requiredExercises: ExerciseKey[] = ["cards", "quiz", "write", "match"];
  if (
    TEAMARBEIT_GAP_WORD_IDS.has(wordId) ||
    PROTOKOLL_GAP_WORD_IDS.has(wordId) ||
    TEAMGESPRÄCH_GAP_WORD_IDS.has(wordId) ||
    TEAMROLLE_GAP_WORD_IDS.has(wordId)
  ) {
    requiredExercises.push("gaps");
  }
  return requiredExercises.every((exercise) => progress[exercise].includes(wordId));
}

export function loadMasteredWordIds(setId: string, words: StudySet["words"]) {
  const progress = loadExerciseProgress(setId);
  return words.filter((word) => isWordMastered(word.id, progress)).map((word) => word.id);
}

export function saveExerciseProgress(setId: string, progress: ExerciseProgress) {
  if (typeof window === "undefined") return;
  try {
    const allProgress = JSON.parse(window.localStorage.getItem(BUILT_IN_PROGRESS_KEY) ?? "{}") as Record<string, ExerciseProgress>;
    allProgress[setId] = progress;
    window.localStorage.setItem(BUILT_IN_PROGRESS_KEY, JSON.stringify(allProgress));
  } catch {
    // Ignore unavailable browser storage.
  }
}

export function loadBuiltInDeletedWords(setId: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const deleted = JSON.parse(window.localStorage.getItem(BUILT_IN_DELETED_WORDS_KEY) ?? "{}") as Record<string, string[]>;
    return Array.isArray(deleted[setId]) ? deleted[setId] : [];
  } catch {
    return [];
  }
}

export function deleteBuiltInWord(setId: string, wordId: string) {
  if (typeof window === "undefined") return;
  try {
    const deleted = JSON.parse(window.localStorage.getItem(BUILT_IN_DELETED_WORDS_KEY) ?? "{}") as Record<string, string[]>;
    deleted[setId] = [...new Set([...(deleted[setId] ?? []), wordId])];
    window.localStorage.setItem(BUILT_IN_DELETED_WORDS_KEY, JSON.stringify(deleted));
    removeWordProgress(setId, wordId);
  } catch {
    // Ignore unavailable browser storage.
  }
}

export function loadBuiltInAddedWords(setId: string): StudySet["words"] {
  if (typeof window === "undefined") return [];
  try {
    const added = JSON.parse(window.localStorage.getItem(BUILT_IN_ADDED_WORDS_KEY) ?? "{}") as Record<string, StudySet["words"]>;
    return Array.isArray(added[setId]) ? added[setId] : [];
  } catch {
    return [];
  }
}

export function loadBuiltInWords(setId: string, baseWords: StudySet["words"]) {
  const deletedIds = new Set(loadBuiltInDeletedWords(setId));
  let overrides: Record<string, Partial<StudySet["words"][number]>> = {};
  try {
    const allOverrides = JSON.parse(window.localStorage.getItem(BUILT_IN_WORD_OVERRIDES_KEY) ?? "{}") as Record<string, Record<string, Partial<StudySet["words"][number]>>>;
    overrides = allOverrides[setId] ?? {};
  } catch {
    // Ignore unavailable browser storage.
  }
  const applyOverrides = (word: StudySet["words"][number]) => ({
    ...word,
    ...overrides[word.id],
  });
  const base = baseWords
    .filter((word) => !deletedIds.has(word.id))
    .map(applyOverrides);
  const baseIds = new Set(base.map((word) => word.id));
  const added = loadBuiltInAddedWords(setId).filter(
    (word) => !deletedIds.has(word.id) && !baseIds.has(word.id),
  ).map(applyOverrides);
  return [...base, ...added];
}

export function updateBuiltInWord(
  setId: string,
  wordId: string,
  changes: Partial<StudySet["words"][number]>,
) {
  if (typeof window === "undefined") return;
  try {
    const allOverrides = JSON.parse(window.localStorage.getItem(BUILT_IN_WORD_OVERRIDES_KEY) ?? "{}") as Record<string, Record<string, Partial<StudySet["words"][number]>>>;
    const setOverrides = allOverrides[setId] ?? {};
    setOverrides[wordId] = { ...setOverrides[wordId], ...changes };
    allOverrides[setId] = setOverrides;
    window.localStorage.setItem(BUILT_IN_WORD_OVERRIDES_KEY, JSON.stringify(allOverrides));
  } catch {
    // Ignore unavailable browser storage.
  }
}

export function addBuiltInWord(setId: string, word: StudySet["words"][number]) {
  if (typeof window === "undefined") return;
  try {
    const added = JSON.parse(window.localStorage.getItem(BUILT_IN_ADDED_WORDS_KEY) ?? "{}") as Record<string, StudySet["words"]>;
    added[setId] = [...(added[setId] ?? []), word];
    window.localStorage.setItem(BUILT_IN_ADDED_WORDS_KEY, JSON.stringify(added));
  } catch {
    // Ignore unavailable browser storage.
  }
}

function removeWordProgress(setId: string, wordId: string) {
  const progress = loadExerciseProgress(setId);
  const nextProgress = Object.fromEntries(
    (Object.keys(progress) as ExerciseKey[]).map((exercise) => [
      exercise,
      progress[exercise].filter((id) => id !== wordId),
    ]),
  ) as ExerciseProgress;
  saveExerciseProgress(setId, nextProgress);
}

export function loadBuiltInProgress(setId: string): string[] {
  const progress = loadExerciseProgress(setId);
  return progress.cards.filter((id) =>
    isWordMastered(id, progress),
  );
}

export function saveBuiltInProgress(setId: string, masteredWordIds: string[]) {
  if (typeof window === "undefined") return;
  try {
    const progress = JSON.parse(window.localStorage.getItem(BUILT_IN_PROGRESS_KEY) ?? "{}") as Record<string, string[]>;
    progress[setId] = masteredWordIds;
    window.localStorage.setItem(BUILT_IN_PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // Ignore unavailable browser storage.
  }
}

export function loadSets(): StudySet[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as StudySet[];
    if (!Array.isArray(parsed)) return [];
    return parsed.map((s) => ({
      ...s,
      masteredWordIds: s.masteredWordIds ?? [],
    }));
  } catch {
    return [];
  }
}

export function saveSets(sets: StudySet[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sets));
}

export function addSet(set: StudySet): StudySet[] {
  const sets = [set, ...loadSets()];
  saveSets(sets);
  return sets;
}

export function addWord(setId: string, word: StudySet["words"][number]): StudySet[] {
  const sets = loadSets().map((set) =>
    set.id === setId ? { ...set, words: [...set.words, word] } : set,
  );
  saveSets(sets);
  return sets;
}

export function deleteSet(id: string): StudySet[] {
  const sets = loadSets().filter((s) => s.id !== id);
  saveSets(sets);
  return sets;
}

export function getSet(id: string): StudySet | undefined {
  return loadSets().find((s) => s.id === id);
}

export function setMasteredWordIds(
  id: string,
  masteredWordIds: string[],
): StudySet[] {
  const sets = loadSets().map((s) =>
    s.id === id ? { ...s, masteredWordIds } : s,
  );
  saveSets(sets);
  return sets;
}

export function deleteWord(setId: string, wordId: string): StudySet[] {
  const sets = loadSets().map((set) =>
    set.id === setId
      ? {
          ...set,
          words: set.words.filter((word) => word.id !== wordId),
          masteredWordIds: set.masteredWordIds.filter((id) => id !== wordId),
        }
      : set,
  );
  saveSets(sets);
  removeWordProgress(setId, wordId);
  return sets;
}

export function updateWord(
  setId: string,
  wordId: string,
  changes: Partial<StudySet["words"][number]>,
): StudySet[] {
  const sets = loadSets().map((set) =>
    set.id === setId
      ? {
          ...set,
          words: set.words.map((word) =>
            word.id === wordId ? { ...word, ...changes } : word,
          ),
        }
      : set,
  );
  saveSets(sets);
  return sets;
}

export function updateSetName(setId: string, name: string): StudySet[] {
  const sets = loadSets().map((set) =>
    set.id === setId ? { ...set, name } : set,
  );
  saveSets(sets);
  return sets;
}
