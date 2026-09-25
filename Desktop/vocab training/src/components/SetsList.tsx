"use client";

import { useState } from "react";
import Link from "next/link";
import { StudySet } from "@/lib/types";
import { LayersIcon, BookOpenIcon, TrashIcon } from "@/components/icons";

interface SetsListProps {
  sets: StudySet[];
  onDelete: (id: string) => void;
  onRename: (id: string, name: string) => void;
  onImport: (sets: StudySet[]) => void;
}

export default function SetsList({ sets, onDelete, onRename, onImport }: SetsListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftName, setDraftName] = useState("");
  const [importError, setImportError] = useState<string | null>(null);

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

  const importSets = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    try {
      const parsed: unknown = JSON.parse(await file.text());
      if (!Array.isArray(parsed) || parsed.some((set) => !isStudySet(set))) {
        throw new Error("This is not a valid Lexikon backup.");
      }
      onImport(parsed);
      setImportError(null);
    } catch (error) {
      setImportError(error instanceof Error ? error.message : "Could not import backup.");
    }
  };

  return (
    <div className="w-full max-w-3xl border-t-4 border-[#e76548] pt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayersIcon className="h-5 w-5 text-[#08758d]" />
          <h2 className="font-heading text-xl text-[#172b35]">Your sets</h2>
        </div>
        <div className="flex items-center gap-3">
          {sets.length > 0 && <p className="font-body text-sm text-[#5d6f74]">{sets.length} saved locally</p>}
          <label className="cursor-pointer rounded-full border border-[#9bb8bc] px-3 py-1.5 text-xs font-semibold text-[#5d6f74] hover:border-[#08758d] hover:text-[#08758d]">
            Import backup
            <input type="file" accept="application/json,.json" onChange={importSets} className="sr-only" />
          </label>
        </div>
      </div>
      {importError && <p className="mt-3 text-sm text-[#b23b2a]">{importError}</p>}

      {sets.length === 0 ? (
        <div className="mt-5 border border-dashed border-[#9bb8bc] bg-[#fffaf0] py-10 text-center text-[#5d6f74]">
          No sets yet. Upload your first photo above.
        </div>
      ) : (
        <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sets.map((set) => (
            <li key={set.id} className="border border-[#c7d1ca] bg-[#fffaf0] p-5 shadow-[5px_5px_0_rgba(8,117,141,0.1)]">
              <div className="flex items-start justify-between gap-2">
                {editingId === set.id ? (
                  <div className="flex min-w-0 flex-1 gap-2">
                    <input autoFocus value={draftName} onChange={(event) => setDraftName(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") saveName(set.id); if (event.key === "Escape") setEditingId(null); }} className="h-9 min-w-0 flex-1 rounded-lg border border-[#9bb8bc] bg-white px-3 text-sm text-[#172b35] outline-none focus:border-[#08758d]" aria-label="Study set name" />
                    <button type="button" onClick={() => saveName(set.id)} className="bg-[#e76548] px-3 text-xs font-semibold text-white">Save</button>
                  </div>
                ) : (
                  <button type="button" onClick={() => startEditing(set)} className="text-left font-heading text-lg text-[#172b35]">{set.name}</button>
                )}
                <button onClick={() => onDelete(set.id)} className="shrink-0 p-1.5 text-[#5d6f74] hover:text-[#e76548]" aria-label="Delete set"><TrashIcon className="h-4 w-4" /></button>
              </div>
              <p className="font-body pt-2 text-sm text-[#5d6f74]">{set.words.length} words · {set.masteredWordIds.length} mastered</p>
              <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/study/?set=${encodeURIComponent(set.id)}`} className="mt-4 inline-flex h-9 items-center gap-2 rounded-full border border-[#08758d] bg-[#08758d] px-4 text-sm font-medium text-white hover:bg-[#075a70]"><BookOpenIcon className="h-4 w-4" /> Study</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function isStudySet(value: unknown): value is StudySet {
  if (!value || typeof value !== "object") return false;
  const set = value as Partial<StudySet>;
  return typeof set.id === "string" && typeof set.name === "string" && typeof set.createdAt === "number" && typeof set.sourceImageCount === "number" && Array.isArray(set.words) && Array.isArray(set.masteredWordIds);
}
