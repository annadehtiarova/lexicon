import { getProtokollSet } from "@/lib/protokollData";

interface GapTestQuestion {
  sentence: string;
  translation: string;
  answer: string;
  wordId: string;
}

const PROMPTS: Omit<GapTestQuestion, "wordId">[] = [
  {
    sentence: "Nach dem ______ schickt die Protokollantin die wichtigsten Punkte an alle Teammitglieder.",
    translation: "After the meeting minutes, the minute-taker sends the most important points to all team members.",
    answer: "Protokoll",
  },
  {
    sentence: "Wir führen heute ein ______, um die Probleme im Projekt zu besprechen.",
    translation: "Today we are having a team meeting to discuss the problems in the project.",
    answer: "Teamgespräch",
  },
  {
    sentence: "Der erste ______ auf der Tagesordnung betrifft die Urlaubsplanung.",
    translation: "The first agenda item concerns vacation planning.",
    answer: "Tagesordnungspunkt",
  },
  {
    sentence: "Wir müssen die ______ der Tagesordnungspunkte noch festlegen.",
    translation: "We still need to determine the order of the agenda items.",
    answer: "Reihenfolge",
  },
  {
    sentence: "Welchen ______ haben wir für das nächste Teamgespräch vereinbart?",
    translation: "What date did we agree on for the next team meeting?",
    answer: "Termin",
  },
  {
    sentence: "Die ______ für die neue Kampagne soll nächste Woche beginnen.",
    translation: "The advertising for the new campaign is supposed to start next week.",
    answer: "Werbung",
  },
  {
    sentence: "Für die Feier haben wir ein großes ______ bestellt.",
    translation: "For the celebration, we ordered a large wedding buffet.",
    answer: "Hochzeitsbuffet",
  },
  {
    sentence: "Nach der ______ stellte die Teamleiterin die neuen Mitarbeiter vor.",
    translation: "After the welcome, the team leader introduced the new employees.",
    answer: "Begrüßung",
  },
  {
    sentence: "Die ______ für den Sommer müssen wir frühzeitig organisieren.",
    translation: "We need to organize the vacation planning for the summer early.",
    answer: "Urlaubsplanung",
  },
  {
    sentence: "Ich habe alle Produkte bereits auf die ______ geschrieben.",
    translation: "I have already written all the products on the shopping list.",
    answer: "Einkaufsliste",
  },
  {
    sentence: "Kannst du bitte die Informationen für die Präsentation ______?",
    translation: "Can you please compile the information for the presentation?",
    answer: "zusammenstellen",
  },
  {
    sentence: "Der ______ steht vor dem Eingang und kontrolliert die Besucher.",
    translation: "The guard is standing at the entrance and checking the visitors.",
    answer: "Wächter",
  },
  {
    sentence: "Unsere ______ entwickelt gerade eine neue Kampagne für das Unternehmen.",
    translation: "Our advertising agency is currently developing a new campaign for the company.",
    answer: "Werbeagentur",
  },
  {
    sentence: "Die ______ des Kunden ist gestern bei uns eingegangen.",
    translation: "The customer's order arrived yesterday.",
    answer: "Bestellung",
  },
  {
    sentence: "Kannst du die Einladung heute noch an alle Kollegen ______?",
    translation: "Can you send out the invitation to all colleagues today?",
    answer: "rausschicken",
  },
  {
    sentence: "Die ______ bringt die Getränke und das Essen an den Tisch.",
    translation: "The service staff member brings the drinks and food to the table.",
    answer: "Servicekraft",
  },
  {
    sentence: "Wer soll die nächste Firmenfeier ______?",
    translation: "Who is going to organize the next company celebration?",
    answer: "organisieren",
  },
  {
    sentence: "In der ______ steht genau, wie das neue Programm funktioniert.",
    translation: "The instructions explain exactly how the new program works.",
    answer: "Anleitung",
  },
  {
    sentence: "Bitte füllen Sie die ______ im Text mit dem passenden Wort.",
    translation: "Please fill in the gap in the text with the appropriate word.",
    answer: "Lücke",
  },
  {
    sentence: "Während der Sitzung sollte jemand die wichtigsten Punkte ______.",
    translation: "During the meeting, someone should note down the most important points.",
    answer: "notieren",
  },
  {
    sentence: "Der ______ möchte am Montag über die Ergebnisse sprechen.",
    translation: "The boss wants to discuss the results on Monday.",
    answer: "Chef",
  },
  {
    sentence: "Die ______ der Sitzung beträgt ungefähr eine Stunde.",
    translation: "The duration of the meeting is approximately one hour.",
    answer: "Dauer",
  },
  {
    sentence: "Die nächste ______ findet am Freitag um 10 Uhr statt.",
    translation: "The next meeting will take place on Friday at 10 a.m.",
    answer: "Sitzung",
  },
  {
    sentence: "Jede ______ erhält eine Kopie des Protokolls.",
    translation: "Each participating person receives a copy of the minutes.",
    answer: "teilnehmende Person",
  },
  {
    sentence: "Die ______ eröffnet die Sitzung und stellt die Tagesordnung vor.",
    translation: "The chair of the meeting opens the session and presents the agenda.",
    answer: "Sitzungsleitung",
  },
  {
    sentence: "Der ______ schreibt während der Sitzung die wichtigsten Punkte auf.",
    translation: "The male minute-taker writes down the most important points during the meeting.",
    answer: "Protokollant",
  },
  {
    sentence: "Die ______ hat das Protokoll nach der Besprechung erstellt.",
    translation: "The female minute-taker prepared the minutes after the meeting.",
    answer: "Protokollantin",
  },
  {
    sentence: "Im ______ der Sitzung diskutierten wir ausführlich über das neue Projekt.",
    translation: "In the main part of the meeting, we discussed the new project in detail.",
    answer: "Hauptteil",
  },
  {
    sentence: "Am Ende der Sitzung haben wir ein klares ______ erreicht.",
    translation: "At the end of the meeting, we reached a clear result.",
    answer: "Ergebnis",
  },
  {
    sentence: "Die ______ über das neue Arbeitsmodell dauerte fast eine Stunde.",
    translation: "The discussion about the new working model lasted almost an hour.",
    answer: "Diskussion",
  },
  {
    sentence: "In einem Protokoll sollte man möglichst ______ schreiben.",
    translation: "In minutes, you should write as objectively / factually as possible.",
    answer: "sachlich",
  },
  {
    sentence: "Die Informationen werden ______ für interne Zwecke verwendet.",
    translation: "The information is used exclusively for internal purposes.",
    answer: "ausschließlich",
  },
  {
    sentence: "Ein Protokoll wird normalerweise im ______ geschrieben.",
    translation: "Minutes are normally written in the present tense.",
    answer: "Präsens",
  },
  {
    sentence: "Zum ______ der Sitzung bedankte sich die Teamleiterin bei allen Teilnehmern.",
    translation: "At the end of the meeting, the team leader thanked all participants.",
    answer: "Schluss",
  },
  {
    sentence: "Zum ______ für die gute Zusammenarbeit gab es am Ende noch eine kurze Rede.",
    translation: "As a thank-you for the good cooperation, there was a short speech at the end.",
    answer: "Dank",
  },
  {
    sentence: "Das ______ mit dem Kunden dauerte länger als geplant.",
    translation: "The conversation with the customer lasted longer than planned.",
    answer: "Gespräch",
  },
  {
    sentence: "Bei der Besprechung waren alle Teammitglieder ______.",
    translation: "All team members were present at the meeting.",
    answer: "anwesend",
  },
  {
    sentence: "Für die Firmenfeier wurde ein ______ beauftragt.",
    translation: "A party service was hired for the company celebration.",
    answer: "Partyservice",
  },
  {
    sentence: "Die ______ der Sitzung übernimmt heute Frau Müller.",
    translation: "Ms. Müller is taking over the management / chairing of the meeting today.",
    answer: "Leitung",
  },
  {
    sentence: "Unsere ______ hat in diesem Jahr viele neue Mitarbeiter eingestellt.",
    translation: "Our company hired many new employees this year.",
    answer: "Firma",
  },
  {
    sentence: "Das Büro bleibt während der Feiertage ______.",
    translation: "The office remains closed during the holidays.",
    answer: "geschlossen",
  },
  {
    sentence: "Während der ______ sind viele Kollegen nicht im Büro.",
    translation: "During the vacation period, many colleagues are not in the office.",
    answer: "Urlaubszeit",
  },
  {
    sentence: "Morgen wollen wir die neuen Vorschläge gemeinsam ______.",
    translation: "Tomorrow we want to discuss the new proposals together.",
    answer: "besprechen",
  },
  {
    sentence: "Wir haben die Aufgabe ______ erledigt.",
    translation: "We completed the task together.",
    answer: "zusammen",
  },
  {
    sentence: "Die nächste Besprechung findet ______ um 9 Uhr statt.",
    translation: "The next meeting will take place at 9 a.m. tomorrow.",
    answer: "morgen",
  },
  {
    sentence: "Kannst du mir den Entwurf bitte per E-Mail ______?",
    translation: "Can you please send me the draft by email?",
    answer: "schicken",
  },
  {
    sentence: "Ich habe bereits einen ersten ______ für die Präsentation erstellt.",
    translation: "I have already created a first draft for the presentation.",
    answer: "Entwurf",
  },
  {
    sentence: "Wir müssen unseren ______ aktualisieren, bevor die neue Kampagne startet.",
    translation: "We need to update our website / web presence before the new campaign starts.",
    answer: "Webauftritt",
  },
  {
    sentence: "Die nächste ______ mit dem Kunden findet am Dienstag statt.",
    translation: "The next meeting with the customer will take place on Tuesday.",
    answer: "Besprechung",
  },
  {
    sentence: "Für die Kampagne brauchen wir verschiedene ______.",
    translation: "For the campaign, we need different advertising materials.",
    answer: "Werbemittel",
  },
  {
    sentence: "Auf dem ______ standen verschiedene Salate, warme Gerichte und Desserts.",
    translation: "The buffet included various salads, hot dishes and desserts.",
    answer: "Buffet",
  },
  {
    sentence: "Die Angaben im Protokoll müssen möglichst ______ sein.",
    translation: "The information in the minutes must be as precise as possible.",
    answer: "präzise",
  },
  {
    sentence: "Ein Protokoll sollte möglichst ______ formuliert sein.",
    translation: "Minutes should be formulated as neutrally as possible.",
    answer: "neutral",
  },
  {
    sentence: "Im Team gibt es ein ______ über eine mögliche Umstrukturierung.",
    translation: "There is a rumor in the team about a possible restructuring.",
    answer: "Gerücht",
  },
  {
    sentence: "Wir haben die Präsentation ______ verschiedener Beispiele vorbereitet.",
    translation: "We prepared the presentation with the help of various examples.",
    answer: "mithilfe",
  },
  {
    sentence: "Für die neue Website müssen wir zuerst ______.",
    translation: "For the new website, we first need to create a draft.",
    answer: "einen Entwurf erstellen",
  },
  {
    sentence: "Wir haben einen ______ für die neue Werbekampagne entworfen.",
    translation: "We designed a flyer for the new advertising campaign.",
    answer: "Flyer",
  },
  {
    sentence: "Ich gebe Ihnen gerne meine ______, damit Sie mich kontaktieren können.",
    translation: "I will gladly give you my business card so that you can contact me.",
    answer: "Visitenkarte",
  },
  {
    sentence: "Während der Sommersaison brauchen wir zusätzliche ______.",
    translation: "During the summer season, we need additional temporary staff.",
    answer: "Aushilfskräfte",
  },
  {
    sentence: "In der ______ hat unser Café besonders viele Gäste.",
    translation: "During the summer season, our café has particularly many customers.",
    answer: "Sommersaison",
  },
  {
    sentence: "Im Teamgespräch möchte ich ein wichtiges Problem direkt ______.",
    translation: "In the team meeting, I would like to address an important problem directly.",
    answer: "ansprechen",
  },
  {
    sentence: "Die geplante ______ der Firma wird einige Veränderungen im Arbeitsablauf mit sich bringen.",
    translation: "The planned restructuring of the company will bring some changes to the workflow.",
    answer: "Umstrukturierung",
  },
  {
    sentence: "Der Vorschlag klingt interessant, aber wir müssen prüfen, ob er finanziell ______ ist.",
    translation: "The proposal sounds interesting, but we need to check whether it is financially feasible.",
    answer: "machbar",
  },
  {
    sentence: "______ an die Besprechung schicken wir das Protokoll an alle Mitarbeitenden.",
    translation: "Following the meeting, we will send the minutes to all employees.",
    answer: "Im Anschluss",
  },
  {
    sentence: "Die Umstrukturierung wird große ______ auf unseren Arbeitsablauf ______.",
    translation: "The restructuring will have a major impact on our workflow.",
    answer: "Auswirkungen haben",
  },
  {
    sentence: "Die ______ Situation im Unternehmen erfordert eine schnelle Entscheidung.",
    translation: "The current situation in the company requires a quick decision.",
    answer: "derzeitige",
  },
];

const sourceWords = getProtokollSet().words;

export const PROTOKOLL_GAP_TEST: GapTestQuestion[] = PROMPTS.flatMap((prompt, index) => {
  const word = sourceWords[index];
  return word ? [{ ...prompt, wordId: word.id }] : [];
});

export const PROTOKOLL_GAP_WORD_IDS = new Set(
  PROTOKOLL_GAP_TEST.map((prompt) => prompt.wordId),
);