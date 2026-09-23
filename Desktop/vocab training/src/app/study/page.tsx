"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import StudySetClient from "../sets/[id]/StudySetClient";

function StudyRoute() {
  const searchParams = useSearchParams();
  const id = searchParams.get("set");

  if (!id) {
    return (
      <main className="flex flex-1 items-center justify-center px-4 text-slate-300">
        No study set was selected.
      </main>
    );
  }

  return <StudySetClient id={id} />;
}

export default function StudyPage() {
  return (
    <Suspense fallback={null}>
      <StudyRoute />
    </Suspense>
  );
}
