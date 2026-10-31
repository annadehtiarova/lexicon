import { StudySet, VocabWord } from "./types";

const RAW_WORDS: Omit<VocabWord, "id">[] = [
  [
    "Ein guter Chef hilft seinen Mitarbeitern.",
    "Eine gute Führungskraft unterstützt ihre Mitarbeiter bei beruflichen Herausforderungen.",
  ],
  [
    "Der Chef muss nett sein.",
    "Ein Vorgesetzter sollte respektvoll und wertschätzend mit seinem Team umgehen.",
  ],
  [
    "Die Mitarbeiter sollen ihre Meinung sagen können.",
    "Die Mitarbeiter sollten die Möglichkeit haben, ihre Ansichten offen zu äußern.",
  ],
  [
    "Der Arbeitgeber muss gute Arbeitsbedingungen machen.",
    "Der Arbeitgeber sollte angemessene Arbeitsbedingungen schaffen.",
  ],
  [
    "Die Firma soll Weiterbildung anbieten.",
    "Das Unternehmen sollte die berufliche Weiterentwicklung seiner Mitarbeiter fördern.",
  ],
  [
    "Der Chef muss Probleme lösen.",
    "Eine gute Führungskraft sollte in der Lage sein, Konflikte konstruktiv zu bewältigen.",
  ],
  [
    "Alle sollen fair behandelt werden.",
    "Der Arbeitgeber sollte für eine gerechte und transparente Behandlung aller Beschäftigten sorgen.",
  ],
  [
    "Die Arbeit soll Spaß machen.",
    "Ein positives Arbeitsklima kann die Motivation und Zufriedenheit der Mitarbeiter steigern.",
  ],
].map(([german, english]) => ({
  german,
  english,
  example: "",
  pos: "phrase",
}));

export const THEMA1_SENTENCES_SET_ID = "thema-1-sentences";

export function getThema1SentencesSet(): StudySet {
  return {
    id: THEMA1_SENTENCES_SET_ID,
    name: "Thema 1 - Ein guter Arbeitgeber (Sentences)",
    createdAt: 0,
    sourceImageCount: 0,
    words: RAW_WORDS.map((word, index) => ({
      id: `${THEMA1_SENTENCES_SET_ID}-${index}`,
      ...word,
    })),
    masteredWordIds: [],
  };
}