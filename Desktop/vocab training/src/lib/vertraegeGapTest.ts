import { getVertraegeSet } from "@/lib/vertraegeData";

interface GapTestQuestion {
  sentence: string;
  translation: string;
  answer: string;
  wordId: string;
}

const PROMPTS = [
  { word: "der Vertrag", sentence: "Bevor Sie die Reise buchen, sollten Sie den ______ sorgfältig lesen.", translation: "Before booking the trip, you should read the contract carefully.", answer: "Vertrag" },
  { word: "die Aussage", sentence: "Die ______ des Reiseveranstalters war nicht ganz klar.", translation: "The statement made by the tour operator was not entirely clear.", answer: "Aussage" },
  { word: "sowieso", sentence: "Ich wollte ______ im Sommer nach Griechenland reisen.", translation: "I wanted to travel to Greece in the summer anyway.", answer: "sowieso" },
  { word: "die Reiserücktrittsversicherung", sentence: "Mit einer ______ können Sie sich gegen bestimmte Kosten bei einer Stornierung absichern.", translation: "With travel cancellation insurance, you can protect yourself against certain cancellation costs.", answer: "Reiserücktrittsversicherung" },
  { word: "abschließen", sentence: "Vor der Abreise möchte ich eine Reiserücktrittsversicherung ______.", translation: "Before departure, I would like to take out travel cancellation insurance.", answer: "abschließen" },
  { word: "die Versicherung", sentence: "Die ______ übernimmt die Kosten, wenn die Bedingungen des Vertrags erfüllt sind.", translation: "The insurance covers the costs if the terms of the contract are met.", answer: "Versicherung" },
  { word: "kosten", sentence: "Wie viel ______ der Flug nach Spanien?", translation: "How much does the flight to Spain cost?", answer: "kostet" },
  { word: "aufkommen", sentence: "Während der Reise können unerwartete Probleme ______.", translation: "Unexpected problems can arise during the trip.", answer: "aufkommen" },
  { word: "allgemein", sentence: "Die ______ Geschäftsbedingungen gelten für alle Kunden.", translation: "The general terms and conditions apply to all customers.", answer: "allgemeinen" },
  { word: "die Geschäftsbedingung", sentence: "Bitte lesen Sie die ______ des Reiseveranstalters, bevor Sie den Vertrag unterschreiben.", translation: "Please read the tour operator's terms and conditions before signing the contract.", answer: "Geschäftsbedingungen" },
  { word: "stornieren", sentence: "Wenn ich krank werde, muss ich möglicherweise meine Reise ______.", translation: "If I get sick, I may have to cancel my trip.", answer: "stornieren" },
  { word: "der Veranstalter", sentence: "Der ______ ist für die Organisation der Pauschalreise verantwortlich.", translation: "The organizer is responsible for arranging the package holiday.", answer: "Veranstalter" },
  { word: "das Gepäck", sentence: "Mein ______ ist zu schwer, deshalb muss ich einige Dinge zu Hause lassen.", translation: "My luggage is too heavy, so I have to leave some things at home.", answer: "Gepäck" },
  { word: "einsteigen", sentence: "Die Passagiere können jetzt in den Zug ______.", translation: "Passengers can now board the train.", answer: "einsteigen" },
  { word: "verpassen", sentence: "Wir müssen früh losfahren, damit wir unseren Flug nicht ______.", translation: "We have to leave early so that we don't miss our flight.", answer: "verpassen" },
  { word: "das Kilo", sentence: "Mein Koffer wiegt 23 ______.", translation: "My suitcase weighs 23 kilograms.", answer: "Kilo" },
  { word: "zunehmen", sentence: "Wenn man im Urlaub jeden Tag zu viel isst, kann man leicht ______.", translation: "If you eat too much every day on vacation, you can easily gain weight.", answer: "zunehmen" },
  { word: "ankommen", sentence: "Unser Flug soll morgen um 14 Uhr in Berlin ______.", translation: "Our flight is scheduled to arrive in Berlin at 2 p.m. tomorrow.", answer: "ankommen" },
  { word: "der Abflug", sentence: "Der ______ unseres Fluges wurde wegen des schlechten Wetters verschoben.", translation: "Our flight's departure was delayed because of the bad weather.", answer: "Abflug" },
  { word: "die Werkstatt", sentence: "Unser Auto musste vor der Reise in die ______, weil der Motor nicht richtig funktionierte.", translation: "Our car had to go to the repair shop before the trip because the engine wasn't working properly.", answer: "Werkstatt" },
  { word: "offen", sentence: "Obwohl es schon spät ist, ist der Hotelschalter noch ______.", translation: "Although it is already late, the hotel reception desk is still open.", answer: "offen" },
] satisfies (Omit<GapTestQuestion, "wordId"> & { word: string })[];

const sourceWords = getVertraegeSet().words;
const wordsByGerman = new Map(sourceWords.map((word) => [word.german.toLowerCase(), word]));

export const VERTRAEGE_GAP_TEST: GapTestQuestion[] = PROMPTS.map((prompt) => {
  const word = wordsByGerman.get(prompt.word.toLowerCase());
  if (!word) throw new Error(`No Verträge vocabulary word found for: ${prompt.word}`);
  return { ...prompt, wordId: word.id };
});

export const VERTRAEGE_GAP_WORD_IDS = new Set(
  VERTRAEGE_GAP_TEST.map((prompt) => prompt.wordId),
);