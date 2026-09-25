"use client";

import { use, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  addWord,
  deleteWord,
  deleteBuiltInWord,
  getSet,
  loadBuiltInDeletedWords,
  ExerciseKey,
  ExerciseProgress,
  loadExerciseProgress,
  saveExerciseProgress,
  setMasteredWordIds,
  updateWord,
} from "@/lib/storage";
import { VocabWord } from "@/lib/types";
import { WORD_BANK } from "@/lib/wordBank";
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
import CardsMode from "@/components/modes/CardsMode";
import MultipleChoiceMode from "@/components/modes/MultipleChoiceMode";
import TypingMode from "@/components/modes/TypingMode";
import MatchingMode from "@/components/modes/MatchingMode";
import {
  ChevronLeftIcon,
  SparklesIcon,
  ListChecksIcon,
  KeyboardIcon,
  GridIcon,
  TrashIcon,
} from "@/components/icons";

const MODES = [
  { key: "cards", label: "Cards", Icon: SparklesIcon },
  { key: "quiz", label: "Quiz", Icon: ListChecksIcon },
  { key: "write", label: "Write", Icon: KeyboardIcon },
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

const IRREGULAR_NOUN_ARTICLES = new Map(
  Object.entries({
    apfel: "der",
    baum: "der",
    berg: "der",
    brief: "der",
    computer: "der",
    film: "der",
    freund: "der",
    garten: "der",
    gedanke: "der",
    hafen: "der",
    kaffee: "der",
    kuchen: "der",
    monat: "der",
    name: "der",
    schlüssel: "der",
    schnee: "der",
    sommer: "der",
    staat: "der",
    stuhl: "der",
    tisch: "der",
    vater: "der",
    winter: "der",
    zeitpunkt: "der",
    zug: "der",
    arbeit: "die",
    blume: "die",
    farbe: "die",
    frage: "die",
    freundschaft: "die",
    geschichte: "die",
    hand: "die",
    idee: "die",
    karte: "die",
    katze: "die",
    kirche: "die",
    küche: "die",
    luft: "die",
    miete: "die",
    musik: "die",
    nacht: "die",
    reise: "die",
    schule: "die",
    sprache: "die",
    stadt: "die",
    straße: "die",
    sonne: "die",
    tür: "die",
    wohnung: "die",
    zeit: "die",
    auto: "das",
    auge: "das",
    bild: "das",
    buch: "das",
    essen: "das",
    fenster: "das",
    haus: "das",
    jahr: "das",
    kind: "das",
    land: "das",
    leben: "das",
    licht: "das",
    mädchen: "das",
    meer: "das",
    problem: "das",
    spiel: "das",
    wasser: "das",
    wetter: "das",
    wort: "das",
    zimmer: "das",
  }),
);

function displayGerman(word: VocabWord): string {
  if (word.pos !== "noun") return word.german.toLowerCase();

  const existingArticle = word.german.match(/^(der|die|das)\s+(.+)$/i);

  if (existingArticle) {
    return `${existingArticle[1].toLowerCase()} ${existingArticle[2].charAt(0).toUpperCase()}${existingArticle[2].slice(1)}`;
  }

  const noun = word.german.toLowerCase();

  const article =
    KNOWN_NOUN_ARTICLES.get(noun) ??
    IRREGULAR_NOUN_ARTICLES.get(noun) ??
    inferNounArticle(noun);

  return `${article} ${word.german.charAt(0).toUpperCase()}${word.german.slice(1)}`;
}

function inferNounArticle(noun: string): string {
  if (/(schaft|tum|werk|zeug|haus|zimmer|buch|land|recht|wesen)$/.test(noun))
    return "das";
  if (/(chen|lein|ment|um|ma|zeug)$/.test(noun)) return "das";
  if (
    /(ung|heit|keit|schaft|tion|tät|ik|ei|ie|ur|enz|anz|age|ade|ette|elle|ose|sis|itis)$/.test(
      noun,
    )
  )
    return "die";
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
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [exerciseProgress, setExerciseProgress] = useState<ExerciseProgress>({
    cards: [],
    quiz: [],
    write: [],
    match: [],
  });
  const [editingWordId, setEditingWordId] = useState<string | null>(null);
  const [draftGerman, setDraftGerman] = useState("");
  const [draftEnglish, setDraftEnglish] = useState("");
  const [draftPos, setDraftPos] = useState("noun");
  const [draftArticle, setDraftArticle] = useState("der");
  const [isAddingWord, setIsAddingWord] = useState(false);
  const [newGerman, setNewGerman] = useState("");
  const [newEnglish, setNewEnglish] = useState("");
  const [newPos, setNewPos] = useState("noun");
  const [newExample, setNewExample] = useState("");
  const [wordSearch, setWordSearch] = useState("");

  useEffect(() => {
    const resolved = resolveSet(id);

    const deletedIds = loadBuiltInDeletedWords(id);
    setSet(
      resolved
        ? {
            ...resolved,
            words: resolved.words.filter(
              (word) => !deletedIds.includes(word.id),
            ),
          }
        : resolved,
    );
    const progress = loadExerciseProgress(id);
    setExerciseProgress(progress);
    setMasteredIds(new Set(resolved?.masteredWordIds ?? []));
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
  const batchCount = Math.max(1, Math.ceil(words.length / 30));
  const practiceWords = words.slice(
    practiceBatch * 30,
    practiceBatch * 30 + 30,
  );
  const visibleWords = words.filter((word) => {
    const query = wordSearch.trim().toLowerCase();
    if (!query) return true;
    return [word.german, word.english, word.pos, word.example]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });

  const markCorrect = (exercise: ExerciseKey, wordId: string) => {
    setExerciseProgress((current) => {
      if (current[exercise].includes(wordId)) return current;
      const next = { ...current, [exercise]: [...current[exercise], wordId] };
      saveExerciseProgress(id, next);
      const mastered = words
        .filter((word) =>
          (Object.keys(next) as ExerciseKey[]).every((key) =>
            next[key].includes(word.id),
          ),
        )
        .map((word) => word.id);
      setMasteredIds(new Set(mastered));
      return next;
    });
  };

  if (set === undefined) return null;

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
  };

  const startEditing = (word: VocabWord) => {
    if (!set.isPersisted) return;

    setEditingWordId(word.id);
    const articleMatch = word.german.match(/^(der|die|das)\s+(.+)$/i);
    setDraftGerman(articleMatch ? articleMatch[2] : word.german);
    setDraftEnglish(word.english);
    setDraftPos(word.pos);
    setDraftArticle(articleMatch?.[1].toLowerCase() ?? "der");
  };

  const cancelEditing = () => {
    setEditingWordId(null);
    setDraftGerman("");
    setDraftEnglish("");
    setDraftPos("noun");
    setDraftArticle("der");
  };

  const saveEditing = (wordId: string) => {
    const germanWord = draftGerman.trim().replace(/^(der|die|das)\s+/i, "");
    const german =
      draftPos === "noun" ? `${draftArticle} ${germanWord}` : germanWord;
    const english = draftEnglish.trim();

    if (!german || !english) return;

    updateWord(id, wordId, { german, english, pos: draftPos });

    setSet((current) =>
      current
        ? {
            ...current,
            words: current.words.map((word) =>
              word.id === wordId
                ? { ...word, german, english, pos: draftPos }
                : word,
            ),
          }
        : current,
    );

    cancelEditing();
  };

  const saveNewWord = () => {
    if (!set.isPersisted || !newGerman.trim() || !newEnglish.trim()) return;
    const word: VocabWord = {
      id: crypto.randomUUID(),
      german: newGerman.trim(),
      english: newEnglish.trim(),
      pos: newPos,
      example: newExample.trim(),
    };
    addWord(id, word);
    setSet((current) =>
      current ? { ...current, words: [...current.words, word] } : current,
    );
    setNewGerman("");
    setNewEnglish("");
    setNewExample("");
    setIsAddingWord(false);
  };

  return (
    <main className="flex flex-1 justify-center bg-white px-4 pb-16">
      <div className="w-full max-w-[478px] border-x border-[#dce4e2] bg-white px-5 pb-10">
        <div className="pt-5">
          <Link
            href="/"
            className="flex w-fit items-center gap-1.5 text-sm text-[#263fd6] hover:text-[#075a70]"
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
        </div>

        <div className="pt-5">
          <div className="flex h-7 w-full items-center rounded-full border border-[#d5d7d7] bg-white p-0.5">
            {MODES.map(({ key, label, Icon }) => {
              const active = mode === key;

              return (
                <button
                  key={key}
                  onClick={() => setMode(key)}
                    className={`flex h-full flex-1 items-center justify-center gap-1.5 rounded-full text-[10px] font-medium transition-colors ${
                    active
                      ? "bg-[#d8f56d] text-[#172b35]"
                      : "text-[#172b35] hover:bg-white"
                  }`}
                >
                  <Icon />
                  {label}
                </button>
              );
            })}
          </div>

          {words.length > 30 && (
            <div className="mt-2.5 flex h-6 items-center justify-between border-y border-[#536fe8] bg-[#eef1ff] px-3 text-[10px] text-[#172b35]">
              <button
                type="button"
                disabled={practiceBatch === 0}
                onClick={() => setPracticeBatch((current) => current - 1)}
                className="disabled:opacity-30"
              >
                Previous batch
              </button>
              <span>
                Batch {practiceBatch + 1} of {batchCount} ·{" "}
                {practiceWords.length} words
              </span>
              <button
                type="button"
                disabled={practiceBatch === batchCount - 1}
                onClick={() => setPracticeBatch((current) => current + 1)}
                className="disabled:opacity-30"
              >
                Next batch
              </button>
            </div>
          )}

          <div className="border-t-[3px] border-[#d5ddd7] pb-5 pt-2">
            {mode === "cards" && (
              <CardsMode
                key={`cards-${practiceBatch}`}
                words={practiceWords}
                masteredIds={masteredIds}
                onCorrect={handleKnewIt}
                onNextBatch={
                  practiceBatch < batchCount - 1
                    ? () => setPracticeBatch((current) => current + 1)
                    : undefined
                }
              />
            )}

            {mode === "quiz" && (
              <div className="pt-8">
                <MultipleChoiceMode
                  key={`quiz-${practiceBatch}`}
                  words={practiceWords}
                  onCorrect={(wordId) => markCorrect("quiz", wordId)}
                  previousCorrect={words.filter((word) => exerciseProgress.quiz.includes(word.id) && !practiceWords.some((currentWord) => currentWord.id === word.id)).length}
                  totalWords={words.length}
                  onNextBatch={
                    practiceBatch < batchCount - 1
                      ? () => setPracticeBatch((current) => current + 1)
                      : undefined
                  }
                />
              </div>
            )}

            {mode === "write" && (
              <div className="pt-8">
                <TypingMode
                  key={`write-${practiceBatch}`}
                  words={practiceWords}
                  onCorrect={(wordId) => markCorrect("write", wordId)}
                  previousCorrect={words.filter((word) => exerciseProgress.write.includes(word.id) && !practiceWords.some((currentWord) => currentWord.id === word.id)).length}
                  totalWords={words.length}
                  onNextBatch={
                    practiceBatch < batchCount - 1
                      ? () => setPracticeBatch((current) => current + 1)
                      : undefined
                  }
                />
              </div>
            )}

            {mode === "match" && (
              <div className="pt-8">
                <MatchingMode
                  key={`match-${practiceBatch}`}
                  words={practiceWords}
                  onCorrect={(wordId) => markCorrect("match", wordId)}
                  correctCount={exerciseProgress.match.filter((wordId) => words.some((word) => word.id === wordId)).length}
                  totalWords={words.length}
                  onNextBatch={
                    practiceBatch < batchCount - 1
                      ? () => setPracticeBatch((current) => current + 1)
                      : undefined
                  }
                />
              </div>
            )}
          </div>
        </div>

        <section className="pt-5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-heading text-xl font-semibold text-[#172b35]">
              Vocabulary notes
            </h2>
            {set.isPersisted && (
              <button
                type="button"
                onClick={() => setIsAddingWord(true)}
                className="rounded-full bg-[#d8f56d] px-4 py-2 text-sm font-semibold text-[#172b35]"
              >
                Add word
              </button>
            )}
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
                  className="rounded-full bg-[#08758d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#075a70]"
                >
                  Save word
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddingWord(false)}
                  className="rounded-full bg-[#dbeaec] px-4 py-2 text-sm text-[#172b35]"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <input
            type="search"
            value={wordSearch}
            onChange={(event) => setWordSearch(event.target.value)}
            placeholder="Search words, translations, or types"
            className="mt-4 h-11 w-full rounded-xl border border-[#b8c8c9] bg-white px-4 text-sm text-[#172b35] outline-none placeholder:text-[#5d6f74] focus:border-[#263fd6]"
            aria-label="Search all words"
          />

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
                      className="h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]"
                      aria-label="German word"
                    />

                    <input
                      value={draftEnglish}
                      onChange={(event) => setDraftEnglish(event.target.value)}
                      className="h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]"
                      aria-label="English translation"
                    />

                    {draftPos === "noun" && (
                      <select
                        value={draftArticle}
                        onChange={(event) =>
                          setDraftArticle(event.target.value)
                        }
                        className="h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]"
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
                      className="h-9 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]"
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
