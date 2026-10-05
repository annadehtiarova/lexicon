"use client";

import { useEffect, useRef, useState } from "react";
import { VocabWord } from "@/lib/types";
import {
  createPiperRequestId,
  getPiperWorker,
  PiperWorkerMessage,
} from "@/lib/piperClient";
import { getCachedPronunciation } from "@/lib/speechAudioCache";
import { displayGerman } from "@/lib/wordDisplay";
import {
  ChevronLeftIcon,
  CheckIcon,
  XIcon,
  ArrowRightIcon,
  SpeakerIcon,
} from "@/components/icons";

interface CardsModeProps {
  words: VocabWord[];
  onCorrect: (id: string) => void;
  onBatchComplete: () => void;
}

export default function CardsMode({
  words,
  onCorrect,
  onBatchComplete,
}: CardsModeProps) {
  const germanVoicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const piperWorkerRef = useRef<Worker | null>(null);
  const speechRequestIdRef = useRef(0);
  const messageListenerRef = useRef<((event: MessageEvent<PiperWorkerMessage>) => void) | null>(null);
  const errorListenerRef = useRef<(() => void) | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);
  const cachedAudioRef = useRef<{ text: string; blob: Blob } | null>(null);
  const [cardOrder, setCardOrder] = useState(() => words);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [isLoadingSpeech, setIsLoadingSpeech] = useState(false);
  const [speechProgress, setSpeechProgress] = useState<number | null>(null);
  const [speechNotice, setSpeechNotice] = useState<string | null>(null);
  const word = cardOrder[index];
  const total = cardOrder.length;
  const progress = total > 1 ? (index / (total - 1)) * 100 : 100;

  const resetSpeech = () => {
    const requestId = createPiperRequestId();
    speechRequestIdRef.current = requestId;
    const worker = piperWorkerRef.current;
    worker?.postMessage({ type: "cancel", id: requestId });
    if (messageListenerRef.current) {
      worker?.removeEventListener("message", messageListenerRef.current);
      messageListenerRef.current = null;
    }
    if (errorListenerRef.current) {
      worker?.removeEventListener("error", errorListenerRef.current);
      errorListenerRef.current = null;
    }
    audioRef.current?.pause();
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    audioRef.current = null;
    audioUrlRef.current = null;
    cachedAudioRef.current = null;
    setIsLoadingSpeech(false);
    setSpeechProgress(null);
    setSpeechNotice(null);
  };

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;

    const updateVoices = () => {
      germanVoicesRef.current = window.speechSynthesis
        .getVoices()
        .filter((voice) => /^de(?:-|$)/i.test(voice.lang));
    };

    updateVoices();
    window.speechSynthesis.addEventListener("voiceschanged", updateVoices);
    return () =>
      window.speechSynthesis.removeEventListener("voiceschanged", updateVoices);
  }, []);

  useEffect(
    () => () => {
      audioRef.current?.pause();
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    },
    [],
  );

  const advance = () => {
    resetSpeech();
    setFlipped(false);
    if (index === total - 1) {
      onBatchComplete();
      return;
    }
    setIndex((i) => Math.min(i + 1, total - 1));
  };

  const goBack = () => {
    resetSpeech();
    setFlipped(false);
    setIndex((i) => Math.max(i - 1, 0));
  };

  const handleAgain = () => {
    resetSpeech();
    const remaining = cardOrder.filter((card) => card.id !== word.id);
    const insertionIndex = Math.min(index + 5, remaining.length);
    remaining.splice(insertionIndex, 0, word);
    setCardOrder(remaining);
    setFlipped(false);
    setIndex(Math.min(index, Math.max(remaining.length - 1, 0)));
  };

  const speakWithSystemVoice = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const speech = window.speechSynthesis;
    if (speech.speaking || speech.pending) speech.cancel();
    if (speech.paused) speech.resume();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = germanVoicesRef.current.length
      ? germanVoicesRef.current
      : speech.getVoices().filter((voice) => /^de(?:-|$)/i.test(voice.lang));
    const exactLocaleVoices = voices.filter(
      (voice) => voice.lang.toLowerCase() === "de-de",
    );
    const candidates = exactLocaleVoices.length ? exactLocaleVoices : voices;
    const preferredName = /natural|premium|enhanced|neural|google|eddy|flo/i;
    const preferredVoice = [...candidates].sort(
      (left, right) =>
        Number(preferredName.test(right.name)) -
        Number(preferredName.test(left.name)),
    )[0];

    utterance.lang = preferredVoice?.lang ?? "de-DE";
    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.rate = 0.9;
    speech.speak(utterance);
  };

  const playPiperAudio = (blob: Blob) => {
    audioRef.current?.pause();
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);

    const audioUrl = URL.createObjectURL(blob);
    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    audioUrlRef.current = audioUrl;
    audio.onended = () => {
      if (audioUrlRef.current !== audioUrl) return;
      URL.revokeObjectURL(audioUrl);
      audioRef.current = null;
      audioUrlRef.current = null;
    };
    void audio.play().then(
      () => setSpeechNotice(null),
      () => {
        setSpeechNotice("Natural voice is ready. Tap the speaker again to play it.");
      },
    );
  };

  const speakGerman = () => {
    const text = displayGerman(word);
    const cachedAudio = cachedAudioRef.current;
    if (cachedAudio?.text === text) {
      playPiperAudio(cachedAudio.blob);
      return;
    }

    const requestId = createPiperRequestId();
    speechRequestIdRef.current = requestId;
    void (async () => {
      const cached = await getCachedPronunciation(text);
      if (requestId !== speechRequestIdRef.current) return;
      if (cached) {
        cachedAudioRef.current = { text, blob: cached };
        playPiperAudio(cached);
        return;
      }

      let worker = piperWorkerRef.current;
      if (!worker) {
        try {
          worker = getPiperWorker();
          piperWorkerRef.current = worker;
        } catch {
          setSpeechNotice("Natural voice could not start. Using the browser voice.");
          speakWithSystemVoice(text);
          return;
        }
      }

      setIsLoadingSpeech(true);
      setSpeechProgress(0);
      setSpeechNotice(null);
      const handleMessage = (event: MessageEvent<PiperWorkerMessage>) => {
        const result = event.data;
        if (result.id !== speechRequestIdRef.current) return;

        if (result.type === "progress") {
          setSpeechProgress(
            result.total > 0
              ? Math.min(100, Math.round((result.loaded / result.total) * 100))
              : null,
          );
          return;
        }
        if (result.type === "ready") return;

        setIsLoadingSpeech(false);
        setSpeechProgress(null);
        worker.removeEventListener("message", handleMessage);
        worker.removeEventListener("error", handleError);
        messageListenerRef.current = null;
        errorListenerRef.current = null;
        if (result.type === "result") {
          cachedAudioRef.current = { text, blob: result.audio };
          playPiperAudio(result.audio);
          return;
        }

        setSpeechNotice("Natural voice unavailable. Using the browser voice.");
        speakWithSystemVoice(text);
      };
      const handleError = () => {
        if (requestId !== speechRequestIdRef.current) return;
        worker.removeEventListener("message", handleMessage);
        worker.removeEventListener("error", handleError);
        messageListenerRef.current = null;
        errorListenerRef.current = null;
        setIsLoadingSpeech(false);
        setSpeechProgress(null);
        setSpeechNotice("Natural voice unavailable. Using the browser voice.");
        speakWithSystemVoice(text);
      };
      messageListenerRef.current = handleMessage;
      errorListenerRef.current = handleError;
      worker.addEventListener("message", handleMessage);
      worker.addEventListener("error", handleError);
      worker.postMessage({ type: "speak", id: requestId, text });
    })();
  };

  return (
    <div className="flex flex-col items-start pt-0">
      <div className="mb-2 flex w-full items-center justify-between text-xs text-[#5d6f74]">
        <span>CARD {index + 1}</span>
        <span>{index + 1}/{total}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#d5ddd7]">
        <div
          className="h-full rounded-full bg-[#263fd6] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative w-full pt-4">
        <button
          type="button"
          onClick={speakGerman}
          disabled={isLoadingSpeech}
          aria-label={
            isLoadingSpeech
              ? "Loading natural German pronunciation"
              : `Hear pronunciation of ${word.german}`
          }
          title={speechNotice ?? "Hear pronunciation"}
          className="absolute right-3 top-7 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#b8c8c9] bg-white text-[#263fd6] hover:bg-[#eef1ff] disabled:cursor-wait disabled:opacity-70"
        >
          {isLoadingSpeech ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
          ) : (
            <SpeakerIcon className="h-4 w-4" />
          )}
        </button>
        <button
          onClick={() => setFlipped((f) => !f)}
          className="flex min-h-[158px] w-full flex-col items-center justify-center gap-2 border border-[#dce4bd] bg-[#f8fbdc] px-6 py-8 text-center shadow-none"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(248,251,220,0.8))",
          }}
        >
          <p className="font-body text-xs uppercase tracking-[2.4px] text-[#5d6f74]">
            {flipped ? "English" : "German"}
          </p>
          <p className="font-heading text-2xl tracking-[-0.4px] text-[#172b35]">
            {flipped ? word.english : word.german}
          </p>
          <p className="font-body text-xs text-[#5d6f74]">
            Tap the card to reveal
          </p>
        </button>
      </div>

      {(isLoadingSpeech || speechNotice) && (
        <p role="status" className="mt-2 text-xs text-[#5d6f74]">
          {isLoadingSpeech
            ? `Preparing natural German voice${speechProgress === null ? "…" : ` · ${speechProgress}%`}`
            : speechNotice}
        </p>
      )}

      <div className="flex w-full items-center justify-between pt-4">
        <button
          onClick={goBack}
          disabled={index === 0}
          className="flex h-9 w-9 items-center justify-center gap-2 rounded-full border border-[#9bb8bc] bg-white py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(38,63,214,0.08)] disabled:opacity-45 sm:w-auto sm:px-4"
          aria-label="Back"
          title="Back"
        >
          <ChevronLeftIcon /> <span className="hidden sm:inline">Back</span>
        </button>

        <div className="flex items-start gap-2">
          <button
            onClick={handleAgain}
            className="flex h-9 items-center gap-2 rounded-full border border-[#9bb8bc] bg-white px-4 py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(38,63,214,0.08)] hover:border-[#263fd6] hover:text-[#263fd6]"
          >
            <CheckIcon /> Forgot
          </button>
          <button
            onClick={() => {
              onCorrect(word.id);
              advance();
            }}
            className="flex h-9 items-center gap-2 rounded-full bg-[#d8f56d] px-4 py-2 text-sm font-semibold text-[#172b35]"
          >
            <XIcon /> I know it
          </button>
        </div>

        <button
          type="button"
          onClick={advance}
          className="flex h-9 w-9 items-center justify-center gap-2 rounded-full border border-[#9bb8bc] bg-white py-2 text-sm font-medium text-[#5d6f74] shadow-[2px_2px_0_rgba(38,63,214,0.08)] hover:border-[#263fd6] hover:text-[#263fd6] sm:w-auto sm:px-4"
          aria-label="Next"
          title="Next"
        >
          <span className="hidden sm:inline">Next</span> <ChevronLeftIcon className="h-4 w-4 shrink-0 rotate-180" />
        </button>
      </div>

      {index === total - 1 && (
        <button
          type="button"
          onClick={onBatchComplete}
          className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#d8f56d] text-sm font-semibold text-[#172b35]"
        >
          Next exercise <ArrowRightIcon />
        </button>
      )}
    </div>
  );
}
