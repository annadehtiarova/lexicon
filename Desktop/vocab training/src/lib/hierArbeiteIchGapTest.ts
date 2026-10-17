import { getHierArbeiteIchSet } from "@/lib/hierArbeiteIchData";

interface GapPrompt {
  sentence: string;
  translation: string;
  answer: string;
  displayAnswers?: string[];
}

const PROMPTS: GapPrompt[] = [
  { sentence: "Im Sommer funktioniert ______ in unserem Büro nicht richtig.", translation: "In summer, the air conditioning in our office does not work properly.", answer: "die Klimaanlage" },
  { sentence: "Um die Decke zu streichen, brauche ich eine ______.", translation: "I need a ladder to paint the ceiling.", answer: "Leiter" },
  { sentence: "Der Handwerker legt seine Werkzeuge auf die ______.", translation: "The tradesperson puts his tools on the workbench.", answer: "Werkbank" },
  { sentence: "Alle Schraubenzieher und Zangen befinden sich im ______.", translation: "All the screwdrivers and pliers are in the toolbox.", answer: "Werkzeugkasten" },
  { sentence: "Auf dieser Baustelle muss jeder einen ______ tragen.", translation: "Everyone must wear a hard hat on this construction site.", answer: "Schutzhelm" },
  { sentence: "Die Firma soll nächste Woche ______.", translation: "The company is supposed to install bathroom facilities next week.", answer: "sanitäre Anlagen installieren" },
  { sentence: "Der Klempner musste mehrere Stunden lang ______.", translation: "The plumber had to clean blocked pipes for several hours.", answer: "verstopfte Rohre reinigen" },
  { sentence: "Der Vermieter hat eine ______ von zehn Prozent angekündigt.", translation: "The landlord has announced a ten-percent rent increase.", answer: "Mieterhöhung" },
  { sentence: "Nach mehreren Wochen erhielt sie endlich die ______ für die Wohnung.", translation: "After several weeks, she finally received confirmation that she had the apartment.", answer: "Zusage" },
  { sentence: "Wegen des Wasserschadens mussten wir ______ auf den Handwerker warten.", translation: "We had to wait for hours for the tradesperson because of the water damage.", answer: "stundenlang" },
  { sentence: "Über das ______ können Mieter Reparaturen melden.", translation: "Tenants can report repairs through the online portal.", answer: "Onlineportal" },
  { sentence: "Der Makler zeigt uns morgen ein interessantes ______.", translation: "The real estate agent is showing us an interesting property tomorrow.", answer: "Objekt" },
  { sentence: "Auf dem ______ kann man die Größe der Zimmer erkennen.", translation: "You can see the size of the rooms on the floor plan.", answer: "Grundriss" },
  { sentence: "Bitte halten Sie mich über den Stand der Reparatur ______.", translation: "Please keep me up to date about the progress of the repair.", answer: "auf dem Laufenden" },
  { sentence: "Der ______ möchte die Wohnung am Samstag besichtigen.", translation: "The prospective tenant would like to view the apartment on Saturday.", answer: "Interessent" },
  { sentence: "Die ______ hat bereits alle erforderlichen Unterlagen eingereicht.", translation: "The prospective tenant has already submitted all the required documents.", answer: "Interessentin" },
  { sentence: "Sie sucht eine helle ______ mit hohen Decken.", translation: "She is looking for an apartment in an older building with high ceilings.", answer: "Altbauwohnung" },
  { sentence: "Die Wohnung wird mit einer modernen ______ vermietet.", translation: "The apartment is rented out with a modern fitted kitchen.", answer: "Einbauküche" },
  { sentence: "Da der ______ außer Betrieb ist, müssen wir die Treppe nehmen.", translation: "Since the elevator is out of order, we have to take the stairs.", answer: "Fahrstuhl" },
  { sentence: "Als ich die Reparatur selbst geschafft hatte, war das ein echtes ______.", translation: "When I managed to complete the repair myself, it gave me a real sense of achievement.", answer: "Erfolgserlebnis" },
  { sentence: "Das beschädigte Fahrrad wird in der ______ repariert.", translation: "The damaged bicycle is being repaired in the workshop.", answer: "Werkstatt" },
  { sentence: "Bei Problemen mit der Heizung sollten Sie die ______ kontaktieren.", translation: "If you have problems with the heating, you should contact property management.", answer: "Hausverwaltung" },
  { sentence: "Ich habe morgen einen Besichtigungstermin. Kannst du mir ______?", translation: "I have an apartment viewing tomorrow. Can you keep your fingers crossed for me?", answer: "die Daumen drücken" },
  { sentence: "Die Wohnung ist noch nicht frei, aber ich möchte ______.", translation: "The apartment is not available yet, but I would like to put my name down on the list.", answer: "mich vormerken lassen" },
  { sentence: "Vor dem ______ müssen alle persönlichen Gegenstände entfernt werden.", translation: "Before moving out, all personal belongings must be removed.", answer: "Auszug" },
  { sentence: "Die Eigentümer wollen das alte Gebäude vollständig ______.", translation: "The owners want to renovate the old building completely.", answer: "sanieren" },
  { sentence: "Bevor wir den Holzboden neu lackieren, müssen wir ihn ______.", translation: "Before applying a new finish to the wooden floor, we must sand it down.", answer: "abschleifen" },
  { sentence: "Der Techniker wird morgen die Waschmaschine ______.", translation: "The technician will connect the washing machine tomorrow.", answer: "anschließen" },
  { sentence: "In der Wand ist eine Wasser-______ beschädigt.", translation: "A water pipe in the wall is damaged.", answer: "leitung" },
  { sentence: "Für den Transport der Möbel haben wir eine ______ beauftragt.", translation: "We hired a moving company to transport the furniture.", answer: "Spedition" },
  { sentence: "Der Fahrstuhl bleibt ______ bis morgen geschlossen.", translation: "The elevator will remain closed until tomorrow for safety reasons.", answer: "aus Sicherheitsgründen" },
  { sentence: "Nach dem Umzug sollte man rechtzeitig einen ______ bei der Post einreichen.", translation: "After moving, you should submit a mail forwarding request to the postal service in good time.", answer: "Nachsendeantrag" },
  { sentence: "Ich muss vor meinem Umzug ______, damit meine Briefe mich erreichen.", translation: "Before moving, I need to submit a mail forwarding request so that my letters reach me.", answer: "einen Nachsendeantrag stellen" },
  { sentence: "Bücher und Geschirr haben wir bereits in einen ______ gepackt.", translation: "We have already packed the books and dishes into a moving box.", answer: "Umzugskarton" },
  { sentence: "Für die Bewerbung um die Wohnung brauche ich einen aktuellen ______.", translation: "I need current proof of income to apply for the apartment.", answer: "Einkommensnachweis" },
  { sentence: "Wir haben beim ______ angerufen, um einen Besichtigungstermin zu vereinbaren.", translation: "We called the real estate agency to arrange a viewing.", answer: "Maklerbüro" },
  { sentence: "Nach dem Umzug muss man sich innerhalb der gesetzlichen Frist ______.", translation: "After moving, you must re-register your address within the legal deadline.", answer: "ummelden" },
  { sentence: "Vor dem Einzug muss die ______ bezahlt oder vereinbart werden.", translation: "The security deposit must be paid or agreed upon before moving in.", answer: "Kaution" },
  { sentence: "Bevor sie die Schlüssel bekommt, muss sie ______.", translation: "Before she receives the keys, she must provide a security deposit.", answer: "eine Kaution hinterlegen" },
  { sentence: "Der ______ für die Wohnung findet am Donnerstag um 16 Uhr statt.", translation: "The viewing appointment for the apartment is on Thursday at 4 p.m.", answer: "Besichtigungstermin" },
  { sentence: "Die Arzt-______ befindet sich im zweiten Stock des Gebäudes.", translation: "The doctor's practice is on the second floor of the building.", answer: "praxis" },
  { sentence: "Wer wird ______ die Reparatur der Heizung ______?", translation: "Who will take care of repairing the heating?", answer: "sich um die Reparatur kümmern", displayAnswers: ["sich um", "kümmern"] },
  { sentence: "Sie arbeitet seit zehn Jahren in der Immobilien-______.", translation: "She has worked in the real estate industry for ten years.", answer: "branche" },
  { sentence: "Das junge ______ entwickelt eine App für die Wohnungssuche.", translation: "The young start-up is developing an app for finding apartments.", answer: "Start-up" },
  { sentence: "Vor der Wohnungsübergabe gehen wir gemeinsam die ______ durch.", translation: "Before handing over the apartment, we go through the checklist together.", answer: "Checkliste" },
  { sentence: "Die Firma sucht einen geeigneten ______ für ihr neues Büro.", translation: "The company is looking for suitable commercial premises for its new office.", answer: "Gewerberaum" },
  { sentence: "In einer Arztpraxis müssen alle ______ eingehalten werden.", translation: "All hygiene requirements must be met in a medical practice.", answer: "Hygieneanforderungen" },
  { sentence: "Bei der Terminplanung ist etwas ______ erforderlich.", translation: "Some flexibility is necessary when scheduling appointments.", answer: "Flexibilität" },
  { sentence: "Wenn ich für sechs Monate ins Ausland gehe, möchte ich mein Zimmer ______.", translation: "If I go abroad for six months, I would like to sublet my room.", answer: "untervermieten" },
  { sentence: "Bei der ______ der Wohnung werden alle Schlüssel übergeben.", translation: "All the keys are handed over during the apartment handover.", answer: "Übergabe" },
  { sentence: "Im ______ werden vorhandene Schäden und Zählerstände dokumentiert.", translation: "Existing damage and meter readings are recorded in the handover report.", answer: "Übergabeprotokoll" },
  { sentence: "Bevor wir die Reparatur beauftragen, sollten wir ______ die Arbeiten ______.", translation: "Before commissioning the repair, we should obtain a quote for the work.", answer: "ein Angebot für die Arbeiten einholen", displayAnswers: ["ein Angebot für", "einholen"] },
  { sentence: "Der Vermieter ist ______ ______ des Einzugstermins.", translation: "The landlord is flexible with regard to the move-in date.", answer: "flexibel bezüglich", displayAnswers: ["flexibel", "bezüglich"] },
  { sentence: "Beim Preis ______ wir ______, deshalb können wir noch verhandeln.", translation: "We still have some leeway with the price, so we can continue negotiating.", answer: "haben noch etwas Spielraum", displayAnswers: ["haben", "noch etwas Spielraum"] },
  { sentence: "Die Umzugsfirma ist bis nächsten Montag ______.", translation: "The moving company is fully booked until next Monday.", answer: "ausgebucht" },
  { sentence: "Der Vermieter möchte uns bei der Mietzahlung ______.", translation: "The landlord wants to accommodate us regarding the rent payment.", answer: "entgegenkommen" },
  { sentence: "Die Reparatur kostet laut Vertrag 250 Euro zum ______.", translation: "According to the contract, the repair costs 250 euros at a fixed price.", answer: "Fixpreis" },
  { sentence: "Es kann schwierig sein, allein ein Unternehmen zu gründen, aber man muss ______.", translation: "Starting a business alone can be difficult, but you have to be brave.", answer: "mutig sein" },
  { sentence: "Wir haben ______ beschlossen, uns noch eine andere Wohnung anzusehen.", translation: "We made a spontaneous decision to view another apartment.", answer: "spontan" },
  { sentence: "Sie sucht eine ______ Wohnung mit zwei Zimmern.", translation: "She is looking for a medium-sized apartment with two rooms.", answer: "mittelgroße" },
  { sentence: "Das Gebäude soll barrierefrei sein, damit ______ es problemlos nutzen können.", translation: "The building should be accessible so that people with disabilities can use it without difficulty.", answer: "Menschen mit Behinderungen" },
  { sentence: "Die Hausverwaltung ist ______ die Organisation der Reparaturen ______.", translation: "Property management is responsible for organizing the repairs.", answer: "für verantwortlich", displayAnswers: ["für", "verantwortlich"] },
  { sentence: "In dieser Position muss man seine Aufgaben planen und ______ können.", translation: "In this position, you must be able to plan your tasks and work independently.", answer: "selbstständig arbeiten" },
  { sentence: "Über das Onlineportal können Mieter schnell mit der Hausverwaltung ______.", translation: "Through the online portal, tenants can quickly get in touch with property management.", answer: "Kontakt bekommen" },
  { sentence: "Beim diesjährigen ______ besuchen wir gemeinsam eine andere Stadt.", translation: "During this year's company outing, we will visit another city together.", answer: "Betriebsausflug" },
  { sentence: "Bevor ich das Übergabeprotokoll unterschreibe, möchte ich prüfen, ob alles ______.", translation: "Before signing the handover report, I want to check whether everything is in order.", answer: "in Ordnung ist" },
  { sentence: "Die Wohnung ist hell und ruhig, sodass ich mich dort sofort ______ konnte.", translation: "The apartment is bright and quiet, so I immediately felt comfortable there.", answer: "wohlfühlen" },
  { sentence: "In der ______ können die Mitarbeiter Kaffee kochen und ihre Pausen verbringen.", translation: "Employees can make coffee and spend their breaks in the break room.", answer: "Kaffeeküche" },
  { sentence: "Auf dem ______ hat sich neben der Spüle ein Riss gebildet.", translation: "A crack has formed in the kitchen floor next to the sink.", answer: "Küchenboden" },
  { sentence: "An der Wand ist ein langer ______ zu sehen.", translation: "A long crack can be seen in the wall.", answer: "Riss" },
  { sentence: "Die Hausverwaltung wird ______ das Problem mit dem Wasserrohr ______.", translation: "Property management will take care of the problem with the water pipe.", answer: "sich um das Problem kümmern", displayAnswers: ["sich um", "kümmern"] },
  { sentence: "Weil die Heizung nicht funktioniert, müssen wir ______.", translation: "Because the heating is not working, we need to call a tradesperson.", answer: "einen Handwerker bestellen" },
  { sentence: "Der Techniker kommt morgen vorbei, um ______.", translation: "The technician will come by tomorrow to take a look at the problem.", answer: "sich das Problem anzusehen" },
  { sentence: "Für die Bearbeitung der Beschwerde benötigen wir eine genaue ______.", translation: "We need a detailed description of the problem to process the complaint.", answer: "Schilderung des Problems" },
  { sentence: "Wenn Sie den Schaden melden, sollten Sie ______ und erklären, wann er aufgetreten ist.", translation: "When reporting the damage, you should describe the problem and explain when it occurred.", answer: "das Problem schildern" },
  { sentence: "Wir bitten um die zeitnahe ______ der Reparatur.", translation: "We request the prompt completion of the repair.", answer: "Erledigung" },
  { sentence: "Bitte teilen Sie uns Ihre telefonische ______ während der Arbeitszeit mit.", translation: "Please let us know your telephone availability during working hours.", answer: "Erreichbarkeit" },
  { sentence: "Die Hausverwaltung wird ______ kontaktieren, um den Schaden beheben zu lassen.", translation: "Property management will contact the responsible company to have the damage repaired.", answer: "die verantwortliche Firma" },
  { sentence: "Die Handwerker kommen nächste Woche, um ______.", translation: "The tradespeople are coming next week to repair the damage.", answer: "einen Schaden zu beheben" },
  { sentence: "In Ihrer E-Mail sollten Sie sich auf die letzte Mitteilung ______.", translation: "In your email, you should refer to the last message.", answer: "beziehen" },
  { sentence: "Der Handwerker hat den Schaden ______ vollständig repariert.", translation: "The tradesperson has by now repaired the damage completely.", answer: "mittlerweile" },
  { sentence: "Wir entschuldigen uns für ______ und danken Ihnen für Ihr Verständnis.", translation: "We apologize for the inconvenience caused and thank you for your understanding.", answer: "die entstandenen Unannehmlichkeiten" },
  { sentence: "Nach der Prüfung des Schadens hat die Hausverwaltung einen ______ erteilt.", translation: "After inspecting the damage, property management issued a repair order.", answer: "Reparaturauftrag" },
  { sentence: "Wegen des erheblichen Mangels möchte der Mieter die Miete ______ zehn Prozent ______.", translation: "Because of the significant defect, the tenant wants to reduce the rent by ten percent.", answer: "um mindern", displayAnswers: ["um", "mindern"] },
];

const sourceWords = getHierArbeiteIchSet().words;
if (sourceWords.length !== 84 || PROMPTS.length !== sourceWords.length) {
  throw new Error(`Kapitel 1 gap test requires 84 aligned words and prompts; got ${sourceWords.length} words and ${PROMPTS.length} prompts.`);
}

export const HIER_ARBEITE_ICH_GAP_TEST = PROMPTS.map((prompt, index) => ({
  ...prompt,
  wordId: sourceWords[index].id,
}));

export const HIER_ARBEITE_ICH_GAP_WORD_IDS = new Set(
  HIER_ARBEITE_ICH_GAP_TEST.map((question) => question.wordId),
);