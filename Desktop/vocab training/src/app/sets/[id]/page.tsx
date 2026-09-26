import StudySetClient from "./StudySetClient";
import { ARBEITSRAEUME_SET_ID } from "@/lib/arbeitsraeumeData";
import { UMZUG_SET_ID } from "@/lib/umzugData";
import { ADILS_JOB_SET_ID } from "@/lib/adilsJobData";
import { PROBLEM_SET_ID } from "@/lib/problemData";
import { EMAIL_HAUSVERWALTUNG_SET_ID } from "@/lib/emailHausverwaltungData";
import { AUSDRUECKE_SET_ID } from "@/lib/ausdrueckeData";
import { SPAETI_SET_ID } from "@/lib/spaetiData";
import { GESPRAECH_MEHMET_SET_ID } from "@/lib/gespraechMitMehmetData";
import { BEITRAEGE_SET_ID } from "@/lib/beitraegeData";
import { DIENSTPLAN_SET_ID } from "@/lib/dienstplanData";

export function generateStaticParams() {
  return [
    { id: ARBEITSRAEUME_SET_ID },
    { id: UMZUG_SET_ID },
    { id: ADILS_JOB_SET_ID },
    { id: PROBLEM_SET_ID },
    { id: EMAIL_HAUSVERWALTUNG_SET_ID },
    { id: AUSDRUECKE_SET_ID },
    { id: SPAETI_SET_ID },
    { id: GESPRAECH_MEHMET_SET_ID },
    { id: BEITRAEGE_SET_ID },
    { id: DIENSTPLAN_SET_ID },
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
