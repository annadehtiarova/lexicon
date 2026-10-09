import { getBeruflichWeiterkommenSet } from "@/lib/beruflichWeiterkommenData";

interface GapTestQuestion {
  sentence: string;
  translation: string;
  answer: string;
  wordId: string;
}

const prompts = [
  ["das Berufsbild", "Das ______ eines Reiseleiters umfasst die Betreuung der Gäste und die Organisation von Ausflügen.", "The occupational profile of a tour guide includes looking after guests and organizing excursions.", "Berufsbild"],
  ["der Reiseleiter", "Der ______ erklärt den Touristen die Geschichte der Stadt.", "The tour guide explains the city's history to the tourists.", "Reiseleiter"],
  ["die Satire", "Der Film ist eine ______, die sich auf humorvolle Weise über den Massentourismus lustig macht.", "The film is a satire that humorously pokes fun at mass tourism.", "Satire"],
  ["das Organisationstalent", "Für die Arbeit im Reisebüro braucht man viel ______.", "Working at a travel agency requires strong organizational skills.", "Organisationstalent"],
  ["die Stellenanzeige", "In der ______ werden die Aufgaben und Anforderungen der Stelle beschrieben.", "The job advertisement describes the duties and requirements of the position.", "Stellenanzeige"],
  ["die Kompetenz", "Gute Kommunikationsfähigkeit ist eine wichtige ______ für einen Reiseleiter.", "Good communication skills are an important competence for a tour guide.", "Kompetenz"],
  ["der Arbeitsbereich", "Die Organisation von Ausflügen gehört zu ihrem ______.", "Organizing excursions is part of her area of work.", "Arbeitsbereich"],
  ["das Aufgabengebiet", "Zu seinem ______ gehören die Reservierung von Hotels und die Betreuung der Gäste.", "His area of responsibility includes booking hotels and looking after guests.", "Aufgabengebiet"],
  ["der Empfang", "Am ______ begrüßt die Rezeptionistin die ankommenden Gäste.", "At reception, the receptionist welcomes arriving guests.", "Empfang"],
  ["die Betreuung", "Die ______ der Kinder gehört zu ihren täglichen Aufgaben.", "Looking after the children is part of her daily duties.", "Betreuung"],
  ["die administrative Aufgabe", "Die Bearbeitung von Rechnungen ist eine wichtige ______.", "Processing invoices is an important administrative task.", "administrative Aufgabe"],
  ["die Ausflugsabrechnung", "Nach der Reise muss der Mitarbeiter die ______ vorbereiten.", "After the trip, the employee has to prepare the excursion expense statement.", "Ausflugsabrechnung"],
  ["die Ablage", "Für die ______ der Rechnungen verwenden wir ein digitales System.", "We use a digital system for filing invoices.", "Ablage"],
  ["die Entwicklung", "Die ______ neuer Reiseangebote gehört zu seinen Aufgaben.", "Developing new travel offers is part of his duties.", "Entwicklung"],
  ["das Ausflugsprogramm", "Das ______ für die nächste Woche enthält drei Stadtführungen und eine Bootsfahrt.", "The excursion program for next week includes three city tours and a boat trip.", "Ausflugsprogramm"],
  ["die fachliche Kenntnis", "Für diese Stelle benötigt man gute ______ im Bereich Tourismus.", "This position requires good technical knowledge in tourism.", "fachliche Kenntnisse"],
  ["das Computerprogramm", "Mit diesem ______ können wir Hotelzimmer schnell reservieren.", "With this computer program, we can reserve hotel rooms quickly.", "Computerprogramm"],
  ["die Reservierung", "Ich möchte eine ______ für zwei Personen im Hotel vornehmen.", "I would like to make a reservation for two people at the hotel.", "Reservierung"],
  ["die Rückkehr", "Nach der ______ aus dem Urlaub muss ich wieder zur Arbeit gehen.", "After returning from vacation, I have to go back to work.", "Rückkehr"],
  ["die Fremdsprache", "Für die Arbeit im internationalen Tourismus ist mindestens eine ______ wichtig.", "Knowing at least one foreign language is important for working in international tourism.", "Fremdsprache"],
  ["die Presse", "Die ______ berichtete über die Eröffnung des neuen Hotels.", "The press reported on the opening of the new hotel.", "Presse"],
  ["die Anforderung", "Gute Sprachkenntnisse sind eine wichtige ______ für diese Stelle.", "Good language skills are an important requirement for this position.", "Anforderung"],
  ["das Maß", "Bei der Arbeit mit Kunden ist ein gewisses ______ an Geduld notwendig.", "A certain degree of patience is necessary when working with customers.", "Maß"],
  ["das Auftreten", "Ein freundliches ______ ist im Kundenkontakt besonders wichtig.", "A friendly demeanor is particularly important when dealing with customers.", "Auftreten"],
  ["die Sehenswürdigkeit", "Der Reiseleiter zeigte uns die bekannteste ______ der Stadt.", "The tour guide showed us the city's most famous tourist attraction.", "Sehenswürdigkeit"],
  ["der Doktortitel", "Für diese Stelle ist ein ______ nicht erforderlich.", "A doctorate is not required for this position.", "Doktortitel"],
  ["die Ökonomie", "Im Studium beschäftigt sie sich mit ______ und Tourismus.", "In her studies, she focuses on economics and tourism.", "Ökonomie"],
  ["der Arbeitsvertrag", "Bevor ich die neue Stelle antrete, muss ich den ______ unterschreiben.", "Before starting the new job, I have to sign the employment contract.", "Arbeitsvertrag"],
  ["die Unterkunft", "Der Reiseveranstalter organisiert eine günstige ______ für die Reisegruppe.", "The tour operator arranges affordable accommodation for the travel group.", "Unterkunft"],
  ["das Einsatzgebiet", "Das ______ des Reiseleiters umfasst mehrere Städte in Süddeutschland.", "The tour guide's area of operation covers several cities in southern Germany.", "Einsatzgebiet"],
  ["die Krankheit", "Wegen einer ______ konnte sie die Reise nicht antreten.", "Because of an illness, she could not begin the trip.", "Krankheit"],
  ["das Zelt", "Während des Campingurlaubs schlafen wir in einem ______.", "During the camping holiday, we sleep in a tent.", "Zelt"],
  ["die Bewerbungsunterlagen", "Bitte schicken Sie Ihre ______ per E-Mail an die Personalabteilung.", "Please send your application documents by email to the HR department.", "Bewerbungsunterlagen"],
  ["die Personalabteilung", "Die ______ ist für die Einstellung neuer Mitarbeiter zuständig.", "The HR department is responsible for hiring new employees.", "Personalabteilung"],
  ["der Telefonkontakt", "Ein freundlicher ______ ist für die Kundenbetreuung wichtig.", "Friendly telephone contact is important for customer service.", "Telefonkontakt"],
  ["die Gebühr", "Für die Änderung der Reservierung müssen wir eine zusätzliche ______ bezahlen.", "We have to pay an additional fee to change the reservation.", "Gebühr"],
  ["das Leben", "Durch das Reisen in andere Länder lernt man neue Perspektiven auf das ______ kennen.", "By travelling to other countries, you discover new perspectives on life.", "Leben"],
  ["der Verkehrsstau", "Wegen eines ______ kamen wir zu spät am Flughafen an.", "We arrived at the airport late because of a traffic jam.", "Verkehrsstaus"],
  ["die Anreise", "Für die ______ zum Hotel organisieren wir einen Transfer vom Flughafen.", "For the journey to the hotel, we arrange a transfer from the airport.", "Anreise"],
  ["die Kindheit", "Schon in ihrer ______ träumte sie davon, die Welt zu bereisen.", "Even in her childhood, she dreamed of travelling the world.", "Kindheit"],
  ["das Zimmer", "Das Hotel bietet ein ruhiges ______ mit Blick auf das Meer.", "The hotel offers a quiet room with a sea view.", "Zimmer"],
  ["die Beziehungsproblematik", "Die ______ zwischen den beiden Kollegen wirkt sich negativ auf die Zusammenarbeit aus.", "The relationship issues between the two colleagues have a negative effect on their cooperation.", "Beziehungsproblematik"],
  ["die Bewerbung", "Für die ______ auf die Stelle benötigt sie einen Lebenslauf und ein Anschreiben.", "To apply for the position, she needs a CV and a cover letter.", "Bewerbung"],
  ["die Saison", "In der touristischen ______ sind die Hotels oft ausgebucht.", "During the tourist season, hotels are often fully booked.", "Saison"],
  ["die Ausschreibung", "In der ______ werden die Anforderungen und Aufgaben der Stelle veröffentlicht.", "The job advertisement lists the requirements and duties of the position.", "Ausschreibung"],
  ["das Privatleben", "Bei Schichtarbeit ist es manchmal schwierig, Beruf und ______ zu vereinbaren.", "With shift work, it is sometimes difficult to balance work and private life.", "Privatleben"],
  ["das Zielland", "Vor der Reise informiere ich mich über die Kultur und die Gesetze im ______.", "Before travelling, I find out about the culture and laws in the destination country.", "Zielland"],
  ["das Auswahlverfahren", "Das ______ für diese Stelle besteht aus einem Gespräch und einer praktischen Aufgabe.", "The selection process for this position consists of an interview and a practical task.", "Auswahlverfahren"],
  ["der Sinn", "Für mich hat es einen besonderen ______, neue Kulturen kennenzulernen.", "For me, getting to know new cultures has a special meaning.", "Sinn"],
  ["der Eindruck", "Beim Vorstellungsgespräch machte sie einen professionellen ______.", "She made a professional impression at the job interview.", "Eindruck"],
  ["das Vorgespräch", "Vor dem eigentlichen Vorstellungsgespräch findet ein kurzes ______ statt.", "A short preliminary discussion takes place before the actual job interview.", "Vorgespräch"],
  ["weiterkommen", "Wenn man sich regelmäßig weiterbildet, kann man beruflich ______.", "If you continue your professional development regularly, you can progress in your career.", "weiterkommen"],
  ["auszeichnen", "Gute Reiseleiter ______ sich durch Freundlichkeit und Organisationstalent ______.", "Good tour guides distinguish themselves through friendliness and organizational skills.", "zeichnen aus"],
  ["wenden", "Bei Fragen können Sie sich jederzeit an die Personalabteilung ______.", "If you have any questions, you can contact the HR department at any time.", "wenden"],
  ["hoffnungslos", "Die Situation schien zunächst ______, aber das Team fand schließlich eine Lösung.", "The situation initially seemed hopeless, but the team eventually found a solution.", "hoffnungslos"],
  ["schauspielern", "Für die Rolle des Reiseleiters musste er bei einer Szene vor der Kamera ______.", "For the role of the tour guide, he had to act in front of the camera during a scene.", "schauspielern"],
  ["zaubern", "Der Animateur kann gut ______ und begeistert damit die Kinder.", "The entertainer is good at doing magic and delights the children.", "zaubern"],
  ["kümmern", "Die Rezeptionistin muss sich um die Wünsche und Fragen der Gäste ______.", "The receptionist has to take care of the guests' requests and questions.", "kümmern"],
  ["bewerben", "Ich möchte mich um eine Stelle als Reiseleiter ______.", "I would like to apply for a position as a tour guide.", "bewerben"],
  ["trösten", "Die Kinderanimateurin versuchte, das weinende Kind zu ______.", "The children's entertainer tried to comfort the crying child.", "trösten"],
  ["übertrieben", "Die Versprechen in der Stellenanzeige klangen ziemlich ______.", "The promises in the job advertisement sounded rather exaggerated.", "übertrieben"],
  ["anzeigen", "Die Website ______ alle verfügbaren Zimmer und deren Preise ______.", "The website displays all available rooms and their prices.", "zeigt an"],
  ["formulieren", "Im Anschreiben sollte man seine Motivation klar ______.", "In the cover letter, you should formulate your motivation clearly.", "formulieren"],
  ["witzig", "Der Reiseleiter erzählte eine ______ Geschichte, über die alle lachen mussten.", "The tour guide told a funny story that made everyone laugh.", "witzige"],
  ["unrealistisch", "Es ist ______, alle Sehenswürdigkeiten einer Großstadt an einem Tag zu besuchen.", "It is unrealistic to visit all the sights of a large city in one day.", "unrealistisch"],
  ["bisher", "______ habe ich noch keine Antwort auf meine Bewerbung erhalten.", "So far, I have not received an answer to my application.", "Bisher"],
  ["vermutlich", "Wegen des schlechten Wetters wird der Flug ______ verspätet sein.", "The flight will probably be delayed because of the bad weather.", "vermutlich"],
  ["fehlen", "Für die Bewerbung ______ noch zwei wichtige Dokumente.", "Two important documents are still missing from the application.", "fehlen"],
  ["vollzeit", "Sie arbeitet ______ in einem Reisebüro und betreut internationale Kunden.", "She works full-time at a travel agency and assists international customers.", "vollzeit"],
  ["freundlich", "Ein ______ Umgang mit Gästen ist für einen Reiseleiter besonders wichtig.", "A friendly manner with guests is particularly important for a tour guide.", "freundlicher"],
  ["problemlos", "Dank der guten Organisation verlief die Reise ______.", "Thanks to the good organization, the trip went smoothly.", "problemlos"],
  ["ursprünglich", "______ wollte ich im Hotel arbeiten, später entschied ich mich aber für ein Reisebüro.", "Originally, I wanted to work at a hotel, but later I decided to work at a travel agency.", "Ursprünglich"],
  ["selbstverständlich", "Es ist ______, dass alle Mitarbeiter die Sicherheitsregeln beachten.", "It goes without saying that all employees follow the safety rules.", "selbstverständlich"],
] as const;

const sourceWords = getBeruflichWeiterkommenSet().words;
const wordsByGerman = new Map(sourceWords.map((word) => [word.german.toLowerCase(), word]));

export const BERUFLICH_WEITERKOMMEN_GAP_TEST: GapTestQuestion[] = prompts.map(
  ([headword, sentence, translation, answer]) => {
    const word = wordsByGerman.get(headword.toLowerCase());
    if (!word) throw new Error(`No Beruflich weiterkommen word found for: ${headword}`);
    return { sentence, translation, answer, wordId: word.id };
  },
);

export const BERUFLICH_WEITERKOMMEN_GAP_WORD_IDS = new Set(
  BERUFLICH_WEITERKOMMEN_GAP_TEST.map((question) => question.wordId),
);