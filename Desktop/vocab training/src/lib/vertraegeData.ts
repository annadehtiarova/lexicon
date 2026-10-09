import { StudySet, VocabWord } from "./types";

const RAW_WORDS: [string, string, string, string][] = [
  ["4fa127a5-b583-4d28-b73d-d199e6acfa84", "der Vertrag", "contract", "noun"],
  ["80850206-dfa7-4c74-a246-601dbbfbdc06", "die Aussage", "statement", "noun"],
  ["136175cd-1cc1-4cdc-829c-e118e0df4042", "sowieso", "anyway", "adverb"],
  ["de65282c-8602-400d-92c7-bd7290e69467", "die Reiserücktrittsversicherung", "travel cancellation insurance", "noun"],
  ["86b783c0-fb69-481b-85e8-c1e6a1a9e6c1", "abschließen", "to complete / conclude", "verb"],
  ["6099d7e5-5fc5-4973-ab4f-d182edc7aaea", "die Versicherung", "insurance", "noun"],
  ["2d9bf6f9-04ac-4e00-ba3e-31087800de3f", "kosten", "to cost", "verb"],
  ["f1f00ae5-421f-4cfd-b99d-8ea1f2f00acc", "aufkommen", "to arise / come up", "verb"],
  ["8cb39003-c1c5-40b1-933d-d3248d802105", "allgemein", "general", "adjective"],
  ["e7166511-c17f-4a65-9cf1-8cab2db55960", "die Geschäftsbedingung", "terms and conditions", "noun"],
  ["af36ed73-bae8-4bbb-a4ad-ceaa8421891a", "stornieren", "to cancel", "verb"],
  ["55eadab9-c3ca-4f30-b763-de0d89b3948b", "der Veranstalter", "organizer", "noun"],
  ["66f39447-f2a6-45d1-967c-8c06ec123eee", "das Gepäck", "luggage", "noun"],
  ["67086ae3-89ed-45bd-a1f8-961888e305f7", "einsteigen", "to get in / board", "verb"],
  ["139095b4-63fd-4579-821f-9bd23cffb09f", "verpassen", "to miss", "verb"],
  ["a51a4010-e89a-4113-abf7-545682cfcc4f", "das Kilo", "kilogram", "noun"],
  ["beef6ec1-5900-46fb-b7dd-969b239b734f", "zunehmen", "to increase / gain weight", "verb"],
  ["e9b401e9-f204-4a42-bed4-058cc5fbc29a", "ankommen", "to arrive", "verb"],
  ["29ee6eba-a977-4aea-8e0d-bca9310df2b5", "der Abflug", "departure", "noun"],
  ["d5182fc3-39a7-4b14-972f-63b636ee03ee", "die Werkstatt", "workshop", "noun"],
  ["2ddfa217-274b-4f8a-9dc2-4283ec3ac554", "offen", "open", "adjective"],
];

export const VERTRAEGE_SET_ID = "06cdd527-9806-4e43-b7f4-80f4dd557cac";
export const VERTRAEGE_SET_NAME = "Kapitel 4 - Verträge";

export function getVertraegeSet(): StudySet {
  return {
    id: VERTRAEGE_SET_ID,
    name: VERTRAEGE_SET_NAME,
    createdAt: 0,
    sourceImageCount: 0,
    words: RAW_WORDS.map(([id, german, english, pos]) => ({
      id,
      german,
      english,
      pos,
      example: "",
    } satisfies VocabWord)),
    masteredWordIds: [],
  };
}