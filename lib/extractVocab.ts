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
  const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
  if (scale === 1) { bitmap.close(); return file; }
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const context = canvas.getContext("2d");
  if (!context) { bitmap.close(); return file; }
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.82));
  return blob ? new File([blob], `${file.name}.jpg`, { type: "image/jpeg" }) : file;
}

export async function extractVocabFromImages(files: File[]): Promise<ExtractResult> {
  const formData = new FormData();
  const preparedFiles = await Promise.all(files.map(prepareImage));
  preparedFiles.forEach((file) => formData.append("images", file));
  const res = await fetch("/api/extract", { method: "POST", body: formData });
  const data = await res.json();
  if (!res.ok || !Array.isArray(data.words) || data.words.length === 0) {
    throw new Error(data.error ?? "Extraction failed");
  }
  return { topic: data.topic ?? "", words: data.words };
}
