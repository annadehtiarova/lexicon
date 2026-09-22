import { createWorker } from "tesseract.js";
import { WORD_BANK } from "@/lib/wordBank";

export interface ExtractedWord {
  german: string;
  english: string;
  pos: string;
  example: string;
}

export interface ExtractResult {
  topic: string;
  words: ExtractedWord[];
}

async function prepareImage(file: File): Promise<File> {
  const bitmap = await createImageBitmap(file);

  const maxDimension = 1600;
  const scale = Math.min(
    1,
    maxDimension / Math.max(bitmap.width, bitmap.height),
  );

  if (scale === 1) {
    bitmap.close();
    return file;
  }

  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);

  const context = canvas.getContext("2d");

  if (!context) {
    bitmap.close();
    return file;
  }

  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", 0.85),
  );

  return blob
    ? new File([blob], `${file.name}.jpg`, { type: "image/jpeg" })
    : file;
}

function normalizeWord(word: string): string {
  return word
    .toLowerCase()
    .trim()
    .replace(/[.,;:!?()[\]{}"„“”]/g, "")
    .replace(/\s+/g, " ");
}

function removeArticle(word: string): string {
  return word
    .replace(/^(der|die|das|den|dem|des|ein|eine|einer|einem|einen)\s+/i, "")
    .trim();
}

function findVocabulary(text: string): ExtractedWord[] {
  const normalizedText = normalizeWord(text);

  const matches: ExtractedWord[] = [];
  const seen = new Set<string>();

  for (const entry of WORD_BANK) {
    const variants = [
      entry.german,
      removeArticle(entry.german),
    ];

    const found = variants.some((variant) =>
      normalizedText.includes(normalizeWord(variant)),
    );

    if (!found) continue;

    const key = normalizeWord(entry.german);

    if (seen.has(key)) continue;
    seen.add(key);

    matches.push({
      german: entry.german,
      english: entry.english,
      pos: entry.pos,
      example: entry.example,
    });
  }

  return matches;
}

export async function extractVocabFromImages(
  files: File[],
): Promise<ExtractResult> {
  if (files.length === 0) {
    throw new Error("No images selected");
  }

  const worker = await createWorker("deu");

  try {
    const preparedFiles = await Promise.all(
      files.map(prepareImage),
    );

    const recognizedText: string[] = [];

    for (const file of preparedFiles) {
      const result = await worker.recognize(file);
      recognizedText.push(result.data.text);
    }

    const text = recognizedText.join("\n");

    if (!text.trim()) {
      throw new Error("No text could be detected in the image");
    }

    const words = findVocabulary(text);

    if (words.length === 0) {
      throw new Error(
        "No B2 vocabulary from the vocabulary bank was found in the image",
      );
    }

    return {
      topic: "Extracted vocabulary",
      words,
    };
  } finally {
    await worker.terminate();
  }
}
