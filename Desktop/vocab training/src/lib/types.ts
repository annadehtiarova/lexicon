export interface VocabWord {
  id: string;
  german: string;
  english: string;
  example: string;
  pos: string;
}

export interface StudySet {
  id: string;
  name: string;
  createdAt: number;
  sourceImageCount: number;
  words: VocabWord[];
  masteredWordIds: string[];
}
