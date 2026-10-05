import { StudySet, VocabWord } from "./types";

const RAW_WORDS: Omit<VocabWord, "id">[] = `die Teamrolle|team role|noun
die Einleitung|introduction|noun
funktionieren|to function|verb
jeder|each / everyone|pronoun
die Beschreibung|description|noun
die Rolle|role|noun
schließen|to close|verb
beschreiben|to describe|verb
die Gruppe|group|noun
die Summe|total|noun
der Teil|part|noun
das Beispiel|example|noun
die Schulung|training|noun
das Unternehmen|enterprise / business|noun
die Überraschung|surprise|noun
erzielen|to achieve|verb
das Ergebnis|result / amount|noun
erfolgreich|successful|adjective
aufteilen|to split / divide|verb
die Kompetenz|competence|noun
zusammenkommen|to come together|verb
die Aufgabe|task|noun
der Zufall|randomness / chance|noun
das Teammitglied|team member|noun
gegenseitig|mutually / each other|other
ergänzen|to add / complement|verb
folgend|following|adjective
der Macher|doer / mover|noun
konservativ|conservative|adjective
lieben|to love|verb
das Werkzeug|tool|noun
probieren|to try|verb
altbewährt|time-tested / old-proven|adjective
werfen|to throw|verb
die Rücksicht|consideration|noun
der Verlust|loss|noun
die Abwechslung|variety|noun
erhalten|to receive / maintain|verb
unterschiedlich|different / diverse|adjective
legen|to put / lay|verb
die Idee|idea|noun
die Handlung|action|noun
längerfristig|long-term|adjective
weisen|to point / show|verb
kombinieren|to combine|verb
das Risiko|risk|noun
festlegen|to set / determine|verb
die Aktivität|activity|noun
das Abenteuer|adventure|noun
die Natur|nature|noun
erleben|to experience|verb
ausprobieren|to try out|verb
sammeln|to collect|verb
das Tagebuch|diary|noun
schreiben|to write|verb
kennenlernen|to get to know|verb
der Verein|club / association|noun
reden|to talk / speak|verb
improvisieren|to improvise|verb
der Ort|place|noun
der Urlaub|holiday / vacation|noun
die Stärke|strength|noun
die Flexibilität|flexibility|noun
die Experimentierfreude|pleasure in experimenting|noun
die Mobilität|mobility|noun
die Sicherheit|security / safety|noun
die Ausdauer|perseverance / endurance|noun
die Treue|loyalty|noun
der Analytiker|analyst|noun
der Visionär|visionary|noun
bilden|to form|verb
der Gegenpol|counterpart / counterpole|noun
die Neuerung|innovation / change|noun
verstehen|to understand|verb
erproben|to test / try out|verb
die Tat|deed / action|noun
umsetzen|to implement|verb
die Möglichkeit|possibility|noun
systematisch|systematic|adjective
der Perfektionist|perfectionist|noun
das Faktenwissen|factual knowledge|noun
der Tellerrand|rim of the plate / horizon|noun
die Statistik|statistics|noun
das Motto|motto|noun
vertrauen|to trust / confidence|verb
hinausschauen|to look out|verb
allerdings|however|adverb
verlieren|to lose|verb
die Kontrolle|control|noun
die Realität|reality|noun
die formale Vorgabe|formal requirement|noun
eher|rather / more|adverb
der Kopfmensch|intellectual / head-driven person|noun
der Gefühlsmensch|emotional person|noun
ignorieren|to ignore|verb
die Software|software|noun
programmieren|to program|verb
das Ehrenamt|honorary office / voluntary work|noun
ausüben|to exercise / practice|verb
der Plan|plan|noun
entwickeln|to develop|verb
das Gesetz|law|noun
studieren|to study|verb
leiten|to lead / manage|verb
die Ordnung|order|noun
das Wissen|knowledge|noun
die Gerechtigkeit|justice / fairness|noun
die Neugier|curiosity|noun
die Innovation|innovation|noun
das Wachstum|growth|noun
ordnen|to order / arrange|verb
chaotisch|chaotic|adjective
vernünftig|reasonable / sensible|adjective
voreilig|precipitate / hasty|adjective
praktisch|practical|adjective
enthusiastisch|enthusiastic|adjective
provozierend|provocative|adjective
pessimistisch|pessimistic|adjective
optimistisch|optimistic|adjective
pünktlich|punctual|adjective
die Lieblingstante|favorite aunt|noun
das Altersheim|old-age home|noun
einrichten|to furnish / configure|verb
die Willkommensparty|welcome party|noun
das Heim|home|noun
die Rede|speech|noun
halten|to hold|verb
leben|to live|verb
der Chef|boss / chief|noun
reagieren|to react|verb
die Flussreise|river trip|noun
das Paddelboot|paddling boat|noun
entdecken|to discover|verb
die Äußerung|statement / remark|noun
erreichen|to reach|verb
besprechen|to discuss|verb
das Restaurant|restaurant|noun
das Krankenhaus|hospital|noun
das Kinderheim|children's home|noun
das Wochenendprogramm|weekend program|noun
die Lerngruppe|learning group|noun
die Prüfung|test / exam|noun
der Besuch|visit|noun
eröffnen|to open|verb
vorbereiten|to prepare|verb`.split("\n").map((row) => {
  const [german, english, pos] = row.split("|");
  return { german, english, pos, example: "" };
});

export const TEAMROLLE_SET_ID = "f59c7fc1-cf10-4cd9-8c2c-3255bcdc49f6";
export const TEAMROLLE_SET_NAME = "Kapitel 3 - Teamrolle";

export function getTeamrolleSet(): StudySet {
  return {
    id: TEAMROLLE_SET_ID,
    name: TEAMROLLE_SET_NAME,
    createdAt: 0,
    sourceImageCount: 1,
    words: RAW_WORDS.map((word, index) => ({ id: `${TEAMROLLE_SET_ID}-${index}`, ...word })),
    masteredWordIds: [],
  };
}
