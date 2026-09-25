import { StudySet } from "./types";

const STORAGE_KEY = "lexikon.sets";
const BUILT_IN_PROGRESS_KEY = "lexikon.builtInProgress";
const BUILT_IN_DELETED_WORDS_KEY = "lexikon.builtInDeletedWords";
export type ExerciseKey = "cards" | "quiz" | "write" | "match";
export type ExerciseProgress = Record<ExerciseKey, string[]>;

const EMPTY_PROGRESS: ExerciseProgress = { cards: [], quiz: [], write: [], match: [] };

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
    };
  } catch {
    return { ...EMPTY_PROGRESS };
  }
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
  } catch {
    // Ignore unavailable browser storage.
  }
}

export function loadBuiltInProgress(setId: string): string[] {
  const progress = loadExerciseProgress(setId);
  return progress.cards.filter((id) => progress.quiz.includes(id) && progress.write.includes(id) && progress.match.includes(id));
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
