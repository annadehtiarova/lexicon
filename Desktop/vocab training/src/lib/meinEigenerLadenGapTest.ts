import { getMeinEigenerLadenSet } from "@/lib/meinEigenerLadenData";

interface GapPrompt {
  sentence: string;
  translation: string;
  answer: string;
  displayAnswers?: string[];
  sourceIndex?: number;
}

const PROMPTS: GapPrompt[] = [
  { sentence: "An der Ecke gibt es einen kleinen ______, der bis spät abends geöffnet ist.", translation: "There is a small kiosk on the corner that stays open until late in the evening.", answer: "Kiosk" },
  { sentence: "Unser ______ bringt jeden Morgen frische Lebensmittel.", translation: "Our supplier delivers fresh food every morning.", answer: "Lieferant" },
  { sentence: "Viele Kunden kaufen ______, weil sie lange haltbar ist.", translation: "Many customers buy frozen food because it keeps for a long time.", answer: "Tiefkühlkost" },
  { sentence: "Der Supermarkt kann die Bestellung noch heute ______.", translation: "The supermarket can deliver the order today.", answer: "liefern" },
  { sentence: "Der Kioskbesitzer möchte sein ______ erweitern.", translation: "The kiosk owner wants to expand his range of goods.", answer: "Warenangebot" },
  { sentence: "Die ______ des Geschäfts stehen an der Eingangstür.", translation: "The shop's opening hours are displayed on the entrance door.", answer: "Öffnungszeiten" },
  { sentence: "Dieser kleine Laden ist ______ geöffnet.", translation: "This small shop is open around the clock.", answer: "rund um die Uhr" },
  { sentence: "In diesem Geschäft gibt es eine große ______ an Getränken.", translation: "There is a wide selection of drinks in this shop.", answer: "Auswahl" },
  { sentence: "Viele Menschen ______ Produkte, die gerade im Trend liegen.", translation: "Many people desire products that are currently fashionable.", answer: "begehren" },
  { sentence: "Ich muss nach der Arbeit noch eine wichtige ______ machen.", translation: "I still have an important errand to run after work.", answer: "Besorgung" },
  { sentence: "Ein ______ hat uns den Weg zum Bahnhof erklärt.", translation: "A local resident explained the way to the train station to us.", answer: "Einheimischer" },
  { sentence: "Die Kollegen arbeiten gut ______ und unterstützen sich gegenseitig.", translation: "The colleagues work well with one another and support each other.", answer: "miteinander" },
  { sentence: "Nach einem langen Arbeitstag freue ich mich auf mein ______.", translation: "After a long working day, I look forward to returning home.", answer: "Zuhause" },
  { sentence: "Meine Chefin hat immer ______, wenn ich ein Problem habe.", translation: "My boss is always willing to listen to me when I have a problem.", answer: "ein offenes Ohr" },
  { sentence: "Die ______ eines neuen Lieferanten hat unsere Kosten gesenkt.", translation: "The discovery of a new supplier has reduced our costs.", answer: "Entdeckung" },
  { sentence: "Wenn ich morgens zu spät aufstehe, muss ich zur Arbeit ______.", translation: "When I get up late in the morning, I have to rush to work.", answer: "hetzen" },
  { sentence: "Sie arbeitet ______ als Grafikdesignerin für verschiedene Kunden.", translation: "She works freelance as a graphic designer for various clients.", answer: "freiberuflich" },
  { sentence: "Ich muss mir meine Zeit gut ______, damit ich alle Aufgaben erledigen kann.", translation: "I need to organize my time well so that I can complete all my tasks.", answer: "einteilen" },
  { sentence: "Der Kunde hat uns einen neuen ______ erteilt.", translation: "The customer has given us a new order.", answer: "Auftrag" },
  { sentence: "Ich habe ______ einen ehemaligen Kollegen im Supermarkt getroffen.", translation: "I met a former colleague by chance at the supermarket.", answer: "zufällig" },
  { sentence: "Dank ______ kann ich selbst entscheiden, wann ich mit der Arbeit beginne.", translation: "Thanks to flexitime, I can decide for myself when to start work.", answer: "Gleitzeit" },
  { sentence: "Im Krankenhaus gehört ______ zum normalen Arbeitsalltag.", translation: "In the hospital, shift work is part of everyday working life.", answer: "Schichtdienst" },
  { sentence: "Wer trägt die ______ für diesen Fehler?", translation: "Who is to blame for this mistake?", answer: "Schuld" },
  { sentence: "Er konnte nichts dafür. ______", translation: "He could not do anything about it. It is not his fault.", answer: "Das ist nicht seine Schuld." },
  { sentence: "Nach ______ gehe ich meistens noch eine Runde spazieren.", translation: "After the end of the working day, I usually go for a walk.", answer: "Feierabend" },
  { sentence: "Morgen muss ich die ______ übernehmen und um fünf Uhr aufstehen.", translation: "Tomorrow I have to work the early shift and get up at five.", answer: "Frühschicht" },
  { sentence: "Der ______ kennt viele seiner Stammkunden persönlich.", translation: "The kiosk owner knows many of his regular customers personally.", answer: "Kioskbesitzer" },
  { sentence: "Wegen der ______ komme ich heute erst gegen Mitternacht nach Hause.", translation: "Because of the late shift, I will not get home until around midnight.", answer: "Spätschicht" },
  { sentence: "Die Journalistin arbeitet in der ______ einer großen Zeitung.", translation: "The journalist works in the editorial office of a major newspaper.", answer: "Redaktion" },
  { sentence: "Am Samstag muss ich in der Stadt einige ______.", translation: "On Saturday, I need to run some errands in town.", answer: "Besorgungen machen" },
  { sentence: "Seit zehn Jahren möchte er ______ und von seinem Geschäft leben.", translation: "He has wanted to run a kiosk and make a living from his business for ten years.", answer: "einen Kiosk betreiben" },
  { sentence: "Die ______ muss sorgfältig erledigt werden, damit alle Einnahmen und Ausgaben dokumentiert sind.", translation: "The bookkeeping must be done carefully so that all income and expenses are documented.", answer: "Buchführung" },
  { sentence: "Bevor sie das Geschäft eröffnet, muss sie den ______ unterschreiben.", translation: "Before opening the business, she has to sign the lease agreement.", answer: "Pachtvertrag" },
  { sentence: "Der Laden erweitert sein ______ um regionale Spezialitäten.", translation: "The shop is expanding its product range to include regional specialties.", answer: "Sortiment" },
  { sentence: "Die ______ des Geschäfts ist ideal, weil es direkt am Bahnhof liegt.", translation: "The shop's location is ideal because it is right next to the train station.", answer: "Lage" },
  { sentence: "Vor der Gründung eines Unternehmens sollte man ______ bilden.", translation: "Before starting a business, one should build up financial reserves.", answer: "finanzielle Rücklagen" },
  { sentence: "Sie möchte im nächsten Jahr ein eigenes Café ______.", translation: "She wants to open her own café next year.", answer: "eröffnen" },
  { sentence: "Der ______ des Gebäudes plant eine umfassende Renovierung.", translation: "The owner of the building is planning an extensive renovation.", answer: "Besitzer" },
  { sentence: "Die Räume dürfen sowohl privat als auch ______ genutzt werden.", translation: "The premises may be used for both private and commercial purposes.", answer: "gewerblich" },
  { sentence: "Für unerwartete Reparaturen brauchen wir eine finanzielle ______.", translation: "We need a financial reserve for unexpected repairs.", answer: "Reserve" },
  { sentence: "Der Verkauf von Getränken ist eine wichtige ______ für den Kiosk.", translation: "The sale of drinks is an important source of revenue for the kiosk.", answer: "Einnahme" },
  { sentence: "Die Miete ist die größte monatliche ______ des Geschäfts.", translation: "Rent is the business's largest monthly expense.", answer: "Ausgabe" },
  { sentence: "Für die ______ ihrer Geschäftsidee benötigt sie einen guten Finanzplan.", translation: "She needs a good financial plan for the realization of her business idea.", answer: "Verwirklichung" },
  { sentence: "Kleine Geschäfte können ______ einer guten Lage ______.", translation: "Small businesses can benefit from a good location.", answer: "von profitieren", displayAnswers: ["von", "profitieren"] },
  { sentence: "Nach mehreren Jahren im Unternehmen möchte er ______ arbeiten.", translation: "After several years at the company, he wants to be self-employed.", answer: "selbstständig" },
  { sentence: "Für den Betrieb braucht sie eine geeignete ______.", translation: "She needs suitable insurance for the business.", answer: "Versicherung" },
  { sentence: "Im ______ lernt man, wie man einen Businessplan erstellt.", translation: "At the start-up seminar, you learn how to create a business plan.", answer: "Existenzgründerseminar" },
  { sentence: "Ihre ______ besteht darin, nachhaltige Produkte online zu verkaufen.", translation: "Her business idea is to sell sustainable products online.", answer: "Geschäftsidee" },
  { sentence: "Das Restaurant ist ein ______, das seit drei Generationen geführt wird.", translation: "The restaurant is a family business that has been run for three generations.", answer: "Familienbetrieb" },
  { sentence: "Der internationale ______ beschäftigt Tausende von Menschen.", translation: "The international corporation employs thousands of people.", answer: "Konzern" },
  { sentence: "Bei Fragen zur Arbeitszeit sollte man sich an den ______ wenden.", translation: "For questions about working hours, you should contact your supervisor.", answer: "Vorgesetzten" },
  { sentence: "Die ______ der neuen Waren verzögert sich wegen des schlechten Wetters.", translation: "The delivery of the new goods is delayed because of the bad weather.", answer: "Lieferung" },
  { sentence: "Für die ______ der Ware muss der Kunde ein Formular ausfüllen.", translation: "For the return shipment of the goods, the customer has to fill out a form.", answer: "Rücksendung" },
  { sentence: "Eine gute ______ sorgt dafür, dass die Waren pünktlich ankommen.", translation: "Good logistics ensure that the goods arrive on time.", answer: "Logistik" },
  { sentence: "Im Sommer steigt die ______ nach kalten Getränken.", translation: "In summer, demand for cold drinks increases.", answer: "Nachfrage" },
  { sentence: "Wenn wir gut zusammenarbeiten, wird der Plan bestimmt ______.", translation: "If we work well together, the plan will certainly work out.", answer: "klappen" },
  { sentence: "Wegen hoher Schulden konnte die Firma eine ______ nicht vermeiden.", translation: "Because of high debts, the company could not avoid bankruptcy.", answer: "Pleite" },
  { sentence: "Ohne genügend Kunden kann ein kleines Geschäft schnell ______.", translation: "Without enough customers, a small business can quickly go bankrupt.", answer: "pleitegehen" },
  { sentence: "Um das Geschäft zu finanzieren, musste sie einen ______ beantragen.", translation: "To finance the business, she had to apply for a loan.", answer: "Kredit" },
  { sentence: "Bevor sie ein größeres Geschäft eröffnet, muss sie möglicherweise ______.", translation: "Before opening a larger shop, she may have to take out a loan.", answer: "einen Kredit aufnehmen" },
  { sentence: "Nach dem gescheiterten Geschäft war er sehr ______.", translation: "After the business failed, he was very dejected.", answer: "niedergeschlagen" },
  { sentence: "Sie möchte gemeinsam mit ihrer Schwester ein Unternehmen ______.", translation: "She wants to found a company together with her sister.", answer: "gründen" },
  { sentence: "Für die Eröffnung des Ladens suchen wir eine geeignete ______.", translation: "We are looking for suitable commercial space to open the shop.", answer: "Gewerbefläche" },
  { sentence: "Als ______ muss man viele Entscheidungen selbst treffen.", translation: "As an entrepreneur, you have to make many decisions yourself.", answer: "Existenzgründer" },
  { sentence: "Wir haben einen ______ Mietvertrag für das Geschäft gefunden.", translation: "We found a favorable rental agreement for the business.", answer: "günstigen" },
  { sentence: "Die Stadt bietet einen ______ für bestimmte Existenzgründer an.", translation: "The city offers a grant to certain entrepreneurs.", answer: "Zuschuss" },
  { sentence: "Der neue ______ zeigt, wer am Wochenende arbeiten muss.", translation: "The new work schedule shows who has to work at the weekend.", answer: "Dienstplan" },
  { sentence: "Ab nächsten Monat werde ich die Verantwortung für die Buchführung ______.", translation: "Starting next month, I will take over responsibility for the bookkeeping.", answer: "übernehmen" },
  { sentence: "Alle Mitarbeiter müssen die vereinbarten Arbeitszeiten ______.", translation: "All employees must comply with the agreed working hours.", answer: "einhalten" },
  { sentence: "______ darf ich heute eine Stunde früher Feierabend machen.", translation: "Exceptionally, I am allowed to finish work an hour earlier today.", answer: "Ausnahmsweise" },
  { sentence: "Unter diesen ______ können wir den Auftrag nicht rechtzeitig erledigen.", translation: "Under these circumstances, we cannot complete the assignment on time.", answer: "Umständen" },
  { sentence: "Kannst du mir bitte die schwere Kiste ______?", translation: "Could you please take the heavy box off my hands?", answer: "abnehmen" },
  { sentence: "Welche Abteilung ist für die Bestellung ______?", translation: "Which department is responsible for the order?", answer: "zuständig" },
  { sentence: "Wir müssen diese ______ Bestellung noch heute bearbeiten.", translation: "We must process this urgent order today.", answer: "dringende" },
  { sentence: "Die Waren werden in einem großen ______ geliefert.", translation: "The goods are delivered in a large cardboard box.", answer: "Karton" },
  { sentence: "Bevor wir anfangen, müssen wir den ______ genau lesen.", translation: "Before we begin, we must read the work assignment carefully.", answer: "Arbeitsauftrag" },
  { sentence: "Wenn die Chefin nicht da ist, muss ich ______.", translation: "When the boss is not here, I have to answer the phone.", answer: "das Telefon abnehmen" },
  { sentence: "Weil die Getränke fast ausverkauft sind, müssen wir eine ______ aufgeben.", translation: "Because the drinks are almost sold out, we have to place a reorder.", answer: "Nachbestellung" },
  { sentence: "Die neuen ______ hängen gut sichtbar an der Tür.", translation: "The new opening hours are displayed clearly on the door.", answer: "Öffnungszeiten", sourceIndex: 5 },
  { sentence: "Bevor er Geld investiert, möchte er seine ______ mit anderen besprechen.", translation: "Before investing money, he wants to discuss his business idea with others.", answer: "Geschäftsidee", sourceIndex: 47 },
  { sentence: "Ich kann am Samstag nicht arbeiten, weil mein ______ etwas anderes vorsieht.", translation: "I cannot work on Saturday because my work schedule says otherwise.", answer: "Dienstplan", sourceIndex: 66 },
  { sentence: "Wenn die ______ steigt, muss der Kiosk mehr Waren bestellen.", translation: "When demand increases, the kiosk has to order more goods.", answer: "Nachfrage", sourceIndex: 54 },
];

const REVIEW_WORD_INDEXES = [5, 46, 66, 54];
const sourceWords = getMeinEigenerLadenSet().words;
if (sourceWords.length !== 78 || PROMPTS.length !== 82) {
  throw new Error(`Kapitel 2 gap test requires 78 source words and 82 prompts; got ${sourceWords.length} words and ${PROMPTS.length} prompts.`);
}

export const MEIN_EIGENER_LADEN_GAP_TEST = PROMPTS.map((prompt, index) => {
  const { sourceIndex, ...question } = prompt;
  const mappedSourceIndex = sourceIndex ?? (index >= 78 ? REVIEW_WORD_INDEXES[index - 78] : index);
  return { ...question, wordId: sourceWords[mappedSourceIndex].id };
});

export const MEIN_EIGENER_LADEN_GAP_WORD_IDS = new Set(
  MEIN_EIGENER_LADEN_GAP_TEST.map((question) => question.wordId),
);