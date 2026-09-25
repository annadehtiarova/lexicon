import { mockExtractVocab } from "./wordBank";

export interface ExtractedWord {
  german: string;
  english: string;
  pos: string;
  example: string;
}

export interface ExtractResult {
  topic: string;
  words: ExtractedWord[];
  usedFallback: boolean;
}

/** Sends photos to the local Ollama vision model; falls back to the mock word bank if it's unavailable. */
export async function extractVocabFromImages(files: File[]): Promise<ExtractResult> {
  try {
    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));

    const res = await fetch("/api/extract", { method: "POST", body: formData });
    const data = await res.json();

    if (!res.ok || !Array.isArray(data.words) || data.words.length === 0) {
      throw new Error(data.error ?? "Extraction failed");
    }

    return { topic: data.topic ?? "", words: data.words, usedFallback: false };
  } catch {
    return { topic: "", words: mockExtractVocab(), usedFallback: true };
  }
}
