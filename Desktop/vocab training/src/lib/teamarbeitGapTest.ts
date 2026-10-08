import { getTeamarbeitSet } from "@/lib/teamarbeitData";

export interface GapTestQuestion {
  sentence: string;
  translation: string;
  answer: string;
  wordId: string;
}

const PROMPTS: Omit<GapTestQuestion, "wordId">[] = [
  {
    sentence: "Unser ______ beginnt normalerweise um 8 Uhr und endet um 17 Uhr.",
    translation: "Our working day normally begins at 8 a.m. and ends at 5 p.m.",
    answer: "Arbeitstag",
  },
  {
    sentence: "Für die Firmenfeier haben wir einen ______ beauftragt.",
    translation: "For the company party, we hired a party service.",
    answer: "Partyservice",
  },
  {
    sentence: "Die ______ unserer Teamleiterin war für alle sehr wichtig.",
    translation: "Our team leader’s statement was very important to everyone.",
    answer: "Aussage",
  },
  {
    sentence: "Ich habe gestern einen interessanten ______ über moderne Teamarbeit gelesen.",
    translation: "Yesterday I read an interesting article about modern teamwork.",
    answer: "Artikel",
  },
  {
    sentence: "In diesem ______ des Berichts geht es um die Kommunikation im Team.",
    translation: "This section of the report is about communication within the team.",
    answer: "Abschnitt",
  },
  {
    sentence: "Frau Müller wird ab nächstem Monat unser neues Projekt ______.",
    translation: "Starting next month, Ms. Müller will lead our new project.",
    answer: "führen",
  },
  {
    sentence: "Bitte ______ Sie Ihre Kolleginnen über die Änderung des Termins.",
    translation: "Please inform your female colleagues about the change of date.",
    answer: "informieren",
  },
  {
    sentence: "Meine ______ hat mir angeboten, mich bei der Präsentation zu unterstützen.",
    translation: "My female superior offered to support me with the presentation.",
    answer: "Vorgesetzte",
  },
  {
    sentence: "Bei vertraulichen Informationen ist besondere ______ notwendig.",
    translation: "Special caution is necessary when dealing with confidential information.",
    answer: "Vorsicht",
  },
  {
    sentence: "Im Büro gibt es ein ______, dass unser Unternehmen bald umzieht.",
    translation: "There is a rumor in the office that our company is going to move soon.",
    answer: "Gerücht",
  },
  {
    sentence: "Kannst du bitte die Unterlagen zum Meeting ______?",
    translation: "Could you please bring the documents to the meeting?",
    answer: "bringen",
  },
  {
    sentence: "Nach dem Wechsel in unserem Team kam wirklich ______ ins Unternehmen.",
    translation: "After the change in our team, there was really fresh air in the company.",
    answer: "frischer Wind",
  },
  {
    sentence: "Man sollte bei solchen Aussagen ______ sein und nicht sofort alles glauben.",
    translation: "You should be careful with statements like these and not immediately believe everything.",
    answer: "vorsichtig",
  },
  {
    sentence: "Konstruktive ______ kann uns helfen, unsere Arbeit zu verbessern.",
    translation: "Constructive criticism can help us improve our work.",
    answer: "Kritik",
  },
  {
    sentence: "Viele neue Mitarbeiter haben am Anfang ______, Fehler zu machen.",
    translation: "Many new employees are afraid of making mistakes at first.",
    answer: "Angst",
  },
  {
    sentence: "Wenn du einen ______ machst, solltest du ihn offen ansprechen.",
    translation: "If you make a mistake, you should address it openly.",
    answer: "Fehler",
  },
  {
    sentence: "Am ______ eines Projekts müssen die Aufgaben klar verteilt werden.",
    translation: "At the beginning of a project, the tasks have to be clearly divided.",
    answer: "Anfang",
  },
  {
    sentence: "Kannst du den Ball ______, bevor er auf den Boden fällt?",
    translation: "Can you catch the ball before it falls to the ground?",
    answer: "fangen",
  },
  {
    sentence: "Die ______ an diesem Projekt macht mir besonders viel Spaß.",
    translation: "The work on this project is particularly enjoyable for me.",
    answer: "Arbeit",
  },
  {
    sentence: "Vor dem Meeting brauchen wir noch eine kurze ______ über die Aufgabenverteilung.",
    translation: "Before the meeting, we still need a brief agreement about the division of tasks.",
    answer: "Absprache",
  },
  {
    sentence: "Seine Meinung war ziemlich ______, deshalb konnte er die Situation nicht objektiv beurteilen.",
    translation: "His opinion was quite biased, so he couldn't assess the situation objectively.",
    answer: "eingenommen",
  },
  {
    sentence: "Eine gute ______ ist die Grundlage für ein erfolgreiches Projekt.",
    translation: "Good cooperation is the foundation for a successful project.",
    answer: "Zusammenarbeit",
  },
  {
    sentence: "Bist du ______, dass diese Entscheidung richtig ist?",
    translation: "Are you sure that this decision is correct?",
    answer: "sicher",
  },
  {
    sentence: "Der wichtigste ______ für die Verzögerung war ein technisches Problem.",
    translation: "The main reason for the delay was a technical problem.",
    answer: "Grund",
  },
  {
    sentence: "Ihr ______ gegenüber den Kunden war sehr professionell.",
    translation: "Her behavior towards the customers was very professional.",
    answer: "Verhalten",
  },
  {
    sentence: "______ können wir das Problem gemeinsam lösen.",
    translation: "Maybe we can solve the problem together.",
    answer: "Vielleicht",
  },
  {
    sentence: "Wir wollen nächste Woche mit dem neuen Projekt ______.",
    translation: "We want to start the new project next week.",
    answer: "starten",
  },
  {
    sentence: "Der ______ hat entschieden, dass das Team länger arbeiten muss.",
    translation: "The superior decided that the team has to work longer.",
    answer: "Vorgesetzte",
  },
  {
    sentence: "Meine ______ hat mir gestern bei der Präsentation geholfen.",
    translation: "My female colleague helped me with the presentation yesterday.",
    answer: "Kollegin",
  },
  {
    sentence: "Ich habe einen konkreten ______ für die Verbesserung unseres Arbeitsablaufs.",
    translation: "I have a specific proposal for improvement for our workflow.",
    answer: "Verbesserungsvorschlag",
  },
  {
    sentence: "Wir müssen unseren Plan ______, weil sich die Situation verändert hat.",
    translation: "We have to change our plan because the situation has changed.",
    answer: "ändern",
  },
  {
    sentence: "Ich habe gehört, dass du eine neue Idee hast. Erzähl mir, ich möchte ______.",
    translation: "I heard that you have a new idea. Tell me about it; I want to hear about it.",
    answer: "hören",
  },
  {
    sentence: "Der ______ war mit unserer Beratung sehr zufrieden.",
    translation: "The customer was very satisfied with our consultation.",
    answer: "Kunde",
  },
  {
    sentence: "Morgen hält Anna eine ______ über das neue Computersystem.",
    translation: "Tomorrow Anna is giving a presentation about the new computer system.",
    answer: "Vorstellung",
  },
  {
    sentence: "Wenn etwas unklar ist, sollten Sie Ihre Vorgesetzte ______.",
    translation: "If something is unclear, you should ask your female superior.",
    answer: "fragen",
  },
  {
    sentence: "Unsere Chefin hat eine ______ an alle Mitarbeiter geschickt.",
    translation: "Our boss sent a circular email to all employees.",
    answer: "Rundmail",
  },
  {
    sentence: "Jedes ______ ist für einen bestimmten Aufgabenbereich verantwortlich.",
    translation: "Each team member is responsible for a specific area of work.",
    answer: "Teammitglied",
  },
  {
    sentence: "Es war mir sehr ______, vor allen Kollegen einen Fehler zu machen.",
    translation: "It was very embarrassing for me to make a mistake in front of all my colleagues.",
    answer: "peinlich",
  },
  {
    sentence: "Bitte ______ Sie am Ende des Gesprächs Ihre Kontaktdaten bei uns.",
    translation: "Please leave your contact details with us at the end of the conversation.",
    answer: "hinterlassen",
  },
  {
    sentence: "Die Atmosphäre im Büro ist sehr ______, deshalb können wir offen miteinander sprechen.",
    translation: "The atmosphere in the office is very casual, so we can speak openly with each other.",
    answer: "locker",
  },
  {
    sentence: "Ihr ______ war freundlich, obwohl sie mit der Entscheidung nicht einverstanden war.",
    translation: "Her tone was friendly, even though she disagreed with the decision.",
    answer: "Ton",
  },
  {
    sentence: "Für eine gute Zusammenarbeit sind Vertrauen und ______ besonders wichtig.",
    translation: "For good cooperation, trust and honesty are particularly important.",
    answer: "Ehrlichkeit",
  },
  {
    sentence: "In diesem ______ müssen wir besonders schnell reagieren.",
    translation: "In this case, we have to react particularly quickly.",
    answer: "Fall",
  },
  {
    sentence: "Wir sollten Fehler nicht ______, sondern gemeinsam nach Lösungen suchen.",
    translation: "We shouldn't cover up mistakes but should look for solutions together.",
    answer: "vertuschen",
  },
  {
    sentence: "Unsere Vereinbarung wurde leider ______.",
    translation: "Unfortunately, our agreement was misunderstood.",
    answer: "missverstanden",
  },
  {
    sentence: "Vor dem Gespräch mit der Chefin war ich ziemlich ______.",
    translation: "Before the conversation with the boss, I was quite uncertain.",
    answer: "unsicher",
  },
  {
    sentence: "Das ist ______ falsch. Wir müssen noch einmal darüber sprechen.",
    translation: "That is completely wrong. We need to discuss it again.",
    answer: "völlig",
  },
  {
    sentence: "Ich interessiere mich nicht für ______ über andere Kollegen.",
    translation: "I'm not interested in gossip about other colleagues.",
    answer: "Klatsch",
  },
  {
    sentence: "In der Pause gab es viel ______ über das neue Projekt.",
    translation: "During the break, there was a lot of chatter about the new project.",
    answer: "Tratsch",
  },
  {
    sentence: "Neue Mitarbeiter brauchen am Anfang oft viel ______ von ihrem Team.",
    translation: "New employees often need a lot of support from their team at first.",
    answer: "Unterstützung",
  },
  {
    sentence: "Wir müssen die alte Software durch ein moderneres System ______.",
    translation: "We have to replace the old software with a more modern system.",
    answer: "ersetzen",
  },
  {
    sentence: "Bevor wir anfangen, sollten wir die Dokumente nach Themen ______.",
    translation: "Before we start, we should organize the documents by topic.",
    answer: "ordnen",
  },
  {
    sentence: "Kein System ist ______, aber wir können die Zahl der Fehler reduzieren.",
    translation: "No system is flawless, but we can reduce the number of errors.",
    answer: "fehlerlos",
  },
  {
    sentence: "Danke für deinen ______. Ich werde darüber nachdenken.",
    translation: "Thank you for your advice. I will think about it.",
    answer: "Ratschlag",
  },
  {
    sentence: "Vielen Dank für Ihre ______ bei diesem Problem.",
    translation: "Thank you very much for your help with this problem.",
    answer: "Hilfe",
  },
  {
    sentence: "Wir haben eine klare ______ getroffen: Niemand arbeitet am Wochenende.",
    translation: "We made a clear arrangement: nobody works at the weekend.",
    answer: "Abmachung",
  },
  {
    sentence: "In meiner neuen Position habe ich viel ______ und telefoniere täglich mit Kunden.",
    translation: "In my new position, I have a lot of customer contact and speak to customers on the phone every day.",
    answer: "Kundenkontakt",
  },
  {
    sentence: "Es ist manchmal schwierig, seine Gefühle richtig ______.",
    translation: "It is sometimes difficult to express your feelings correctly.",
    answer: "ausdrücken",
  },
  {
    sentence: "Bitte ______ die wichtigsten Stellen im Text.",
    translation: "Please mark the most important parts of the text.",
    answer: "markieren",
  },
  {
    sentence: "Sie können am Ende des Formulars noch weitere Informationen ______.",
    translation: "You can add more information at the end of the form.",
    answer: "ergänzen",
  },
  {
    sentence: "Welche ______ soll das Formular haben: digital oder gedruckt?",
    translation: "What form should the document take: digital or printed?",
    answer: "Form",
  },
  {
    sentence: "Bei diesem Projekt liegt der ______ auf der Kommunikation mit den Kunden.",
    translation: "This project focuses on customer communication.",
    answer: "Fokus",
  },
  {
    sentence: "Wir müssen zuerst kleine Arbeitsgruppen ______.",
    translation: "First, we need to form small working groups.",
    answer: "bilden",
  },
  {
    sentence: "Die neue Mitarbeiterin war sehr ______ und hat alle freundlich begrüßt.",
    translation: "The new employee was very friendly and greeted everyone warmly.",
    answer: "freundlich",
  },
  {
    sentence: "Am ersten Arbeitstag sollten wir unsere neuen Kollegen persönlich ______.",
    translation: "On the first day of work, we should personally welcome our new colleagues.",
    answer: "begrüßen",
  },
  {
    sentence: "Unser ______ funktioniert seit heute Morgen nicht mehr.",
    translation: "Our computer system hasn't been working since this morning.",
    answer: "Computersystem",
  },
  {
    sentence: "Kannst du mir bitte ______, wie dieses Programm funktioniert?",
    translation: "Can you please explain to me how this program works?",
    answer: "erklären",
  },
  {
    sentence: "Vor der Entscheidung möchte ich eine professionelle ______ erhalten.",
    translation: "Before making the decision, I would like to receive professional consultation.",
    answer: "Beratung",
  },
  {
    sentence: "Ich möchte Sie um etwas Geduld ______.",
    translation: "I would like to ask you to be patient.",
    answer: "bitten",
  },
  {
    sentence: "Wegen des Urlaubs musste der ______ geändert werden.",
    translation: "Because of the vacation, the work schedule had to be changed.",
    answer: "Dienstplan",
  },
  {
    sentence: "Bei technischen Problemen können Sie sich an die ______ wenden.",
    translation: "For technical problems, you can contact the IT representative.",
    answer: "IT-Beauftragte",
  },
  {
    sentence: "Der Chef hat mir einen neuen ______ gegeben.",
    translation: "The boss gave me a new work assignment.",
    answer: "Arbeitsauftrag",
  },
  {
    sentence: "In der ______ treffen sich die Kollegen normalerweise in der Mittagspause.",
    translation: "The colleagues usually meet in the staff kitchen during their lunch break.",
    answer: "Teeküche",
  },
  {
    sentence: "Kannst du mir bitte ______, wo ich die Datei finde?",
    translation: "Can you please show me where I can find the file?",
    answer: "zeigen",
  },
  {
    sentence: "Die ______ möchte sich über unser Angebot informieren.",
    translation: "The female customer would like to find out more about our offer.",
    answer: "Kundin",
  },
  {
    sentence: "Der ______ kümmert sich um die Reparaturen im Gebäude.",
    translation: "The caretaker takes care of repairs in the building.",
    answer: "Hausmeister",
  },
  {
    sentence: "Alle Mitarbeiter müssen das ______ jeden Morgen benutzen.",
    translation: "All employees have to use the time recording system every morning.",
    answer: "Zeiterfassungssystem",
  },
  {
    sentence: "Die notwendigen Informationen wurden uns bereits ______.",
    translation: "The necessary information has already been given to us.",
    answer: "gegeben",
  },
  {
    sentence: "Darf ich Ihnen meine neue Kollegin ______?",
    translation: "May I introduce my new colleague to you?",
    answer: "vorstellen",
  },
  {
    sentence: "Bitte ______ Sie sich die wichtigsten Punkte während des Gesprächs.",
    translation: "Please note down the most important points during the conversation.",
    answer: "notieren",
  },
  {
    sentence: "Ich habe die wichtigsten Informationen in Form von ______ notiert.",
    translation: "I wrote down the most important information in the form of key points.",
    answer: "Stichpunkten",
  },
  {
    sentence: "Im Bewerbungsgespräch wurde ich nach meinem beruflichen ______ gefragt.",
    translation: "During the job interview, I was asked about my career path.",
    answer: "Werdegang",
  },
  {
    sentence: "Wir sollten die beiden Angebote miteinander ______.",
    translation: "We should compare the two offers.",
    answer: "vergleichen",
  },
  {
    sentence: "Bitte schreiben Sie im E-Mail-Feld einen eindeutigen ______.",
    translation: "Please enter a clear subject line in the email field.",
    answer: "Betreff",
  },
  {
    sentence: "Bei Fragen können Sie sich an unsere ______ wenden.",
    translation: "If you have any questions, you can contact our female contact person.",
    answer: "Ansprechpartnerin",
  },
  {
    sentence: "Der ______ liefert die bestellten Materialien jeden Montag.",
    translation: "The supplier delivers the ordered materials every Monday.",
    answer: "Lieferant",
  },
  {
    sentence: "Die ______ hat uns heute eine neue Preisliste geschickt.",
    translation: "The female supplier sent us a new price list today.",
    answer: "Lieferantin",
  },
  {
    sentence: "Ihre große ______ für Fotografie hat sie schließlich zu ihrem Beruf gemacht.",
    translation: "Her great passion for photography eventually led her to make it her profession.",
    answer: "Leidenschaft",
  },
  {
    sentence: "Wir müssen die Präsentation überarbeiten und ______ die Zahlen aktualisieren.",
    translation: "We need to revise the presentation and in addition update the figures.",
    answer: "außerdem",
  },
  {
    sentence: "Wenn alle ______ an einem Problem arbeiten, finden wir schneller eine Lösung.",
    translation: "If everyone works together on a problem, we will find a solution more quickly.",
    answer: "zusammen",
  },
  {
    sentence: "Nach ihrer ______ zur Restaurantfachfrau arbeitete sie mehrere Jahre in einem Café.",
    translation: "After her training as a restaurant specialist, she worked in a café for several years.",
    answer: "Ausbildung",
  },
  {
    sentence: "Die ______ kümmerte sich um die Gäste und organisierte die Bestellungen.",
    translation: "The restaurant specialist took care of the guests and organized the orders.",
    answer: "Restaurantfachfrau",
  },
  {
    sentence: "Nach der Arbeit treffen wir uns manchmal in einem kleinen ______.",
    translation: "After work, we sometimes meet in a small café.",
    answer: "Café",
  },
  {
    sentence: "Eine gute ______ ist besonders wichtig, wenn viele Menschen zusammenarbeiten.",
    translation: "Good organization is particularly important when many people work together.",
    answer: "Organisation",
  },
  {
    sentence: "Sie arbeitet seit drei Jahren in der ______ und kümmert sich um Rechnungen.",
    translation: "She has been working in accounting for three years and takes care of invoices.",
    answer: "Buchhaltung",
  },
  {
    sentence: "Ihre Hauptaufgabe ist die ______ mit unseren Geschäftskunden.",
    translation: "Her main task is customer communication with our business clients.",
    answer: "Kundenkommunikation",
  },
  {
    sentence: "In den ersten Wochen möchte ich meine neuen Kollegen besser ______.",
    translation: "During the first few weeks, I would like to get to know my new colleagues better.",
    answer: "kennenlernen",
  },
  {
    sentence: "Sie können selbst ______, an welchem Workshop Sie teilnehmen möchten.",
    translation: "You can choose which workshop you would like to attend.",
    answer: "wählen",
  },
  {
    sentence: "Ich muss heute noch mehrere Kundenanfragen ______.",
    translation: "I still have to process several customer inquiries today.",
    answer: "bearbeiten",
  },
  {
    sentence: "Die wichtigsten ______ finden Sie in der E-Mail.",
    translation: "You will find the most important information in the email.",
    answer: "Informationen",
  },
  {
    sentence: "Die ______ auf diesem Formular ist kaum zu lesen.",
    translation: "The writing on this form is almost impossible to read.",
    answer: "Schrift",
  },
  {
    sentence: "Jeder Mitarbeiter bekommt eine klare ______ für den Arbeitstag.",
    translation: "Every employee receives a clear task for the working day.",
    answer: "Aufgabe",
  },
  {
    sentence: "Normalerweise informiert die Führungskraft das Team; manchmal funktioniert es aber auch ______.",
    translation: "Normally, the manager informs the team, but sometimes it works the other way around.",
    answer: "umgekehrt",
  },
  {
    sentence: "Niemand sollte einen Mitarbeiter ______, etwas gegen seinen Willen zu tun.",
    translation: "Nobody should force an employee to do something against their will.",
    answer: "zwingen",
  },
  {
    sentence: "Nach zehn Stunden Arbeit fühlte sich die Mitarbeiterin völlig ______.",
    translation: "After ten hours of work, the employee felt completely overwhelmed.",
    answer: "überfordert",
  },
  {
    sentence: "Wegen des Personalmangels ist unser Team derzeit stark ______.",
    translation: "Because of the staff shortage, our team is currently overloaded with work.",
    answer: "überlastet",
  },
  {
    sentence: "Es ist ______, vor dem gesamten Team über persönliche Probleme zu sprechen.",
    translation: "It is unpleasant to talk about personal problems in front of the whole team.",
    answer: "unangenehm",
  },
  {
    sentence: "Er ist eher ______ und sagt seine Meinung nicht sofort.",
    translation: "He is rather reserved and does not immediately express his opinion.",
    answer: "zurückhaltend",
  },
  {
    sentence: "Vor ihrem ersten Vortrag war sie sehr ______.",
    translation: "She was very nervous before her first presentation.",
    answer: "aufgeregt",
  },
  {
    sentence: "Gute Führungskräfte sollten ihre Mitarbeiter regelmäßig ______.",
    translation: "Good managers should regularly praise their employees.",
    answer: "loben",
  },
  {
    sentence: "Unsere ______ Arbeitsweise wird gerade überprüft.",
    translation: "Our previous way of working is currently being reviewed.",
    answer: "bisherige",
  },
  {
    sentence: "Bitte ______ Sie uns rechtzeitig mit, wenn Sie nicht teilnehmen können.",
    translation: "Please let us know in good time if you cannot attend.",
    answer: "teilen",
  },
  {
    sentence: "Wir sollten die Situation ______ beurteilen und nicht nur eine Seite hören.",
    translation: "We should assess the situation without bias and not listen to only one side.",
    answer: "unvoreingenommen",
  },
  {
    sentence: "Der Kunde kann nicht von uns ______, dass wir die Arbeit innerhalb eines Tages erledigen.",
    translation: "The customer cannot demand that we complete the work within one day.",
    answer: "verlangen",
  },
  {
    sentence: "Wenn du beruflich weiterkommen willst, musst du dich kontinuierlich ______.",
    translation: "If you want to get ahead professionally, you have to make a continuous effort.",
    answer: "anstrengen",
  },
  {
    sentence: "Sie möchte im Unternehmen beruflich ______ und mehr Verantwortung übernehmen.",
    translation: "She wants to get ahead in the company and take on more responsibility.",
    answer: "weiterkommen",
  },
  {
    sentence: "Als Teamleiterin muss sie wichtige ______.",
    translation: "As a team leader, she has to make important decisions.",
    answer: "Entscheidungen treffen",
  },
  {
    sentence: "Man darf neue Mitarbeiter nicht gleich mit zu vielen Aufgaben ______.",
    translation: "You must not overwhelm new employees with too many tasks right away.",
    answer: "überhäufen",
  },
  {
    sentence: "Gute Führungskräfte sollten keine ______ gegenüber bestimmten Mitarbeitern haben.",
    translation: "Good managers should not have prejudices against certain employees.",
    answer: "Vorurteile",
  },
  {
    sentence: "Auch in stressigen Situationen sollte eine Führungskraft ______ bleiben.",
    translation: "Even in stressful situations, a manager should remain calm.",
    answer: "gelassen",
  },
  {
    sentence: "Eine klare Aufgabenverteilung kann viele Konflikte ______.",
    translation: "A clear division of tasks can prevent many conflicts.",
    answer: "verhindern",
  },
  {
    sentence: "Die Projektleiterin hat beschlossen, den neuen ______ an eine externe Firma zu ______.",
    translation: "The project manager decided to assign the new task to an external company.",
    answer: "Auftrag vergeben",
  },
  {
    sentence: "Die Teamleiterin muss die Leistung der Mitarbeitenden fair und objektiv ______.",
    translation: "The team leader has to assess the employees’ performance fairly and objectively.",
    answer: "beurteilen",
  },
  {
    sentence: "Durch die neue Software soll der ______ im Büro schneller und effizienter werden.",
    translation: "The new software is intended to make the workflow in the office faster and more efficient.",
    answer: "Arbeitsablauf",
  },
];

const sourceWords = getTeamarbeitSet().words;

export const TEAMARBEIT_GAP_TEST: GapTestQuestion[] = PROMPTS.flatMap((prompt, index) => {
  const word = sourceWords[index];
  return word ? [{ ...prompt, wordId: word.id }] : [];
});

export const TEAMARBEIT_GAP_WORD_IDS = new Set(
  TEAMARBEIT_GAP_TEST.map((prompt) => prompt.wordId),
);
