import { StudySet, VocabWord } from "./types";

const RAW_WORDS: Omit<VocabWord, "id">[] = [
  ["die Hilfe", "die Unterstützung", "support"],
  ["das Gespräch", "der Austausch", "exchange"],
  ["die Arbeit", "die Tätigkeit / die Beschäftigung", "work / employment"],
  ["das Team", "die Belegschaft", "workforce"],
  ["der Chef", "die Führungskraft / der Vorgesetzte", "manager / supervisor"],
  ["die Firma", "das Unternehmen", "company"],
  ["das Problem", "die Herausforderung", "challenge"],
  ["die Lösung", "der Lösungsansatz", "approach to a solution"],
  ["die Möglichkeit", "die Gelegenheit / die Perspektive", "opportunity / prospect"],
  ["das Lernen", "die Weiterbildung", "professional development"],
  ["die Erfahrung", "die Berufserfahrung", "professional experience"],
  ["die Meinung", "die Ansicht / die Auffassung", "opinion / viewpoint"],
  ["die Regeln", "die Richtlinien", "guidelines"],
  ["die Verantwortung", "die Zuständigkeit", "responsibility / area of responsibility"],
  ["das Vertrauen", "die Vertrauensbasis", "basis of trust"],
  ["die Atmosphäre", "das Arbeitsklima", "working atmosphere"],
  ["die Bezahlung", "die Vergütung", "remuneration"],
  ["die Freizeit", "der Freizeitausgleich", "compensatory time off"],
  ["die Sicherheit", "die Arbeitsplatzsicherheit", "job security"],
  ["die Entwicklung", "die berufliche Entwicklung", "professional development"],
].map(([b1, german, english]) => ({
  b1,
  german,
  english,
  example: "",
  pos: "noun",
}));

export const THEMA1_NOUNS_SET_ID = "thema-1-nouns";

export function getThema1NounsSet(): StudySet {
  return {
    id: THEMA1_NOUNS_SET_ID,
    name: "Thema 1 - Ein guter Arbeitgeber (Nomen)",
    createdAt: 0,
    sourceImageCount: 0,
    words: RAW_WORDS.map((word, index) => ({
      id: `${THEMA1_NOUNS_SET_ID}-${index}`,
      ...word,
    })),
    masteredWordIds: [],
  };
}