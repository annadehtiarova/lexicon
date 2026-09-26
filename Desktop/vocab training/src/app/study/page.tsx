"use client";

import { useEffect, useState } from "react";
import StudySetClient from "../sets/[id]/StudySetClient";

export default function StudyPage() {
  const [setId, setSetId] = useState<string | null>(null);

  useEffect(() => {
    setSetId(new URLSearchParams(window.location.search).get("id") ?? "");
  }, []);

  if (setId === null) {
    return (
      <main className="flex flex-1 items-center justify-center px-4 text-sm text-[#5d6f74]">
        Opening study set...
      </main>
    );
  }

  return <StudySetClient id={setId} />;
}