"use client";

import { useEffect, useState } from "react";
import UploadCard from "@/components/UploadCard";
import SetsList from "@/components/SetsList";
import {
  addSet,
  deleteSet,
  loadMasteredWordIds,
  loadBuiltInWords,
  loadSets,
  saveSets,
} from "@/lib/storage";
import { extractVocabFromImages } from "@/lib/extractVocab";
import { StudySet } from "@/lib/types";
import { THEMA1_VERBS_SET_ID, getThema1VerbsSet } from "@/lib/thema1VerbsData";
import { THEMA1_NOUNS_SET_ID, getThema1NounsSet } from "@/lib/thema1NounsData";
import { THEMA1_ADJECTIVES_SET_ID, getThema1AdjectivesSet } from "@/lib/thema1AdjectivesData";
import { THEMA1_SENTENCES_SET_ID, getThema1SentencesSet } from "@/lib/thema1SentencesData";

const BUILT_IN_SET_IDS = new Set([
  THEMA1_VERBS_SET_ID,
  THEMA1_NOUNS_SET_ID,
  THEMA1_ADJECTIVES_SET_ID,
  THEMA1_SENTENCES_SET_ID,
]);

const BUILT_IN_SETS = [
  getThema1VerbsSet(),
  getThema1NounsSet(),
  getThema1AdjectivesSet(),
  getThema1SentencesSet(),
];

function withBuiltInProgress(set: StudySet): StudySet {
  const words = loadBuiltInWords(set.id, set.words);
  return {
    ...set,
    words,
    masteredWordIds: loadMasteredWordIds(
      set.id,
      words,
      set.id === THEMA1_SENTENCES_SET_ID ? ["cards"] : undefined,
    ),
  };
}

export default function Home() {
  const [sets, setSets] = useState<StudySet[]>([]);
  const [notice, setNotice] = useState<string | null>(null);
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    const builtInSets = BUILT_IN_SETS.map(withBuiltInProgress);
    const savedSets = loadSets();
    const customSets = savedSets
      .filter(
        (set) =>
          !BUILT_IN_SET_IDS.has(set.id) &&
          !/\bKapitel\s+\d+\b/i.test(set.name),
      )
      .map((set) => ({
        ...set,
        masteredWordIds: loadMasteredWordIds(set.id, set.words),
      }));
    if (customSets.length !== savedSets.length) {
      saveSets(customSets);
    }
    setSets([...builtInSets, ...customSets]);
  }, []);

  const handleCreateSet = async (files: File[], name: string) => {
    try {
      const { topic, words } = await extractVocabFromImages(files);
      const newSet: StudySet = {
        id: crypto.randomUUID(),
        name: name.trim() || topic || "New study set",
        createdAt: Date.now(),
        sourceImageCount: files.length,
        words: words.map((w) => ({ id: crypto.randomUUID(), ...w })),
        masteredWordIds: [],
      };
      setNotice(null);
      setSets([
        ...BUILT_IN_SETS.map(withBuiltInProgress),
        ...addSet(newSet).filter((set) => !BUILT_IN_SET_IDS.has(set.id)),
      ]);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Text extraction failed");
    }
  };

  const handleDelete = (id: string) => {
    if (BUILT_IN_SET_IDS.has(id)) return;
    setSets(deleteSet(id));
  };

  return (
    <main
      className="relative flex flex-1 flex-col items-center bg-white px-4 pb-16 pt-8"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-4xl font-semibold leading-tight tracking-[-1px] text-[#172b35]">
          Learn B2 Beruf Deutsch Vocabulary
        </h1>

        <p className="font-body max-w-[460px] text-[13px] leading-5 text-[#60747a]">
          Practice German with flashcards, quizzes, and interactive exercises.
          Build your vocabulary and reinforce what you learn through different
          ways to practise.
        </p>
      </div>

      <div className="mt-7 flex w-full flex-col items-center gap-4">
        {showUpload && (
          <div className="w-full max-w-[760px]">
            <UploadCard onCreateSet={handleCreateSet} />
            {notice && (
              <p className="mt-3 rounded-xl border border-[#b9c9eb] bg-[#eef1ff] px-4 py-3 text-center text-sm text-[#172b35]">
                {notice}
              </p>
            )}
          </div>
        )}
        <SetsList
          sets={sets}
          onDelete={handleDelete}
          onToggleUpload={() => setShowUpload((open) => !open)}
          uploadOpen={showUpload}
        />
      </div>
    </main>
  );
}
