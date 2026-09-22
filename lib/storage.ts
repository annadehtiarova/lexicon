import { StudySet } from "./types";

const STORAGE_KEY = "lexikon.sets";

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
