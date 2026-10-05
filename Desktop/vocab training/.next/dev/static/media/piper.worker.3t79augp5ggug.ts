import { CachedFileReader, TtsSession } from "@jtsage/piper-tts-web";

const VOICE_ID = "de_DE-thorsten-high";

type SpeechRequest =
  | { type: "prepare"; id: number }
  | { type: "speak"; id: number; text: string }
  | { type: "cancel"; id: number };

type WorkerResponse =
  | { type: "progress"; id: number; loaded: number; total: number }
  | { type: "ready"; id: number }
  | { type: "result"; id: number; audio: Blob }
  | { type: "error"; id: number; message: string };

let currentRequestId = 0;
let pendingRequest: Extract<SpeechRequest, { type: "speak" }> | null = null;
let isProcessing = false;
let sessionPromise: Promise<TtsSession> | null = null;

const fileReader = new CachedFileReader({
  progress: ({ loaded, total }) => {
    self.postMessage({
      type: "progress",
      id: currentRequestId,
      loaded,
      total,
    } satisfies WorkerResponse);
  },
});

function getSession() {
  sessionPromise ??= TtsSession.create({ voiceId: VOICE_ID, fileReader });
  return sessionPromise;
}

async function processRequests() {
  if (isProcessing) return;
  isProcessing = true;

  while (pendingRequest) {
    const request = pendingRequest;
    pendingRequest = null;

    try {
      const session = await getSession();
      if (request.id !== currentRequestId) continue;

      const audio = await session.predict(request.text);
      if (request.id === currentRequestId) {
        self.postMessage({ type: "result", id: request.id, audio } satisfies WorkerResponse);
      }
    } catch (error) {
      if (request.id === currentRequestId) {
        self.postMessage({
          type: "error",
          id: request.id,
          message: error instanceof Error ? error.message : "German voice could not be loaded.",
        } satisfies WorkerResponse);
      }
    }
  }

  isProcessing = false;
}

self.addEventListener("message", (event: MessageEvent<SpeechRequest>) => {
  currentRequestId = event.data.id;
  if (event.data.type === "cancel") {
    pendingRequest = null;
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
  if (event.data.type !== "speak") return;
  pendingRequest = event.data;
  void processRequests();
});