"use client";

import { useEffect, useState } from "react";
import UploadCard from "@/components/UploadCard";
import SetsList from "@/components/SetsList";
import { addSet, deleteSet, loadSets, saveSets, updateSetName } from "@/lib/storage";
import { extractVocabFromImages } from "@/lib/extractVocab";
import { StudySet } from "@/lib/types";
import { CameraIcon } from "@/components/icons";

export default function Home() {
  const [sets, setSets] = useState<StudySet[]>([]);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    setSets(loadSets());
  }, []);

  const handleCreateSet = async (files: File[], name: string) => {
    try {
      const { words } = await extractVocabFromImages(files);
      const newSet: StudySet = {
        id: crypto.randomUUID(), name, createdAt: Date.now(), sourceImageCount: files.length,
        words: words.map((w) => ({ id: crypto.randomUUID(), ...w })), masteredWordIds: [],
      };
      setSets(addSet(newSet));
      setNotice(null);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Extraction failed");
    }
  };

  const handleDelete = (id: string) => {
    setSets(deleteSet(id));
  };

  const handleRename = (id: string, name: string) => {
    setSets(updateSetName(id, name));
  };

  const handleImport = (importedSets: StudySet[]) => {
    const currentSets = loadSets();
    const mergedSets = [...importedSets, ...currentSets.filter((current) => !importedSets.some((imported) => imported.id === current.id))];
    saveSets(mergedSets);
    setSets(mergedSets);
  };

  return (
    <main
      className="relative flex flex-1 flex-col items-center px-4 pb-24 pt-12"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(8,117,141,0.13), transparent 38%), linear-gradient(90deg, rgba(231,101,72,0.06), transparent 50%)",
      }}
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="flex items-center gap-2 rounded-none border-l-4 border-[#e76548] bg-[#fffaf0] px-4 py-1.5 text-xs font-semibold tracking-[2.4px] text-[#08758d] shadow-[4px_4px_0_rgba(231,101,72,0.16)]">
          <CameraIcon className="h-3.5 w-3.5" /> PHOTO TO FLASHCARDS
        </span>

        <h1 className="font-heading max-w-4xl text-5xl leading-[1.05] tracking-[-1.2px] text-[#172b35] sm:text-6xl">
          Learn German words{" "}
          <span className="text-[#e76548]">
            straight off the page
          </span>
        </h1>

        <p className="font-body max-w-xl text-base text-[#5d6f74]">
          Photograph a textbook page, a menu or a street sign. Lexikon pulls out
          the German vocabulary, adds English translations, and builds four ways
          to practise it.
        </p>
      </div>

      <div className="mt-10 flex w-full flex-col items-center gap-10">
        <UploadCard onCreateSet={handleCreateSet} />
        {notice && (
          <p className="max-w-lg rounded-2xl border border-[#3a2f1a] bg-[#241c0f] px-4 py-3 text-center text-sm text-amber-300">
            {notice}
          </p>
        )}
        <SetsList sets={sets} onDelete={handleDelete} onRename={handleRename} onImport={handleImport} />
      </div>
    </main>
  );
}
