"use client";

import { useState } from "react";
import Link from "next/link";
import { StudySet } from "@/lib/types";
import { LayersIcon, BookOpenIcon, TrashIcon, ChevronDownIcon } from "@/components/icons";

interface SetsListProps {
  sets: StudySet[];
  onDelete: (id: string) => void;
  onRename: (id: string, name: string) => void;
}

import { ARBEITSRAEUME_SET_ID } from "@/lib/arbeitsraeumeData";
import { UMZUG_SET_ID } from "@/lib/umzugData";
import { ADILS_JOB_SET_ID } from "@/lib/adilsJobData";
import { PROBLEM_SET_ID } from "@/lib/problemData";
import { EMAIL_HAUSVERWALTUNG_SET_ID } from "@/lib/emailHausverwaltungData";

const BUILT_IN_SET_IDS = new Set([ARBEITSRAEUME_SET_ID, UMZUG_SET_ID, ADILS_JOB_SET_ID, PROBLEM_SET_ID, EMAIL_HAUSVERWALTUNG_SET_ID]);

export default function SetsList({ sets, onDelete, onRename }: SetsListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftName, setDraftName] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("1");

  const visibleSets = sets.filter((set) => set.name.startsWith(`Kapitel ${selectedChapter} -`));

  const startEditing = (set: StudySet) => {
    setEditingId(set.id);
    setDraftName(set.name);
  };

  const saveName = (id: string) => {
    const name = draftName.trim();
    if (!name) return;
    onRename(id, name);
    setEditingId(null);
  };

  return (
    <div className="w-full max-w-3xl border-t-4 border-[#e76548] pt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayersIcon className="h-5 w-5 text-[#08758d]" />
          <h2 className="font-heading text-xl text-[#172b35]">Your sets</h2>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-body text-sm text-[#5d6f74]">{visibleSets.length} sets</p>
          <label className="flex items-center gap-2 text-sm font-semibold text-[#172b35]">
            <span className="relative block">
              <select
                value={selectedChapter}
                onChange={(event) => setSelectedChapter(event.target.value)}
                className="h-9 w-[120px] appearance-none rounded-full border border-[#08758d] bg-white px-4 pr-7 text-sm text-[#075a70] outline-none focus:border-[#e76548]"
                aria-label="Filter by chapter"
              >
                {Array.from({ length: 16 }, (_, index) => {
                  const chapter = String(index + 1);
                  return <option key={chapter} value={chapter} disabled={chapter !== "1"}>Kapitel {chapter}</option>;
                })}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#075a70]" />
            </span>
          </label>
        </div>
      </div>

      {visibleSets.length === 0 ? (
        <div className="mt-5 border border-dashed border-[#9bb8bc] bg-[#fffaf0] py-10 text-center text-[#5d6f74]">
          No sets in this chapter yet.
        </div>
      ) : (
        <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {visibleSets.map((set) => (
            <li key={set.id} className="border border-[#c7d1ca] bg-[#fffaf0] p-5 shadow-[5px_5px_0_rgba(8,117,141,0.1)]">
              <div className="flex items-start justify-between gap-2">
                {BUILT_IN_SET_IDS.has(set.id) ? (
                  <div>
                    <p className="font-heading text-lg text-[#172b35]">{set.name}</p>
                    <p className="pt-1 text-xs font-semibold uppercase tracking-[1px] text-[#08758d]">Built-in set</p>
                  </div>
                ) : editingId === set.id ? (
                  <div className="flex min-w-0 flex-1 gap-2">
                    <input autoFocus value={draftName} onChange={(event) => setDraftName(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") saveName(set.id); if (event.key === "Escape") setEditingId(null); }} className="h-9 min-w-0 flex-1 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]" aria-label="Study set name" />
                    <button type="button" onClick={() => saveName(set.id)} className="bg-[#e76548] px-3 text-xs font-semibold text-white">Save</button>
                  </div>
                ) : (
                  <button type="button" onClick={() => startEditing(set)} className="text-left font-heading text-lg text-[#172b35]">{set.name}</button>
                )}
              </div>
                {!BUILT_IN_SET_IDS.has(set.id) && <button onClick={() => onDelete(set.id)} className="shrink-0 p-1.5 text-[#5d6f74] hover:text-[#e76548]" aria-label="Delete set"><TrashIcon className="h-4 w-4" /></button>}
              <p className="font-body pt-2 text-sm text-[#5d6f74]">{set.words.length} words · {set.masteredWordIds.length} mastered</p>
              <Link href={BUILT_IN_SET_IDS.has(set.id) ? `/sets/${set.id}/` : `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/study/?set=${encodeURIComponent(set.id)}`} className="mt-4 inline-flex h-9 items-center gap-2 rounded-full border border-[#08758d] bg-[#08758d] px-4 text-sm font-medium text-white hover:bg-[#075a70]"><BookOpenIcon className="h-4 w-4" /> Study</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
