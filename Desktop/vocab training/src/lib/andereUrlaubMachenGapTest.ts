import { getAndereUrlaubMachenSet } from "@/lib/andereUrlaubMachenData";

interface GapTestQuestion {
  sentence: string;
  translation: string;
  answer: string;
  wordId: string;
}

const PROMPTS = [
  { word: "der Urlaubsort", sentence: "Unser ______ liegt direkt am Meer und bietet viele Freizeitaktivitäten.", translation: "Our holiday destination is located directly by the sea and offers many leisure activities.", answer: "Urlaubsort" },
  { word: "das Porträt", sentence: "In der Broschüre finden Sie ein ______ der neuen Hotelmanagerin.", translation: "In the brochure, you will find a portrait of the new hotel manager.", answer: "Porträt" },
  { word: "die Kinderanimateurin", sentence: "Die ______ organisiert jeden Tag Spiele und Aktivitäten für die kleinen Hotelgäste.", translation: "The children's entertainer organizes games and activities for the young hotel guests every day.", answer: "Kinderanimateurin" },
  { word: "aufwachsen", sentence: "Sie ist in einer kleinen Stadt am Bodensee ______.", translation: "She grew up in a small town near Lake Constance.", answer: "aufgewachsen" },
  { word: "der Bodensee", sentence: "Im Sommer machen viele Familien Urlaub am ______.", translation: "In summer, many families go on holiday at Lake Constance.", answer: "Bodensee" },
  { word: "die Rezeptionistin", sentence: "Die ______ begrüßt die Gäste und hilft ihnen beim Einchecken.", translation: "The receptionist welcomes the guests and helps them check in.", answer: "Rezeptionistin" },
  { word: "das Familienhotel", sentence: "Das ______ bietet spezielle Aktivitäten für Kinder und Erwachsene an.", translation: "The family hotel offers special activities for children and adults.", answer: "Familienhotel" },
  { word: "die Rezeption", sentence: "Bitte melden Sie sich bei Ihrer Ankunft an der ______.", translation: "Please check in at reception when you arrive.", answer: "Rezeption" },
  { word: "die Visitenkarte", sentence: "Nach dem Gespräch gab mir die Hotelmanagerin ihre ______.", translation: "After the conversation, the hotel manager gave me her business card.", answer: "Visitenkarte" },
  { word: "das Meer", sentence: "Von unserem Hotelzimmer aus können wir direkt auf das ______ schauen.", translation: "From our hotel room, we can look directly out at the sea.", answer: "Meer" },
  { word: "die Betreuung", sentence: "Das Hotel bietet eine professionelle ______ für Kinder an.", translation: "The hotel offers professional childcare.", answer: "Betreuung" },
  { word: "zuständig", sentence: "Die Rezeptionistin ist für die Reservierungen und den Empfang der Gäste ______.", translation: "The receptionist is responsible for reservations and welcoming guests.", answer: "zuständig" },
  { word: "bieten", sentence: "Das Hotel ______ seinen Gästen kostenloses WLAN und ein Frühstücksbuffet.", translation: "The hotel offers its guests free Wi-Fi and a breakfast buffet.", answer: "bietet" },
  { word: "das Studium", sentence: "Nach ihrem ______ im Bereich Tourismus begann sie in einem Hotel zu arbeiten.", translation: "After completing her studies in tourism, she started working at a hotel.", answer: "Studium" },
  { word: "die Geschäftsleitung", sentence: "Die ______ entscheidet über das Budget und die Personalplanung des Hotels.", translation: "The management makes decisions about the hotel's budget and staffing.", answer: "Geschäftsleitung" },
  { word: "das Kinderprogramm", sentence: "Das ______ umfasst Bastelstunden, Sport und Schatzsuchen.", translation: "The children's program includes craft sessions, sports, and treasure hunts.", answer: "Kinderprogramm" },
  { word: "der Stadtführer", sentence: "Unser ______ zeigte uns die wichtigsten Sehenswürdigkeiten der Altstadt.", translation: "Our city guide showed us the main sights of the old town.", answer: "Stadtführer" },
  { word: "basteln", sentence: "Bei schlechtem Wetter können die Kinder im Hotel gemeinsam ______.", translation: "When the weather is bad, the children can do arts and crafts together at the hotel.", answer: "basteln" },
  { word: "die Koordination", sentence: "Für die Organisation der Veranstaltungen ist eine gute ______ notwendig.", translation: "Good coordination is necessary to organize the events.", answer: "Koordination" },
  { word: "der Motto-Tag", sentence: "Jeden Mittwoch findet im Familienhotel ein ______ mit verschiedenen Aktivitäten statt.", translation: "Every Wednesday, a theme day with various activities takes place at the family hotel.", answer: "Motto-Tag" },
  { word: "der Piratentag", sentence: "Beim ______ verkleiden sich die Kinder als Piraten und suchen einen Schatz.", translation: "On Pirate Day, the children dress up as pirates and search for treasure.", answer: "Piratentag" },
  { word: "die Stadtführung", sentence: "Während der ______ erfuhren wir viel über die Geschichte der Stadt.", translation: "During the city tour, we learned a lot about the city's history.", answer: "Stadtführung" },
  { word: "der Indianertag", sentence: "Beim ______ lernen die Kinder spielerisch etwas über verschiedene Traditionen und Kulturen.", translation: "On the themed day, the children learn about different traditions and cultures through play.", answer: "Indianertag" },
  { word: "der Zirkustag", sentence: "Beim ______ können die Kinder jonglieren und kleine Kunststücke vorführen.", translation: "On Circus Day, the children can juggle and perform little tricks.", answer: "Zirkustag" },
  { word: "die Kreativität", sentence: "Beim Basteln können Kinder ihre ______ entwickeln und neue Ideen ausprobieren.", translation: "Through arts and crafts, children can develop their creativity and try out new ideas.", answer: "Kreativität" },
  { word: "der Lauf", sentence: "Am Wochenende organisiert das Hotel einen gemeinsamen ______ für sportliche Gäste.", translation: "At the weekend, the hotel organizes a group run for sporty guests.", answer: "Lauf" },
  { word: "die Region", sentence: "Die ______ rund um den Bodensee ist für ihre schöne Landschaft bekannt.", translation: "The region around Lake Constance is known for its beautiful scenery.", answer: "Region" },
  { word: "die Anerkennung", sentence: "Für ihre engagierte Arbeit erhielt sie viel ______ von ihren Kollegen.", translation: "She received a lot of recognition from her colleagues for her dedicated work.", answer: "Anerkennung" },
  { word: "ziemlich", sentence: "In der Hauptsaison ist das Familienhotel ______ gut besucht.", translation: "The family hotel is quite busy during the high season.", answer: "ziemlich" },
  { word: "die Gruppe", sentence: "Die Kinder werden in eine kleine ______ eingeteilt, damit die Betreuung einfacher ist.", translation: "The children are divided into a small group to make supervision easier.", answer: "Gruppe" },
  { word: "die Uhr", sentence: "Das Kinderprogramm beginnt um zehn ______.", translation: "The children's program starts at ten o'clock.", answer: "Uhr" },
  { word: "die Verfügung", sentence: "Den Hotelgästen steht ein kostenloser Parkplatz zur ______.", translation: "A free parking space is available to hotel guests.", answer: "Verfügung" },
  { word: "die Bühne", sentence: "Am Abend führen die Kinder ihre kleinen Theaterstücke auf der ______ auf.", translation: "In the evening, the children perform their short plays on the stage.", answer: "Bühne" },
  { word: "der Hotelgast", sentence: "Jeder ______ kann sich an der Rezeption über die Freizeitangebote informieren.", translation: "Every hotel guest can ask at reception about the leisure activities.", answer: "Hotelgast" },
  { word: "unterhalten", sentence: "Die Kinderanimateurin versucht, die kleinen Gäste mit Spielen und Geschichten zu ______.", translation: "The children's entertainer tries to entertain the young guests with games and stories.", answer: "unterhalten" },
  { word: "anspruchsvoll", sentence: "Die Arbeit in einem Familienhotel kann besonders in der Hauptsaison ______ sein.", translation: "Working at a family hotel can be particularly demanding during the high season.", answer: "anspruchsvoll" },
  { word: "das Grundgehalt", sentence: "Das ______ wird im Arbeitsvertrag festgelegt und kann durch Zuschläge ergänzt werden.", translation: "The basic salary is specified in the employment contract and can be supplemented by additional payments.", answer: "Grundgehalt" },
  { word: "die Tätigkeit", sentence: "Zu ihrer täglichen ______ gehören die Betreuung der Kinder und die Organisation von Veranstaltungen.", translation: "Her daily duties include looking after children and organizing events.", answer: "Tätigkeit" },
  { word: "das Privatleben", sentence: "Bei Schichtarbeit ist es manchmal schwierig, Beruf und ______ miteinander zu vereinbaren.", translation: "With shift work, it is sometimes difficult to balance work and private life.", answer: "Privatleben" },
  { word: "das Einkommen", sentence: "Ihr monatliches ______ besteht aus dem Grundgehalt und zusätzlichen Zahlungen.", translation: "Her monthly income consists of the basic salary and additional payments.", answer: "Einkommen" },
  { word: "aufstiegsorientiert", sentence: "Sie ist sehr ______ und möchte später die Leitung eines Hotels übernehmen.", translation: "She is very career-oriented and wants to manage a hotel in the future.", answer: "aufstiegsorientiert" },
  { word: "diskutieren", sentence: "Bei der Teamsitzung ______ die Mitarbeiter über neue Ideen für das Kinderprogramm.", translation: "During the team meeting, the employees discuss new ideas for the children's program.", answer: "diskutieren" },
  { word: "die Arbeitsbedingung", sentence: "Vor der Bewerbung möchte ich mich über die ______ im Hotel informieren.", translation: "Before applying, I would like to find out about the working conditions at the hotel.", answer: "Arbeitsbedingungen" },
] satisfies (Omit<GapTestQuestion, "wordId"> & { word: string })[];

const sourceWords = getAndereUrlaubMachenSet().words;
const wordsByGerman = new Map(sourceWords.map((word) => [word.german.toLowerCase(), word]));

export const ANDERE_URLAUB_MACHEN_GAP_TEST: GapTestQuestion[] = PROMPTS.map((prompt) => {
  const word = wordsByGerman.get(prompt.word.toLowerCase());
  if (!word) throw new Error(`No Andere Urlaub machen vocabulary word found for: ${prompt.word}`);
  return { ...prompt, wordId: word.id };
});

export const ANDERE_URLAUB_MACHEN_GAP_WORD_IDS = new Set(
  ANDERE_URLAUB_MACHEN_GAP_TEST.map((prompt) => prompt.wordId),
);