import { StudySet, VocabWord } from "./types";

const RAW_WORDS: Omit<VocabWord, "id">[] = [
  ["machen", "schaffen / ermöglichen", "to create / enable"],
  ["helfen", "unterstützen / fördern", "to support / encourage"],
  ["sagen", "äußern / mitteilen", "to express / communicate"],
  ["sprechen", "kommunizieren / sich austauschen", "to communicate / exchange"],
  ["hören", "zuhören / berücksichtigen", "to listen / take into account"],
  ["verstehen", "nachvollziehen", "to understand"],
  ["entscheiden", "eine Entscheidung treffen", "to make a decision"],
  ["zeigen", "verdeutlichen / aufzeigen", "to demonstrate"],
  ["geben", "anbieten / bereitstellen", "to offer / provide"],
  ["bekommen", "erhalten / gewährt bekommen", "to receive"],
  ["lernen", "sich weiterbilden / Kenntnisse erwerben", "to develop skills"],
  ["besser machen", "verbessern / optimieren", "to improve / optimize"],
  ["planen", "organisieren / koordinieren", "to plan / coordinate"],
  ["arbeiten zusammen", "zusammenarbeiten / kooperieren", "to collaborate"],
  ["motivieren", "fördern / ermutigen", "to motivate / encourage"],
  ["Probleme lösen", "Herausforderungen bewältigen", "to overcome challenges"],
  ["beachten", "berücksichtigen", "to consider"],
  ["erlauben", "ermöglichen / gestatten", "to permit / enable"],
  ["kontrollieren", "überprüfen / überwachen", "to monitor"],
  ["sich kümmern um", "sich einsetzen für", "to take care of / advocate for"],
].map(([b1, german, english]) => ({
  b1,
  german,
  english,
  example: "",
  pos: "phrase",
}));

export const THEMA1_VERBS_SET_ID = "thema-1-verbs";

export function getThema1VerbsSet(): StudySet {
  return {
    id: THEMA1_VERBS_SET_ID,
    name: "Thema 1 - Ein guter Arbeitgeber (Verben)",
    createdAt: 0,
    sourceImageCount: 0,
    words: RAW_WORDS.map((word, index) => ({
      id: `${THEMA1_VERBS_SET_ID}-${index}`,
      ...word,
    })),
    masteredWordIds: [],
  };
}