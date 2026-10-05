import { WORD_BANK } from "@/lib/wordBank";
import { VocabWord } from "@/lib/types";

const KNOWN_NOUN_ARTICLES = new Map(
  WORD_BANK.filter((word) => word.pos === "noun").map((word) => {
    const match = word.german.match(/^(der|die|das)\s+(.+)$/i);

    return match
      ? [match[2].toLowerCase(), match[1].toLowerCase()]
      : [word.german.toLowerCase(), "die"];
  }),
);

const IRREGULAR_NOUN_ARTICLES = new Map(
  Object.entries({
    apfel: "der",
    baum: "der",
    berg: "der",
    brief: "der",
    computer: "der",
    film: "der",
    freund: "der",
    garten: "der",
    gedanke: "der",
    hafen: "der",
    kaffee: "der",
    kuchen: "der",
    monat: "der",
    name: "der",
    schlüssel: "der",
    schnee: "der",
    sommer: "der",
    staat: "der",
    stuhl: "der",
    tisch: "der",
    vater: "der",
    winter: "der",
    zeitpunkt: "der",
    zug: "der",
    arbeit: "die",
    blume: "die",
    farbe: "die",
    frage: "die",
    freundschaft: "die",
    geschichte: "die",
    hand: "die",
    idee: "die",
    karte: "die",
    katze: "die",
    kirche: "die",
    küche: "die",
    luft: "die",
    miete: "die",
    musik: "die",
    nacht: "die",
    reise: "die",
    schule: "die",
    sprache: "die",
    stadt: "die",
    straße: "die",
    sonne: "die",
    tür: "die",
    wohnung: "die",
    zeit: "die",
    auto: "das",
    auge: "das",
    bild: "das",
    buch: "das",
    essen: "das",
    fenster: "das",
    haus: "das",
    jahr: "das",
    kind: "das",
    land: "das",
    leben: "das",
    licht: "das",
    mädchen: "das",
    meer: "das",
    problem: "das",
    spiel: "das",
    wasser: "das",
    wetter: "das",
    wort: "das",
    zimmer: "das",
  }),
);

function inferNounArticle(noun: string): string {
  if (/(schaft|tum|werk|zeug|haus|zimmer|buch|land|recht|wesen)$/.test(noun))
    return "das";
  if (/(chen|lein|ment|um|ma|zeug)$/.test(noun)) return "das";
  if (
    /(ung|heit|keit|schaft|tion|tät|ik|ei|ie|ur|enz|anz|age|ade|ette|elle|ose|sis|itis)$/.test(
      noun,
    )
  )
    return "die";
  if (/(ismus|ling|or|us|ist|ant|ent|eur|är)$/.test(noun)) return "der";
  if (/e$/.test(noun)) return "die";
  return "der";
}

export function displayGerman(word: VocabWord): string {
  if (word.pos === "phrase") return word.german;
  if (word.pos !== "noun") return word.german.toLowerCase();

  const existingArticle = word.german.match(/^(der|die|das)\s+(.+)$/i);

  if (existingArticle) {
    const nounPhrase = existingArticle[2];
    const displayedNoun = nounPhrase.includes(" ")
      ? nounPhrase
      : `${nounPhrase.charAt(0).toUpperCase()}${nounPhrase.slice(1)}`;
    return `${existingArticle[1].toLowerCase()} ${displayedNoun}`;
  }

  const noun = word.german.toLowerCase();
  const article =
    KNOWN_NOUN_ARTICLES.get(noun) ??
    IRREGULAR_NOUN_ARTICLES.get(noun) ??
    inferNounArticle(noun);

  return `${article} ${word.german.charAt(0).toUpperCase()}${word.german.slice(1)}`;
}