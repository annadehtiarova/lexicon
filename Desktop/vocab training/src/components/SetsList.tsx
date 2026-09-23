"use client";

import { useState } from "react";
import Link from "next/link";
import { StudySet } from "@/lib/types";
import { LayersIcon, BookOpenIcon, TrashIcon } from "@/components/icons";

interface SetsListProps {
  sets: StudySet[];
  onDelete: (id: string) => void;
  onRename: (id: string, name: string) => void;
}

export default function SetsList({ sets, onDelete, onRename }: SetsListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftName, setDraftName] = useState("");

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
    <div className="w-full max-w-3xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayersIcon className="h-5 w-5 text-[#f3f5f9]" />
          <h2 className="font-heading text-xl tracking-[-0.4px] text-[#f3f5f9]">
            Your sets
          </h2>
        </div>
        {sets.length > 0 && (
          <p className="font-body text-sm text-[#9da5b5]">
            {sets.length} saved to your account
          </p>
        )}
      </div>

      {sets.length === 0 ? (
        <div className="mt-5 rounded-2xl border border-dashed border-[#2b3342] py-10 text-center text-[#9da5b5]">
          No sets yet. Upload your first photo above.
        </div>
      ) : (
        <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sets.map((set) => (
            <li
              key={set.id}
              className="rounded-[28px] border-[0.556px] border-[#2b3342] p-5 shadow-[0px_24px_70px_0px_rgba(0,0,5,0.9)] backdrop-blur-[10px]"
              style={{
                backgroundImage:
                  "linear-gradient(173.4deg, rgba(24, 31, 47, 0.9) 8.5%, rgba(16, 22, 35, 0.75) 91.5%)",
              }}
            >
              <div className="flex items-start justify-between gap-2">
                {editingId === set.id ? (
                  <div className="flex min-w-0 flex-1 gap-2">
                    <input
                      autoFocus
                      value={draftName}
                      onChange={(event) => setDraftName(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") saveName(set.id);
                        if (event.key === "Escape") setEditingId(null);
                      }}
                      className="h-9 min-w-0 flex-1 rounded-lg border border-[#3a4457] bg-[#0d141f] px-3 text-sm text-[#f3f5f9] outline-none focus:border-[#c6e940]"
                      aria-label="Study set name"
                    />
                    <button type="button" onClick={() => saveName(set.id)} className="rounded-full bg-[#c6e940] px-3 text-xs font-semibold text-[#0e1a01]">
                      Save
                    </button>
                  </div>
                ) : (
                  <button type="button" onClick={() => startEditing(set)} className="text-left font-heading text-lg tracking-[-0.36px] text-[#f3f5f9]">
                    {set.name}
                  </button>
                )}
                <button
                  onClick={() => onDelete(set.id)}
                  className="shrink-0 rounded-full p-1.5 text-[#9da5b5] hover:bg-[#20293a] hover:text-red-400"
                  aria-label="Delete set"
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
              <p className="font-body pt-2 text-sm text-[#9da5b5]">
                {set.words.length} words · {set.masteredWordIds.length} mastered
              </p>
              <Link
                href={`/study?set=${encodeURIComponent(set.id)}`}
                className="mt-4 inline-flex h-9 items-center gap-2 rounded-full bg-[#20293a] px-4 text-sm font-medium text-[#f3f5f9] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#263144]"
              >
                <BookOpenIcon className="h-4 w-4" /> Study
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
