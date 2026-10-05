export type PiperWorkerMessage =
  | { type: "progress"; id: number; loaded: number; total: number }
  | { type: "ready"; id: number }
  | { type: "result"; id: number; audio: Blob }
  | { type: "error"; id: number; message: string }
  | { type: "prefetch-progress"; id: number; completed: number; total: number; failed: number; done: boolean };

export interface PronunciationPrefetchProgress {
  completed: number;
  total: number;
  failed: number;
  done: boolean;
}

let sharedPiperWorker: Worker | null = null;
let nextRequestId = 1;

export function getPiperWorker() {
  sharedPiperWorker ??= new Worker(
    new URL("../components/modes/piper.worker.ts", import.meta.url),
    { type: "module" },
  );
  return sharedPiperWorker;
}

export function createPiperRequestId() {
  return nextRequestId++;
}

export function prefetchPronunciations(
  texts: string[],
  onProgress?: (progress: PronunciationPrefetchProgress) => void,
) {
  const uniqueTexts = [...new Set(texts.map((text) => text.trim()).filter(Boolean))];
  if (uniqueTexts.length === 0) {
    onProgress?.({ completed: 0, total: 0, failed: 0, done: true });
    return () => {};
  }

  const id = createPiperRequestId();
  let worker: Worker;
  try {
    worker = getPiperWorker();
  } catch {
    onProgress?.({ completed: 0, total: uniqueTexts.length, failed: uniqueTexts.length, done: true });
    return () => {};
  }

  const handleMessage = (event: MessageEvent<PiperWorkerMessage>) => {
    const message = event.data;
    if (message.id !== id || message.type !== "prefetch-progress") return;
    onProgress?.({
      completed: message.completed,
      total: message.total,
      failed: message.failed,
      done: message.done,
    });
    if (message.done) worker.removeEventListener("message", handleMessage);
  };

  worker.addEventListener("message", handleMessage);
  worker.postMessage({ type: "prefetch", id, texts: uniqueTexts });
  return () => {
    worker.removeEventListener("message", handleMessage);
    worker.postMessage({ type: "cancel-prefetch", id });
  };
}