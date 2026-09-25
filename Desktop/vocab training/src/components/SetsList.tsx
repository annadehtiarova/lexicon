"use client";

import { useState } from "react";
import Link from "next/link";
import { StudySet } from "@/lib/types";
import { LayersIcon, BookOpenIcon, TrashIcon, CameraIcon, ChevronDownIcon } from "@/components/icons";
import { ARBEITSRAEUME_SET_ID } from "@/lib/arbeitsraeumeData";
import { UMZUG_SET_ID } from "@/lib/umzugData";
import { ADILS_JOB_SET_ID } from "@/lib/adilsJobData";
import { PROBLEM_SET_ID } from "@/lib/problemData";
import { EMAIL_HAUSVERWALTUNG_SET_ID } from "@/lib/emailHausverwaltungData";
import { AUSDRUECKE_SET_ID } from "@/lib/ausdrueckeData";

const BUILT_IN_SET_IDS = new Set([
  ARBEITSRAEUME_SET_ID,
  UMZUG_SET_ID,
  ADILS_JOB_SET_ID,
  PROBLEM_SET_ID,
  EMAIL_HAUSVERWALTUNG_SET_ID,
  AUSDRUECKE_SET_ID,
]);

interface SetsListProps {
  sets: StudySet[];
  onDelete: (id: string) => void;
  onRename: (id: string, name: string) => void;
  onToggleUpload?: () => void;
  uploadOpen?: boolean;
}

export default function SetsList({ sets, onDelete, onRename, onToggleUpload, uploadOpen = false }: SetsListProps) {
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
    <div className="w-full max-w-[568px] border-t-[3px] border-[#c7c7c7] pt-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayersIcon className="h-3.5 w-3.5 text-[#d8f56d]" />
          <h2 className="font-heading text-[15px] text-[#172b35]">Your sets</h2>
        </div>
        <div className="flex items-center gap-3">
          {onToggleUpload && <button type="button" onClick={onToggleUpload} aria-label={uploadOpen ? "Close upload" : "Upload a set"} title={uploadOpen ? "Close upload" : "Upload a set"} className="flex h-7 w-7 items-center justify-center rounded-full text-[#5d6f74] hover:bg-[#eef1ff] hover:text-[#263fd6]"><CameraIcon className="h-4 w-4" /></button>}
          <p className="font-body text-[11px] text-[#5d6f74]">{visibleSets.length} sets</p>
          <label className="flex items-center gap-2 text-sm font-semibold text-[#172b35]">
            <span className="relative block">
              <select value={selectedChapter} onChange={(event) => setSelectedChapter(event.target.value)} className="h-9 w-[120px] appearance-none rounded-full border border-[#172b35] bg-white pl-4 pr-9 text-sm text-[#172b35] outline-none" aria-label="Filter by chapter">
                {Array.from({ length: 16 }, (_, index) => {
                  const chapter = String(index + 1);
                  return <option key={chapter} value={chapter} disabled={chapter !== "1"}>Kapitel {chapter}</option>;
                })}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#172b35]" />
            </span>
          </label>
        </div>
      </div>

      {visibleSets.length === 0 ? (
        <div className="mt-5 border border-dashed border-[#9bb8bc] bg-white py-10 text-center text-[#5d6f74]">
          No sets in this chapter yet.
        </div>
      ) : (
        <ul className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {visibleSets.map((set) => (
            <li key={set.id} className="min-h-[150px] border border-[#dce4bd] bg-[#F7FAE7] p-5 shadow-[4px_4px_0_#e5ecec]">
              <div className="flex items-start justify-between gap-2">
                {BUILT_IN_SET_IDS.has(set.id) ? (
                  <div>
                    <p className="font-heading text-lg font-semibold text-[#172b35]">{set.name}</p>
                    <p className="pt-1 text-[9px] font-semibold uppercase tracking-[0.7px] text-[#172b35]">Built-in set</p>
                  </div>
                ) : editingId === set.id ? (
                  <div className="flex min-w-0 flex-1 gap-2">
                    <input autoFocus value={draftName} onChange={(event) => setDraftName(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") saveName(set.id); if (event.key === "Escape") setEditingId(null); }} className="h-9 min-w-0 flex-1 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#263fd6]" aria-label="Study set name" />
                    <button type="button" onClick={() => saveName(set.id)} className="bg-[#263fd6] px-3 text-xs font-semibold text-white">Save</button>
                  </div>
                ) : (
                  <button type="button" onClick={() => startEditing(set)} className="text-left font-heading text-lg text-[#172b35]">{set.name}</button>
                )}
              </div>
                  {!BUILT_IN_SET_IDS.has(set.id) && <button onClick={() => onDelete(set.id)} className="shrink-0 p-1.5 text-[#5d6f74] hover:bg-[#eef1ff] hover:text-[#263fd6]" aria-label="Delete set"><TrashIcon className="h-4 w-4" /></button>}
                <p className="font-body pt-1.5 text-[11px] text-[#5d6f74]">{set.words.length} words · {set.masteredWordIds.length} mastered</p>
                <Link href={BUILT_IN_SET_IDS.has(set.id) ? `/sets/${set.id}/` : `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/study/?set=${encodeURIComponent(set.id)}`} className="mt-3 inline-flex h-7 items-center gap-1.5 rounded-full bg-[#d8f56d] px-3 text-[11px] font-medium text-[#172b35]"><BookOpenIcon className="h-3 w-3" /> Study</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
