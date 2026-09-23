"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import UploadCard from "@/components/UploadCard";
import SetsList from "@/components/SetsList";
import { addSet, deleteSet, loadSets, updateSetName } from "@/lib/storage";
import { extractVocabFromImages } from "@/lib/extractVocab";
import { EXERCISE_SET_ID } from "@/lib/exerciseData";
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

  return (
    <main
      className="relative flex flex-1 flex-col items-center px-4 pb-24 pt-12"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 800px 500px at 15% 0%, rgba(198,233,64,0.14), transparent 60%), radial-gradient(ellipse 700px 400px at 90% 0%, rgba(244,127,70,0.12), transparent 65%)",
      }}
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="flex items-center gap-2 rounded-full border border-[#2b3342] bg-[rgba(20,26,41,0.6)] px-4 py-1.5 text-xs tracking-[2.4px] text-[#9da5b5]">
          <CameraIcon className="h-3.5 w-3.5" /> PHOTO TO FLASHCARDS
        </span>

        <h1 className="font-heading max-w-4xl text-5xl leading-[1.05] tracking-[-1.2px] text-[#f3f5f9] sm:text-6xl">
          Learn German words{" "}
          <span className="bg-gradient-to-r from-[#d6fa61] to-[#ffa242] bg-clip-text text-transparent">
            straight off the page
          </span>
        </h1>

        <p className="font-body max-w-xl text-base text-[#9da5b5]">
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
        <Link
          href={`/sets/${EXERCISE_SET_ID}`}
          className="text-sm text-[#9da5b5] underline-offset-4 hover:text-[#f3f5f9] hover:underline"
        >
          View an example study set →
        </Link>
        <SetsList sets={sets} onDelete={handleDelete} onRename={handleRename} />
      </div>
    </main>
  );
}
