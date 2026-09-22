// Placeholder vocabulary used to simulate photo-to-flashcard extraction.
// A real implementation would send images to a vision/OCR model here.
export interface BankEntry {
  german: string;
  english: string;
  example: string;
  pos: string;
}

// B2-level (upper-intermediate) German vocabulary.
export const WORD_BANK: BankEntry[] = [
  {
    german: "die Herausforderung",
    english: "the challenge",
    pos: "noun",
    example: "Der neue Job ist eine große Herausforderung.",
  },
  {
    german: "die Voraussetzung",
    english: "the precondition",
    pos: "noun",
    example: "Gute Deutschkenntnisse sind eine Voraussetzung für den Job.",
  },
  {
    german: "die Auswirkung",
    english: "the effect; impact",
    pos: "noun",
    example: "Der Klimawandel hat schwere Auswirkungen.",
  },
  {
    german: "die Verantwortung",
    english: "the responsibility",
    pos: "noun",
    example: "Sie übernimmt viel Verantwortung im Team.",
  },
  {
    german: "die Entwicklung",
    english: "the development",
    pos: "noun",
    example: "Die technische Entwicklung geht sehr schnell.",
  },
  {
    german: "die Umweltverschmutzung",
    english: "environmental pollution",
    pos: "noun",
    example: "Die Umweltverschmutzung nimmt weltweit zu.",
  },
  {
    german: "die Nachhaltigkeit",
    english: "sustainability",
    pos: "noun",
    example: "Nachhaltigkeit ist ein wichtiges Thema in der Wirtschaft.",
  },
  {
    german: "die Gerechtigkeit",
    english: "justice; fairness",
    pos: "noun",
    example: "Er kämpft für mehr soziale Gerechtigkeit.",
  },
  {
    german: "die Vorurteil",
    english: "the prejudice",
    pos: "noun",
    example: "Man sollte keine Vorurteile gegenüber Fremden haben.",
  },
  {
    german: "die Beziehung",
    english: "the relationship",
    pos: "noun",
    example: "Ihre Beziehung hält schon seit zehn Jahren.",
  },
  {
    german: "die Wahrnehmung",
    english: "the perception",
    pos: "noun",
    example: "Die Wahrnehmung von Risiken ist sehr individuell.",
  },
  {
    german: "die Wirtschaftskrise",
    english: "economic crisis",
    pos: "noun",
    example: "Die Wirtschaftskrise traf viele Unternehmen hart.",
  },
  {
    german: "der Fortschritt",
    english: "the progress",
    pos: "noun",
    example: "Der technische Fortschritt verändert unseren Alltag.",
  },
  {
    german: "der Wettbewerb",
    english: "the competition",
    pos: "noun",
    example: "Der Wettbewerb zwischen den Firmen ist hart.",
  },
  {
    german: "der Zusammenhang",
    english: "the connection; context",
    pos: "noun",
    example: "Es gibt einen klaren Zusammenhang zwischen Sport und Gesundheit.",
  },
  {
    german: "der Widerspruch",
    english: "the contradiction",
    pos: "noun",
    example: "Seine Aussagen enthalten einen Widerspruch.",
  },
  {
    german: "der Eindruck",
    english: "the impression",
    pos: "noun",
    example: "Sie hinterließ einen guten Eindruck.",
  },
  {
    german: "der Vorteil",
    english: "the advantage",
    pos: "noun",
    example: "Homeoffice bietet viele Vorteile.",
  },
  {
    german: "der Nachteil",
    english: "the disadvantage",
    pos: "noun",
    example: "Jede Lösung hat auch Nachteile.",
  },
  {
    german: "der Umgang",
    english: "the way of dealing with",
    pos: "noun",
    example: "Der Umgang mit Stress fällt vielen schwer.",
  },
  {
    german: "berücksichtigen",
    english: "to take into account",
    pos: "verb",
    example: "Man muss alle Faktoren berücksichtigen.",
  },
  {
    german: "sich auseinandersetzen (mit)",
    english: "to engage with; to deal with",
    pos: "verb",
    example: "Wir müssen uns mit dem Problem auseinandersetzen.",
  },
  {
    german: "verursachen",
    english: "to cause",
    pos: "verb",
    example: "Der Sturm verursachte großen Schaden.",
  },
  {
    german: "sich beschweren",
    english: "to complain",
    pos: "verb",
    example: "Er hat sich über den schlechten Service beschwert.",
  },
  {
    german: "vermeiden",
    english: "to avoid",
    pos: "verb",
    example: "Man sollte unnötigen Stress vermeiden.",
  },
  {
    german: "sich engagieren",
    english: "to get involved",
    pos: "verb",
    example: "Sie engagiert sich für den Umweltschutz.",
  },
  {
    german: "bewältigen",
    english: "to cope with; to manage",
    pos: "verb",
    example: "Er musste viele Schwierigkeiten bewältigen.",
  },
  {
    german: "verzichten (auf)",
    english: "to do without; to give up",
    pos: "verb",
    example: "Sie verzichtet auf Fleisch.",
  },
  {
    german: "sich beziehen (auf)",
    english: "to refer to",
    pos: "verb",
    example: "Der Bericht bezieht sich auf aktuelle Studien.",
  },
  {
    german: "widerspiegeln",
    english: "to reflect",
    pos: "verb",
    example: "Die Zahlen widerspiegeln den Trend deutlich.",
  },
  {
    german: "einschätzen",
    english: "to assess; to estimate",
    pos: "verb",
    example: "Es ist schwer, die Lage richtig einzuschätzen.",
  },
  {
    german: "sich anpassen",
    english: "to adapt",
    pos: "verb",
    example: "Unternehmen müssen sich schnell anpassen.",
  },
  {
    german: "gewährleisten",
    english: "to guarantee; to ensure",
    pos: "verb",
    example: "Die Firma muss die Sicherheit gewährleisten.",
  },
  {
    german: "vertreten",
    english: "to represent; to hold (a view)",
    pos: "verb",
    example: "Er vertritt eine klare Meinung.",
  },
  {
    german: "erweitern",
    english: "to expand",
    pos: "verb",
    example: "Die Firma möchte ihr Angebot erweitern.",
  },
  {
    german: "nachhaltig",
    english: "sustainable",
    pos: "adjective",
    example: "Wir brauchen eine nachhaltige Lösung.",
  },
  {
    german: "widersprüchlich",
    english: "contradictory",
    pos: "adjective",
    example: "Die Angaben sind widersprüchlich.",
  },
  {
    german: "unabhängig",
    english: "independent",
    pos: "adjective",
    example: "Sie möchte finanziell unabhängig sein.",
  },
  {
    german: "vielfältig",
    english: "diverse; varied",
    pos: "adjective",
    example: "Die Aufgaben im Job sind sehr vielfältig.",
  },
  {
    german: "angemessen",
    english: "appropriate; adequate",
    pos: "adjective",
    example: "Das Gehalt ist für die Arbeit angemessen.",
  },
  {
    german: "überzeugend",
    english: "convincing",
    pos: "adjective",
    example: "Sein Argument war sehr überzeugend.",
  },
  {
    german: "zuverlässig",
    english: "reliable",
    pos: "adjective",
    example: "Er ist ein sehr zuverlässiger Kollege.",
  },
  {
    german: "gleichzeitig",
    english: "at the same time; simultaneously",
    pos: "adjective",
    example: "Sie arbeitet und studiert gleichzeitig.",
  },
  {
    german: "allerdings",
    english: "however; though",
    pos: "adverb",
    example: "Ich stimme zu, allerdings mit Einschränkungen.",
  },
  {
    german: "trotzdem",
    english: "nevertheless",
    pos: "adverb",
    example: "Es regnete, trotzdem gingen wir spazieren.",
  },
  {
    german: "beispielsweise",
    english: "for example",
    pos: "adverb",
    example: "Man könnte beispielsweise mehr Bäume pflanzen.",
  },
  {
    german: "insbesondere",
    english: "in particular; especially",
    pos: "adverb",
    example: "Insbesondere junge Leute nutzen soziale Medien.",
  },
  {
    german: "sowohl … als auch",
    english: "both … and",
    pos: "conjunction",
    example: "Sie spricht sowohl Deutsch als auch Französisch.",
  },
  {
    german: "obwohl",
    english: "although",
    pos: "conjunction",
    example: "Obwohl es spät war, blieben wir noch.",
  },
];

/** Simulates extracting German vocabulary from uploaded photos. */
export function mockExtractVocab(): BankEntry[] {
  return [...WORD_BANK].sort(() => Math.random() - 0.5);
}
