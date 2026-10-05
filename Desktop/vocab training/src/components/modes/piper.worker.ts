import { CachedFileReader, TtsSession } from "@jtsage/piper-tts-web";
import { cachePronunciation, getCachedPronunciation } from "@/lib/speechAudioCache";

const VOICE_ID = "de_DE-thorsten-high";

type SpeechRequest =
  | { type: "prepare"; id: number }
  | { type: "prefetch"; id: number; texts: string[] }
  | { type: "cancel-prefetch"; id: number }
  | { type: "speak"; id: number; text: string }
  | { type: "cancel"; id: number };

type WorkerResponse =
  | { type: "progress"; id: number; loaded: number; total: number }
  | { type: "ready"; id: number }
  | { type: "result"; id: number; audio: Blob }
  | { type: "error"; id: number; message: string }
  | { type: "prefetch-progress"; id: number; completed: number; total: number; failed: number; done: boolean };

interface PrefetchTask {
  id: number;
  text: string;
}

interface PrefetchJob {
  total: number;
  completed: number;
  failed: number;
}

let activeSpeechRequestId: number | null = null;
let pendingRequest: Extract<SpeechRequest, { type: "speak" }> | null = null;
const prefetchQueue: PrefetchTask[] = [];
const prefetchJobs = new Map<number, PrefetchJob>();
let isProcessing = false;
let sessionPromise: Promise<TtsSession> | null = null;

const fileReader = new CachedFileReader({
  progress: ({ loaded, total }) => {
    if (activeSpeechRequestId !== null) {
      self.postMessage({
        type: "progress",
        id: activeSpeechRequestId,
        loaded,
        total,
      } satisfies WorkerResponse);
    }
  },
});

function getSession() {
  sessionPromise ??= TtsSession.create({ voiceId: VOICE_ID, fileReader });
  return sessionPromise;
}

async function processRequests() {
  if (isProcessing) return;
  isProcessing = true;

  while (pendingRequest || prefetchQueue.length > 0) {
    const request = pendingRequest;
    if (request) pendingRequest = null;
    try {
      if (request) {
        let audio = await getCachedPronunciation(request.text);
        if (!audio) {
          const session = await getSession();
          audio = await session.predict(request.text);
          await cachePronunciation(request.text, audio);
        }
        if (request.id === activeSpeechRequestId) {
          self.postMessage({ type: "result", id: request.id, audio } satisfies WorkerResponse);
          activeSpeechRequestId = null;
        }
      } else {
        const task = prefetchQueue.shift();
        if (!task) continue;
        const job = prefetchJobs.get(task.id);
        if (!job) continue;

        try {
          let audio = await getCachedPronunciation(task.text);
          if (!audio) {
            const session = await getSession();
            audio = await session.predict(task.text);
            await cachePronunciation(task.text, audio);
          }
        } catch {
          job.failed += 1;
        }

        job.completed += 1;
        const done = job.completed >= job.total;
        self.postMessage({
          type: "prefetch-progress",
          id: task.id,
          completed: job.completed,
          total: job.total,
          failed: job.failed,
          done,
        } satisfies WorkerResponse);
        if (done) prefetchJobs.delete(task.id);
      }
    } catch (error) {
      if (request && request.id === activeSpeechRequestId) {
        self.postMessage({
          type: "error",
          id: request.id,
          message: error instanceof Error ? error.message : "German voice could not be loaded.",
        } satisfies WorkerResponse);
        activeSpeechRequestId = null;
      }
    }
  }

  isProcessing = false;
  if (pendingRequest || prefetchQueue.length > 0) void processRequests();
}

self.addEventListener("message", (event: MessageEvent<SpeechRequest>) => {
  if (event.data.type === "cancel") {
    if (activeSpeechRequestId === event.data.id) {
      activeSpeechRequestId = null;
      if (pendingRequest?.id === event.data.id) pendingRequest = null;
    }
    return;
  }
  if (event.data.type === "prepare") {
    void getSession().then(
      () => self.postMessage({ type: "ready", id: event.data.id } satisfies WorkerResponse),
      (error: unknown) =>
        self.postMessage({
          type: "error",
          id: event.data.id,
          message: error instanceof Error ? error.message : "German voice could not be loaded.",
        } satisfies WorkerResponse),
    );
    return;
  }
  if (event.data.type === "cancel-prefetch") {
    prefetchJobs.delete(event.data.id);
    for (let index = prefetchQueue.length - 1; index >= 0; index -= 1) {
      if (prefetchQueue[index].id === event.data.id) prefetchQueue.splice(index, 1);
    }
    return;
  }
  if (event.data.type === "prefetch") {
    const texts = [...new Set(event.data.texts.map((text) => text.trim()).filter(Boolean))];
    if (texts.length === 0) {
      self.postMessage({
        type: "prefetch-progress",
        id: event.data.id,
        completed: 0,
        total: 0,
        failed: 0,
        done: true,
      } satisfies WorkerResponse);
      return;
    }
    prefetchJobs.set(event.data.id, { total: texts.length, completed: 0, failed: 0 });
    prefetchQueue.push(...texts.map((text) => ({ id: event.data.id, text })));
    void processRequests();
    return;
  }
  if (event.data.type !== "speak") return;
  activeSpeechRequestId = event.data.id;
  pendingRequest = event.data;
  void processRequests();
});