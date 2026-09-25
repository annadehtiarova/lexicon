"use client";

import { useCallback, useRef, useState } from "react";
import { ImagePlusIcon, SparkleIcon } from "@/components/icons";

const MAX_IMAGES = 20;

interface UploadCardProps {
  onCreateSet: (files: File[], name: string) => Promise<void> | void;
}

export default function UploadCard({ onCreateSet }: UploadCardProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isNaming, setIsNaming] = useState(false);
  const [setName, setSetName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const imageFiles = Array.from(incoming).filter((f) =>
      f.type.startsWith("image/"),
    );
    setFiles((prev) => [...prev, ...imageFiles].slice(0, MAX_IMAGES));
  }, []);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  };

  const handleCreate = () => {
    if (files.length === 0 || isCreating) return;
    setSetName("");
    setIsNaming(true);
  };

  const confirmCreate = async () => {
    const name = setName.trim();
    if (!name || files.length === 0 || isCreating) return;
    setIsCreating(true);
    setIsNaming(false);
    try {
      await onCreateSet(files, name);
      setFiles([]);
    } finally {
      setIsCreating(false);
    }
  };

  const canCreate = files.length > 0 && !isCreating;

  return (
    <div
      className="w-full max-w-3xl rounded-[28px] border-2 border-[#08758d] bg-[#fffaf0] p-7 shadow-[0_14px_0_rgba(8,117,141,0.12)]"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.72), rgba(244,239,229,0.72))",
      }}
    >
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border-[1.667px] border-dashed px-6 py-10 text-center transition-colors ${
          isDragging
            ? "border-[#e76548] bg-[#e76548]/5"
            : "border-[#9bb8bc] hover:border-[#08758d]"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(e) => e.target.files && addFiles(e.target.files)}
        />
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#08758d] text-white">
          <ImagePlusIcon className="h-6 w-6" />
        </div>
        <p className="font-heading text-lg tracking-[-0.36px] text-[#172b35]">
          {files.length > 0
            ? `${files.length} photo${files.length > 1 ? "s" : ""} ready`
            : "Drop photos of German text"}
        </p>
        <p className="font-body text-sm text-[#5d6f74]">
          Book pages, menus, signs, handwritten notes — up to {MAX_IMAGES}{" "}
          images
        </p>
        {files.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-2 pt-1">
            {files.map((f, i) => (
              <li
                key={`${f.name}-${i}`}
                className="rounded-full bg-[#dbeaec] px-3 py-1 text-xs text-[#075a70]"
              >
                {f.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={handleCreate}
        disabled={!canCreate}
        className={`mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#08758d] px-8 text-sm font-semibold text-white shadow-[0_4px_0_rgba(7,90,112,0.22)] transition-opacity ${
          canCreate
            ? "opacity-100 hover:opacity-90"
            : "cursor-not-allowed opacity-50"
        }`}
      >
        {isCreating ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0e1a01]/40 border-t-[#0e1a01]" />
            Extracting vocabulary…
          </>
        ) : (
          <>
            <SparkleIcon className="h-4 w-4" /> Create study set
          </>
        )}
      </button>

      {isNaming && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md border border-[#c7d1ca] bg-[#fffaf0] p-6 text-left shadow-[6px_6px_0_rgba(8,117,141,0.12)]">
            <p className="font-heading text-xl text-[#172b35]">Name your study set</p>
            <p className="font-body mt-2 text-sm text-[#5d6f74]">
              Give this vocabulary set a name before extraction starts.
            </p>
            <input
              autoFocus
              value={setName}
              onChange={(event) => setSetName(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") confirmCreate();
                if (event.key === "Escape") setIsNaming(false);
              }}
              placeholder="e.g. Moving house vocabulary"
              className="mt-5 h-11 w-full rounded-xl border border-[#9bb8bc] bg-white px-4 text-sm text-[#172b35] outline-none placeholder:text-[#5d6f74] focus:border-[#08758d]"
              aria-label="Study set name"
            />
            <div className="mt-5 flex justify-end gap-2">
              <button type="button" onClick={() => setIsNaming(false)} className="rounded-full bg-[#dbeaec] px-4 py-2 text-sm text-[#075a70]">
                Cancel
              </button>
              <button type="button" onClick={confirmCreate} disabled={!setName.trim()} className="rounded-full bg-[#08758d] px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">
                Create set
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
