import StudySetClient from "./StudySetClient";
import { EXERCISE_SET_ID } from "@/lib/exerciseData";

export function generateStaticParams() {
  return [{ id: EXERCISE_SET_ID }];
}

export default function StudySetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <StudySetClient params={params} />;
}
