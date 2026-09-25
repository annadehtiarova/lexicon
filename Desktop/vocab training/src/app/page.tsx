"use client";

import { useEffect, useState } from "react";
import UploadCard from "@/components/UploadCard";
import SetsList from "@/components/SetsList";
import { addSet, deleteSet, loadSets, updateSetName } from "@/lib/storage";
import { extractVocabFromImages } from "@/lib/extractVocab";
import { StudySet } from "@/lib/types";
import { loadBuiltInProgress } from "@/lib/storage";
import { CameraIcon } from "@/components/icons";
import { ARBEITSRAEUME_SET_ID, getArbeitsraeumeSet } from "@/lib/arbeitsraeumeData";
import { UMZUG_SET_ID, getUmzugSet } from "@/lib/umzugData";
import { ADILS_JOB_SET_ID, getAdilsJobSet } from "@/lib/adilsJobData";
import { PROBLEM_SET_ID, getProblemSet } from "@/lib/problemData";
import { EMAIL_HAUSVERWALTUNG_SET_ID, getEmailHausverwaltungSet } from "@/lib/emailHausverwaltungData";
import { AUSDRUECKE_SET_ID, getAusdrueckeSet } from "@/lib/ausdrueckeData";

const BUILT_IN_SETS = [getArbeitsraeumeSet(), getUmzugSet(), getAdilsJobSet(), getProblemSet(), getEmailHausverwaltungSet(), getAusdrueckeSet()];

export default function Home() {
  const [sets, setSets] = useState<StudySet[]>([]);
  const [notice, setNotice] = useState<string | null>(null);
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    const builtInIds = new Set([ARBEITSRAEUME_SET_ID, UMZUG_SET_ID, ADILS_JOB_SET_ID, PROBLEM_SET_ID, EMAIL_HAUSVERWALTUNG_SET_ID, AUSDRUECKE_SET_ID]);
    const builtInSets = BUILT_IN_SETS.map((set) => ({
      ...set,
      masteredWordIds: loadBuiltInProgress(set.id),
    }));
    setSets([...builtInSets, ...loadSets().filter((set) => !builtInIds.has(set.id))]);
  }, []);

  const handleCreateSet = async (files: File[], name: string) => {
    const { words } = await extractVocabFromImages(files);
    const newSet: StudySet = {
      id: crypto.randomUUID(),
      name,
      createdAt: Date.now(),
      sourceImageCount: files.length,
      words: words.map((w) => ({ id: crypto.randomUUID(), ...w })),
      masteredWordIds: [],
    };
    setSets(addSet(newSet));
    setNotice(null);
  };

  const handleDelete = (id: string) => {
    setSets(deleteSet(id));
  };

  const handleRename = (id: string, name: string) => {
    setSets(updateSetName(id, name));
  };

  return (
    <main
      className="relative flex flex-1 flex-col items-center bg-white px-4 pb-16 pt-8"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-4xl leading-tight tracking-[-1px] text-[#172b35]">Learn B2 Beruf Deutsch Vocabulary</h1>
        <p className="font-body max-w-[460px] text-[13px] leading-5 text-[#60747a]">Practice German with flashcards, quizzes, and interactive exercises. Build your vocabulary and reinforce what you learn through different ways to practise.</p>
      </div>

      <div className="mt-7 flex w-full flex-col items-center gap-4">
        {process.env.NODE_ENV !== "production" && showUpload && (
          <div className="w-full max-w-[568px]">
            <UploadCard onCreateSet={handleCreateSet} />
            {notice && <p className="mt-3 rounded-xl border border-[#b9c9eb] bg-[#eef1ff] px-4 py-3 text-center text-sm text-[#172b35]">{notice}</p>}
          </div>
        )}
        <SetsList
          sets={sets}
          onDelete={handleDelete}
          onRename={handleRename}
          onToggleUpload={process.env.NODE_ENV !== "production" ? () => setShowUpload((current) => !current) : undefined}
          uploadOpen={showUpload}
        />
      </div>
    </main>
  );
}
