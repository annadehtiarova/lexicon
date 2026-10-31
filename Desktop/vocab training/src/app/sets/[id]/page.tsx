import StudySetClient from "./StudySetClient";
import { THEMA1_VERBS_SET_ID } from "@/lib/thema1VerbsData";

export function generateStaticParams() {
  return [{ id: THEMA1_VERBS_SET_ID }];
}

export default async function StudySetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <StudySetClient id={id} />;
}
