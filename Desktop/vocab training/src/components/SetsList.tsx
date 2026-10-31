"use client";

import { useState } from "react";
import Link from "next/link";
import { StudySet } from "@/lib/types";
import {
  LayersIcon,
  BookOpenIcon,
  CameraIcon,
  TrashIcon,
} from "@/components/icons";
import { THEMA1_VERBS_SET_ID } from "@/lib/thema1VerbsData";

const BUILT_IN_SET_IDS = new Set([THEMA1_VERBS_SET_ID]);

interface SetsListProps {
  sets: StudySet[];
  onDelete: (id: string) => void;
  onToggleUpload: () => void;
  uploadOpen: boolean;
}

export default function SetsList({
  sets,
  onDelete,
  onToggleUpload,
  uploadOpen,
}: SetsListProps) {
  const visibleSets = sets;

  return (
    <div className="w-full max-w-[760px] border-t-[3px] border-[#263fd6] pt-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayersIcon className="h-3.5 w-3.5 text-[#d8f56d]" />
          <h2 className="font-heading text-base font-semibold text-[#172b35]">
            Your sets
          </h2>
        </div>
        {sets.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleUpload}
              aria-label={uploadOpen ? "Close upload" : "Upload a set"}
              title={uploadOpen ? "Close upload" : "Upload a set"}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#5d6f74] hover:bg-[#eef1ff] hover:text-[#263fd6]"
            >
              <CameraIcon className="h-4 w-4" />
            </button>
            <p className="font-body text-xs text-[#5d6f74]">
              {visibleSets.length} sets
            </p>
          </div>
        )}
      </div>

      {visibleSets.length === 0 ? (
        <div className="mt-5 border border-dashed border-[#9bb8bc] bg-white py-10 text-center text-[#5d6f74]">
          No sets found.
        </div>
      ) : (
        <ul className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {visibleSets.map((set) => (
            <li
              key={set.id}
              className="relative"
            >
              <Link
                href={
                  BUILT_IN_SET_IDS.has(set.id)
                    ? `/sets/${set.id}`
                    : `/study/?id=${encodeURIComponent(set.id)}`
                }
                aria-label={`Study ${set.name}`}
                className="group block min-h-[176px] border border-[#dce4bd] bg-[#F7FAE7] p-6 text-[#172b35] shadow-[4px_4px_0_#e5ecec] transition-colors hover:border-[#263fd6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#263fd6]"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-heading text-xl font-semibold text-[#172b35]">
                    {set.name}
                  </p>
                  {!BUILT_IN_SET_IDS.has(set.id) && <span className="h-7 w-7 shrink-0" aria-hidden="true" />}
                </div>
                {BUILT_IN_SET_IDS.has(set.id) && (
                  <p className="pt-1 text-[10px] font-semibold uppercase tracking-[0.7px] text-[#263fd6]">
                    Built-in set
                  </p>
                )}
                <p className="font-body pt-1.5 text-[11px] text-[#5d6f74]">
                  {set.words.length} words · {set.masteredWordIds.length} mastered
                </p>
                <span className="mt-3 inline-flex h-9 items-center gap-1.5 rounded-full bg-[#d8f56d] px-4 text-sm font-semibold text-[#172b35]">
                  <BookOpenIcon className="h-4 w-4" /> Study
                </span>
              </Link>
              {!BUILT_IN_SET_IDS.has(set.id) && (
                <button
                  type="button"
                  onClick={() => onDelete(set.id)}
                  className="absolute right-4 top-4 z-10 rounded-full p-1.5 text-[#5d6f74] hover:bg-[#eef1ff] hover:text-[#263fd6]"
                  aria-label={`Delete ${set.name}`}
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
