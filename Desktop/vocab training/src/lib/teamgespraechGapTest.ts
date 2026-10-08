import { getTeamgesprächSet } from "@/lib/teamgespraechData";

interface GapTestQuestion {
  sentence: string;
  translation: string;
  answer: string;
  wordId: string;
}

const PROMPTS: Omit<GapTestQuestion, "wordId">[] = [
  { sentence: "Morgen findet ein wichtiges ______ über die neuen Arbeitsabläufe statt.", translation: "Tomorrow there will be an important team meeting about the new workflows.", answer: "Teamgespräch" },
  { sentence: "Die Teamleiterin muss heute ein Gespräch mit einem unzufriedenen Kunden ______.", translation: "The team leader has to conduct a conversation with an unhappy customer today.", answer: "führen" },
  { sentence: "Der Zeitpunkt für die Besprechung ist leider sehr ______.", translation: "Unfortunately, the timing of the meeting is very unfavorable.", answer: "ungünstig" },
  { sentence: "Wir müssen diesen Konflikt gemeinsam ______.", translation: "We need to solve this conflict together.", answer: "lösen" },
  { sentence: "Die Zusammenarbeit im neuen Team funktioniert ______.", translation: "The cooperation in the new team is wonderful.", answer: "wunderbar" },
  { sentence: "Jeder Mitarbeiter darf seine ______ zu diesem Vorschlag äußern.", translation: "Every employee is allowed to express their opinion about this proposal.", answer: "Meinung" },
  { sentence: "Unser ______ hat die Ware heute Morgen geliefert.", translation: "Our supplier delivered the goods this morning.", answer: "Lieferant" },
  { sentence: "Der letzte ______ auf der Tagesordnung betrifft die Urlaubsplanung.", translation: "The last point on the agenda concerns vacation planning.", answer: "Punkt" },
  { sentence: "Deine ______ für die neue Website gefällt mir sehr gut.", translation: "I really like your idea for the new website.", answer: "Idee" },
  { sentence: "Ich glaube, dass diese Entscheidung ______ ist.", translation: "I think this decision is correct.", answer: "richtig" },
  { sentence: "Ich möchte sicherstellen, dass alle die neuen Regeln ______.", translation: "I want to make sure that everyone understands the new rules.", answer: "verstehen" },
  { sentence: "Dieses ______ können Sie verwenden, wenn Sie höflich widersprechen möchten.", translation: "You can use this phrase when you want to disagree politely.", answer: "Redemittel" },
  { sentence: "______ finden Sie eine Zusammenfassung der wichtigsten Punkte.", translation: "The following is a summary of the most important points.", answer: "Folgend" },
  { sentence: "Vor dem Teamgespräch sollten wir alle Vorschläge ______.", translation: "Before the team meeting, we should collect all the suggestions.", answer: "sammeln" },
  { sentence: "Wer möchte zu diesem Thema noch etwas sagen? Sie haben das ______.", translation: "Who would like to say something else about this topic? You have the floor.", answer: "Wort" },
  { sentence: "Wenn es ein Problem gibt, sollten Sie sich sofort bei der Teamleitung ______.", translation: "If there is a problem, you should report it to the team management immediately.", answer: "melden" },
  { sentence: "Bei einer sachlichen Diskussion sollten wir persönliche Angriffe ______.", translation: "During an objective discussion, we should avoid personal attacks.", answer: "meiden" },
  { sentence: "Wenn Sie die Aufgabe nicht verstanden haben, sollten Sie beim Kollegen ______.", translation: "If you did not understand the task, you should ask the colleague for clarification.", answer: "nachfragen" },
  { sentence: "Ich möchte ______, dass wir das Problem gemeinsam besprechen.", translation: "I would like to propose that we discuss the problem together.", answer: "vorschlagen" },
  { sentence: "Die meisten Teammitglieder ______ dem neuen Vorschlag zu.", translation: "Most team members agree with the new proposal.", answer: "stimmen" },
  { sentence: "Die Geschäftsleitung musste den Vorschlag aus finanziellen Gründen ______.", translation: "Management had to reject the proposal for financial reasons.", answer: "ablehnen" },
  { sentence: "In der Besprechung können alle Mitarbeitenden ihre Meinung ______.", translation: "In the meeting, all employees can express their opinion.", answer: "äußern" },
  { sentence: "Da unser erster Plan nicht machbar ist, brauchen wir einen ______.", translation: "Since our first plan is not feasible, we need an alternative proposal.", answer: "Alternativvorschlag" },
  { sentence: "______ Mitarbeitende haben noch Fragen zu der neuen Regelung.", translation: "Some employees still have questions about the new regulation.", answer: "Einige" },
  { sentence: "Wir müssen gemeinsam eine passende Lösung ______.", translation: "We have to choose a suitable solution together.", answer: "wählen" },
  { sentence: "Wir sollten die aktuelle ______ zunächst genau analysieren.", translation: "We should first analyze the current situation carefully.", answer: "Situation" },
  { sentence: "Ich mache mir während des Gesprächs eine kurze ______.", translation: "I will make a short note during the conversation.", answer: "Notiz" },
  { sentence: "Nach dem Gespräch erstellt die Protokollantin ein ______.", translation: "After the meeting, the minute-taker prepares a short summary.", answer: "Kurzprotokoll" },
  { sentence: "Jedes ______ des Teams kann einen Vorschlag machen.", translation: "Every member of the team can make a suggestion.", answer: "Mitglied" },
  { sentence: "Unser ______ organisiert jedes Jahr eine Vereinsmeisterschaft.", translation: "Our table tennis club organizes a club championship every year.", answer: "Tischtennisverein" },
  { sentence: "Der Lieferant hat die bestellte ______ pünktlich geliefert.", translation: "The supplier delivered the ordered goods on time.", answer: "Ware" },
  { sentence: "Am Samstag findet die ______ unseres Vereins statt.", translation: "Our club's championship takes place on Saturday.", answer: "Vereinsmeisterschaft" },
  { sentence: "Wir müssen für das Team eine gemeinsame Veranstaltung ______.", translation: "We need to organize an event for the team.", answer: "organisieren" },
  { sentence: "Wir arbeiten in einem ______ Team mit nur sechs Personen.", translation: "We work in a small team of only six people.", answer: "kleinen" },
  { sentence: "In der Mittagspause gehen wir zusammen zu einem kleinen ______.", translation: "During the lunch break, we go together to a small snack bar.", answer: "Imbiss" },
  { sentence: "Die Firma ist ein kleiner ______, der seit drei Generationen besteht.", translation: "The company is a small family business that has existed for three generations.", answer: "Familienbetrieb" },
  { sentence: "Wir sollten die Ergebnisse morgen im Team ______.", translation: "We should discuss the results in the team tomorrow.", answer: "besprechen" },
  { sentence: "Ich möchte Sie ______, mir die Unterlagen bis morgen zu schicken.", translation: "I would like to ask you to send me the documents by tomorrow.", answer: "bitten" },
  { sentence: "Für das ______ müssen wir einen Stand und Getränke organisieren.", translation: "For the street festival, we need to organize a stall and drinks.", answer: "Straßenfest" },
  { sentence: "Wegen des Festes wird die ______ am Samstag gesperrt.", translation: "Because of the festival, the street will be closed on Saturday.", answer: "Straße" },
  { sentence: "Wir sollten gemeinsam ______, welche Lösung am besten ist.", translation: "We should consider together which solution is best.", answer: "überlegen" },
  { sentence: "Der Vorschlag ist interessant, aber ______ für uns leider nicht machbar.", translation: "The proposal is interesting, but time-wise it is unfortunately not feasible for us.", answer: "zeitlich" },
  { sentence: "Vor der Veranstaltung müssen wir den gesamten ______ genau planen.", translation: "Before the event, we need to plan the entire procedure carefully.", answer: "Ablauf" },
  { sentence: "Unser Unternehmen möchte den Mitarbeitenden flexible Arbeitszeiten ______.", translation: "Our company wants to offer employees flexible working hours.", answer: "bieten" },
  { sentence: "Der neue ______ für die nächste Saison wird morgen veröffentlicht.", translation: "The new fixture list for the next season will be published tomorrow.", answer: "Spielplan" },
  { sentence: "Eine gute ______ ist wichtig für ein erfolgreiches Teamgespräch.", translation: "Good preparation is important for a successful team meeting.", answer: "Vorbereitung" },
  { sentence: "Ein Teil des ______ wird an den Verein gespendet.", translation: "Part of the profit will be donated to the club.", answer: "Gewinns" },
  { sentence: "Nach dem Turnier findet die ______ statt.", translation: "After the tournament, the award ceremony takes place.", answer: "Siegerehrung" },
  { sentence: "Für die Veranstaltung brauchen wir ______ zwei Aushilfskräfte.", translation: "For the event, we additionally need two temporary staff members.", answer: "zusätzlich" },
  { sentence: "Nach der erfolgreichen Veranstaltung plant das Team eine kleine ______.", translation: "After the successful event, the team is planning a small party.", answer: "Party" },
  { sentence: "Bitte stellen Sie für jedes Teammitglied ein ______ bereit.", translation: "Please provide a beverage for each team member.", answer: "Getränk" },
  { sentence: "Ich werde nach dem Gespräch das Protokoll ______.", translation: "I will write the minutes after the meeting.", answer: "schreiben" },
  { sentence: "Wir sollten nach einer Lösung suchen, die wir ______ umsetzen können.", translation: "We should look for a solution that we can implement together.", answer: "gemeinsam" },
  { sentence: "Nach der Sitzung schickt die Protokollantin das ______ an alle Teilnehmenden.", translation: "After the meeting, the minute-taker sends the minutes to all participants.", answer: "Protokoll" },
  { sentence: "Durch meine bisherige ______ kann ich das Problem schnell lösen.", translation: "Thanks to my previous experience, I can solve the problem quickly.", answer: "Erfahrung" },
  { sentence: "Jeder Mitarbeiter bekommt eine klare ______ für das Projekt.", translation: "Every employee gets a clear task for the project.", answer: "Aufgabe" },
  { sentence: "Der neue Vorschlag ______ mir besser als die ursprüngliche Idee.", translation: "I like the new proposal better than the original idea.", answer: "gefällt" },
  { sentence: "Im nächsten ______ wollen wir den Arbeitsablauf verbessern.", translation: "Next year, we want to improve the workflow.", answer: "Jahr" },
  { sentence: "Der ______ sucht derzeit neue Mitarbeitende für sein Team.", translation: "The care service is currently looking for new employees for its team.", answer: "Pflegedienst" },
  { sentence: "Wir treffen uns ______ montags zu einem kurzen Teamgespräch.", translation: "We usually meet on Mondays for a short team meeting.", answer: "meistens" },
  { sentence: "Eine wichtige ______ unseres Teams ist die gute Kommunikation.", translation: "An important strength of our team is good communication.", answer: "Stärke" },
  { sentence: "Die Teamleiterin versucht, bei einem Konflikt zwischen zwei Kollegen zu ______.", translation: "The team leader tries to mediate in a conflict between two colleagues.", answer: "vermitteln" },
  { sentence: "Wir müssen den ______ zwischen den beiden Abteilungen schnell lösen.", translation: "We need to resolve the conflict between the two departments quickly.", answer: "Konflikt" },
];

const sourceWords = getTeamgesprächSet().words;

export const TEAMGESPRÄCH_GAP_TEST: GapTestQuestion[] = PROMPTS.flatMap((prompt, index) => {
  const word = sourceWords[index];
  return word ? [{ ...prompt, wordId: word.id }] : [];
});

export const TEAMGESPRÄCH_GAP_WORD_IDS = new Set(
  TEAMGESPRÄCH_GAP_TEST.map((prompt) => prompt.wordId),
);