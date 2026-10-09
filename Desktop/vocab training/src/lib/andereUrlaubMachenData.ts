import { StudySet, VocabWord } from "./types";

const RAW_WORDS: [string, string, string, string][] = [
  ["cb6b3201-e4d1-457e-82e7-75789f20e7e0", "der Urlaubsort", "holiday resort", "noun"],
  ["d40f8c70-f6b5-413e-ae55-ac9aeae0a979", "das Porträt", "portrait", "noun"],
  ["dbe9a396-d33c-4aa9-ace6-fd5b14622983", "die Kinderanimateurin", "children's entertainer", "noun"],
  ["c20eec2c-54ef-43fd-96e8-5615565fa7f7", "aufwachsen", "to grow up", "verb"],
  ["164e3b65-af6e-4941-be3e-852005e88942", "der Bodensee", "Lake Constance", "noun"],
  ["e86cf715-f75d-4772-ad57-def42ab862cd", "die Rezeptionistin", "receptionist", "noun"],
  ["b6504623-9a04-488b-a8e0-661ced1b7784", "das Familienhotel", "family hotel", "noun"],
  ["20e066b7-425e-489c-987b-eeca88683cff", "die Rezeption", "reception", "noun"],
  ["b4aa76da-8918-4d54-a3c4-d3705cce7183", "die Visitenkarte", "business card", "noun"],
  ["1c540fff-22c2-4263-83c8-c47dcd8e20ba", "das Meer", "sea", "noun"],
  ["c8bdd90f-b897-4cc5-b42b-af55d20ec600", "die Betreuung", "support / care", "noun"],
  ["2ac2e3d1-208f-4643-97c4-7f029759743a", "zuständig", "responsible", "adjective"],
  ["f6b7c506-cad6-49a4-9ab5-5d270d35f029", "bieten", "to offer", "verb"],
  ["97ca8b83-ce6d-4d38-a67d-daeefcbe6632", "das Studium", "studies / degree", "noun"],
  ["27b26a81-152e-4b8b-b19e-36945ae9024b", "die Geschäftsleitung", "management", "noun"],
  ["a32c1d00-98a0-4e1b-adea-4db879260015", "das Kinderprogramm", "children's program", "noun"],
  ["4535d84f-eb66-4f5a-9b9b-930e63d87974", "der Stadtführer", "city guide", "noun"],
  ["d8e42c83-7416-4df1-b217-1b19a57e1c87", "basteln", "to craft", "verb"],
  ["47ad1496-21df-49d9-b43b-327aacb49568", "die Koordination", "coordination", "noun"],
  ["7c921208-cd78-460d-b610-fe6cbf1c4887", "der Motto-Tag", "theme day", "noun"],
  ["d57e6371-bf27-4e55-8679-d06b00866137", "der Piratentag", "pirate day", "noun"],
  ["4153860a-3a46-47b9-9355-ce0e04213e76", "die Stadtführung", "city tour", "noun"],
  ["6e06e572-f42f-4180-a97c-57426085619d", "der Indianertag", "Indian day", "noun"],
  ["dd56da8d-504e-4776-83fb-d2dad9bd65d2", "der Zirkustag", "circus day", "noun"],
  ["7955083a-604d-48e9-9d62-bc1aae00c487", "die Kreativität", "creativity", "noun"],
  ["1c4cd5e4-6649-4798-bd49-7aa5d4cbf7b8", "der Lauf", "run", "noun"],
  ["5f6f2881-eec1-4fe3-b0c1-c6dada28cbfb", "die Region", "region", "noun"],
  ["7fb2546b-dbf1-4c93-b363-99fb1342c1f1", "die Anerkennung", "recognition", "noun"],
  ["8403ed2d-8e6b-4c1a-8a4c-37e1f09862da", "ziemlich", "pretty / quite", "adverb"],
  ["65f6ac3c-36df-4b3c-9395-f80d23db8f1b", "die Gruppe", "group", "noun"],
  ["f754be77-5e2e-48fd-8f29-f87180fe20ac", "die Uhr", "clock / o'clock", "noun"],
  ["34521c30-0a90-45de-9823-7b7f033ab01a", "die Verfügung", "disposal", "noun"],
  ["886c39ce-0a58-4f96-aea1-ab3493b9bba1", "die Bühne", "stage", "noun"],
  ["ddf38b26-d9a7-452f-91c6-c13f4021f623", "der Hotelgast", "hotel guest", "noun"],
  ["39e71ace-17cc-41fb-9645-672315a5bcb4", "unterhalten", "to entertain / maintain", "verb"],
  ["0d0af2a7-51c5-4cdd-9133-b087c9cd60c6", "anspruchsvoll", "demanding", "adjective"],
  ["13b52c38-4aa0-4274-bf5f-8b55a95bd5c4", "das Grundgehalt", "basic salary", "noun"],
  ["d640073e-bd6d-435f-88f6-2d64ecf1b2b2", "die Tätigkeit", "activity", "noun"],
  ["292f2c6c-6830-404c-8b60-5c511d57f76d", "das Privatleben", "private life", "noun"],
  ["c59ae938-f825-4dcf-b239-b27d45ec061e", "das Einkommen", "income", "noun"],
  ["4b2653e6-8350-4e87-80b3-de591b6dd051", "aufstiegsorientiert", "career-oriented / upward-looking", "adjective"],
  ["621f20ca-f7e7-431a-8f8f-303210f0d98e", "diskutieren", "to discuss", "verb"],
  ["4c9d6bf3-e62e-488d-ae1a-371f03b0d87a", "die Arbeitsbedingung", "working condition", "noun"],
];

export const ANDERE_URLAUB_MACHEN_SET_ID = "04c4960f-1fbd-4ebf-9e38-eec9416737a0";
export const ANDERE_URLAUB_MACHEN_SET_NAME = "Kapitel 4 - Andere Urlaub machen";

export function getAndereUrlaubMachenSet(): StudySet {
  return {
    id: ANDERE_URLAUB_MACHEN_SET_ID,
    name: ANDERE_URLAUB_MACHEN_SET_NAME,
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