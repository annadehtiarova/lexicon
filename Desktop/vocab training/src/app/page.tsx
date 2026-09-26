"use client";

import { useEffect, useState } from "react";
import UploadCard from "@/components/UploadCard";
import SetsList from "@/components/SetsList";
import {
  addSet,
  deleteSet,
  loadBuiltInProgress,
  loadSets,
} from "@/lib/storage";
import { extractVocabFromImages } from "@/lib/extractVocab";
import { StudySet } from "@/lib/types";
import { ARBEITSRAEUME_SET_ID, getArbeitsraeumeSet } from "@/lib/arbeitsraeumeData";
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

const BUILT_IN_SET_IDS = new Set([
  ARBEITSRAEUME_SET_ID,
  UMZUG_SET_ID,
  ADILS_JOB_SET_ID,
  PROBLEM_SET_ID,
  EMAIL_HAUSVERWALTUNG_SET_ID,
  AUSDRUECKE_SET_ID,
  SPAETI_SET_ID,
  GESPRAECH_MEHMET_SET_ID,
  BEITRAEGE_SET_ID,
  DIENSTPLAN_SET_ID,
]);

const BUILT_IN_SETS = [
  getArbeitsraeumeSet(),
  getUmzugSet(),
  getAdilsJobSet(),
  getProblemSet(),
  getEmailHausverwaltungSet(),
  getAusdrueckeSet(),
  getSpaetiSet(),
  getGespraechMehmetSet(),
  getBeitraegeSet(),
  getDienstplanSet(),
];

export default function Home() {
  const [sets, setSets] = useState<StudySet[]>([]);
  const [notice, setNotice] = useState<string | null>(null);
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    const builtInSets = BUILT_IN_SETS.map((set) => ({
      ...set,
      masteredWordIds: loadBuiltInProgress(set.id),
    }));
    const customSets = loadSets().filter((set) => !BUILT_IN_SET_IDS.has(set.id));
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
      setSets([
        ...BUILT_IN_SETS.map((set) => ({
          ...set,
          masteredWordIds: loadBuiltInProgress(set.id),
        })),
        ...addSet(newSet).filter((set) => !BUILT_IN_SET_IDS.has(set.id)),
      ]);
      setNotice(null);
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
