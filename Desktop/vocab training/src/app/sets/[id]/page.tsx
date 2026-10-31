import StudySetClient from "./StudySetClient";
import { THEMA1_VERBS_SET_ID } from "@/lib/thema1VerbsData";
import { THEMA1_NOUNS_SET_ID } from "@/lib/thema1NounsData";
import { THEMA1_ADJECTIVES_SET_ID } from "@/lib/thema1AdjectivesData";
import { THEMA1_SENTENCES_SET_ID } from "@/lib/thema1SentencesData";

export function generateStaticParams() {
  return [
    { id: THEMA1_VERBS_SET_ID },
    { id: THEMA1_NOUNS_SET_ID },
    { id: THEMA1_ADJECTIVES_SET_ID },
    { id: THEMA1_SENTENCES_SET_ID },
  ];
}

export default async function StudySetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <StudySetClient id={id} />;
}
