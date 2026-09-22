import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { WORD_BANK } from "@/lib/wordBank";

export const runtime = "nodejs";

const OCR_TIMEOUT_MS = 45_000;
let paddleWorker: ReturnType<typeof spawn> | null = null;
let paddleBuffer = "";
let paddleRequest: {
  resolve: (result: { text: string; words: ExtractedWord[] }) => void;
  reject: (error: Error) => void;
} | null = null;

interface ExtractedWord {
  german: string;
  english: string;
  pos: string;
  example: string;
}

function getPython(): string {
  const candidates = [
    process.env.PADDLEOCR_PYTHON,
    path.join(process.cwd(), ".venv/bin/python"),
    "/tmp/lexikon-paddle-venv/bin/python",
    "python3.13",
  ].filter((value): value is string => Boolean(value));
  return candidates.find((value) => value.includes("/") ? existsSync(value) : true) ?? "python3.13";
}

function runPaddleOcr(images: string[]): Promise<{ text: string; words: ExtractedWord[] }> {
  return new Promise((resolve, reject) => {
    if (paddleRequest) {
      reject(new Error("PaddleOCR is already processing another request"));
      return;
    }

    if (!paddleWorker) {
      const worker = spawn(getPython(), [path.join(process.cwd(), "scripts/paddle_ocr.py")]);
      paddleWorker = worker;
      worker.stdout.on("data", (chunk: Buffer) => {
        paddleBuffer += chunk.toString();
        while (paddleRequest && paddleBuffer.includes("\n")) {
          const newline = paddleBuffer.indexOf("\n");
          const line = paddleBuffer.slice(0, newline);
          paddleBuffer = paddleBuffer.slice(newline + 1);
          try {
            const result = JSON.parse(line) as { text?: string; words?: ExtractedWord[]; error?: string };
            if (result.error) throw new Error(result.error);
            paddleRequest.resolve({ text: result.text?.trim() ?? "", words: result.words ?? [] });
          } catch (error) {
            paddleRequest.reject(error instanceof Error ? error : new Error("PaddleOCR failed"));
          }
          paddleRequest = null;
        }
      });
      const stop = (error: Error) => {
        paddleRequest?.reject(error);
        paddleRequest = null;
        paddleWorker = null;
      };
      worker.on("error", stop);
      worker.on("exit", () => stop(new Error("PaddleOCR worker stopped")));
    }

    const timeout = setTimeout(() => {
      paddleWorker?.kill("SIGTERM");
      paddleWorker = null;
      paddleBuffer = "";
      paddleRequest = null;
      reject(new Error("PaddleOCR took too long to respond"));
    }, OCR_TIMEOUT_MS);
    paddleRequest = {
      resolve: (result) => { clearTimeout(timeout); resolve(result); },
      reject: (error) => { clearTimeout(timeout); reject(error); },
    };
    if (!paddleWorker?.stdin) {
      paddleRequest = null;
      clearTimeout(timeout);
      reject(new Error("PaddleOCR worker is unavailable"));
      return;
    }
    paddleWorker.stdin.write(`${JSON.stringify({
      images,
      translation_overrides: WORD_BANK.map(({ german, english }) => ({ german, english })),
    })}\n`);
  });
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = formData.getAll("images").filter((file): file is File => file instanceof File);
  if (files.length === 0) return NextResponse.json({ error: "No images provided" }, { status: 400 });

  const images = await Promise.all(files.map(async (file) => Buffer.from(await file.arrayBuffer()).toString("base64")));
  try {
    const result = await runPaddleOcr(images);
    if (!result.text) return NextResponse.json({ error: "PaddleOCR found no text in the image" }, { status: 422 });
    if (result.words.length === 0) return NextResponse.json({ error: "No vocabulary words could be extracted" }, { status: 422 });
    return NextResponse.json({ topic: "Extracted vocabulary", words: result.words });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "PaddleOCR failed" }, { status: 503 });
  }
}
