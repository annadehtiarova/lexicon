import { StudySet, VocabWord } from "./types";

const RAW_WORDS: Omit<VocabWord, "id">[] = [
  ["gut", "geeignet / vorteilhaft", "suitable / beneficial"],
  ["nett", "wertschätzend / respektvoll", "appreciative / respectful"],
  ["freundlich", "zuvorkommend / entgegenkommend", "courteous / accommodating"],
  ["fair", "gerecht / transparent", "fair / transparent"],
  ["offen", "aufgeschlossen", "open-minded"],
  ["flexibel", "anpassungsfähig", "adaptable"],
  ["wichtig", "wesentlich / entscheidend", "essential / crucial"],
  ["sicher", "zuverlässig / beständig", "reliable / consistent"],
  ["hilfsbereit", "unterstützend", "supportive"],
  ["ehrlich", "aufrichtig", "sincere"],
  ["verständnisvoll", "einfühlsam", "understanding / empathetic"],
  ["motiviert", "engagiert", "committed"],
  ["modern", "zeitgemäß", "modern / up-to-date"],
  ["selbstständig", "eigenverantwortlich", "independent / self-responsible"],
  ["klar", "eindeutig", "clear / unambiguous"],
  ["ruhig", "gelassen", "calm"],
  ["gerecht", "gleichberechtigt", "equal / equitable"],
  ["zufrieden", "motiviert / ausgeglichen", "motivated / balanced"],
].map(([b1, german, english]) => ({
  b1,
  german,
  english,
  example: "",
  pos: "adjective",
}));

export const THEMA1_ADJECTIVES_SET_ID = "thema-1-adjectives";

export function getThema1AdjectivesSet(): StudySet {
  return {
    id: THEMA1_ADJECTIVES_SET_ID,
    name: "Thema 1 - Ein guter Arbeitgeber (Adj)",
    createdAt: 0,
    sourceImageCount: 0,
    words: RAW_WORDS.map((word, index) => ({
      id: `${THEMA1_ADJECTIVES_SET_ID}-${index}`,
      ...word,
    })),
    masteredWordIds: [],
  };
}