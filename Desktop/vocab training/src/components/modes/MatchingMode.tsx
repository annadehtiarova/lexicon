"use client";

import { useEffect, useState } from "react";
import { VocabWord } from "@/lib/types";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

interface MatchingModeProps {
  words: VocabWord[];
  onCorrect: (id: string) => void;
  onBatchComplete: () => void;
}

interface Tile {
  key: string;
  wordId: string;
  label: string;
  side: "de" | "en";
}

const ROUND_SIZE = 6;

function shuffleWords(words: VocabWord[]) {
  return [...words].sort(() => Math.random() - 0.5);
}

function buildTiles(words: VocabWord[]): Tile[] {
  const tiles: Tile[] = words.slice(0, ROUND_SIZE).flatMap((w) => [
    { key: `${w.id}-de`, wordId: w.id, label: w.german, side: "de" as const },
    { key: `${w.id}-en`, wordId: w.id, label: w.english, side: "en" as const },
  ]);
  return tiles.sort(() => Math.random() - 0.5);
}

export default function MatchingMode({ words, onCorrect, onBatchComplete }: MatchingModeProps) {
  const [queue, setQueue] = useState(() => shuffleWords(words));
  const [tiles, setTiles] = useState<Tile[]>(() => buildTiles(words));
  const [selected, setSelected] = useState<Tile | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<[string, string] | null>(null);
  const [seconds, setSeconds] = useState(0);

  const isDone = matched.size === tiles.length && tiles.length > 0;

  useEffect(() => {
    if (isDone) return;
    const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [isDone]);

  useEffect(() => {
    if (!isDone) return;

    if (queue.length > ROUND_SIZE) {
      const nextQueue = queue.slice(ROUND_SIZE);
      setQueue(nextQueue);
      setTiles(buildTiles(nextQueue));
      setMatched(new Set());
      setSelected(null);
      setWrongPair(null);
      return;
    }

    onBatchComplete();
  }, [isDone, onBatchComplete, queue]);

  const reshuffle = () => {
    const nextQueue = shuffleWords(words);
    setQueue(nextQueue);
    setTiles(buildTiles(nextQueue));
    setMatched(new Set());
    setSelected(null);
    setWrongPair(null);
  };

  const handleClick = (tile: Tile) => {
    if (matched.has(tile.key) || wrongPair) return;

    if (!selected) {
      setSelected(tile);
      return;
    }

    if (selected.key === tile.key) {
      setSelected(null);
      return;
    }

    if (selected.wordId === tile.wordId && selected.side !== tile.side) {
      onCorrect(tile.wordId);
      setMatched((prev) => new Set(prev).add(selected.key).add(tile.key));
      setSelected(null);
    } else {
      setWrongPair([selected.key, tile.key]);
      setTimeout(() => setWrongPair(null), 600);
      setSelected(null);
    }
  };

  return (
    <div className="flex flex-col items-start pt-0">
      <div className="flex w-full justify-between text-sm text-[#5d6f74]"><span>◷ {seconds}s</span><span>{matched.size / 2} / {tiles.length / 2} pairs</span></div>

      <div className="mt-4 grid w-full grid-cols-2 gap-2 sm:grid-cols-3">
        {tiles.map((tile) => {
          const isMatched = matched.has(tile.key);
          const isSelected = selected?.key === tile.key;
          const isWrong = wrongPair?.includes(tile.key);
          return (
            <button
              key={tile.key}
              onClick={() => handleClick(tile)}
              disabled={isMatched}
              className={`flex min-h-[76px] items-center justify-center rounded-xl border px-3 py-3 text-center text-sm font-medium transition-all ${
                isMatched
                  ? "border-[#b8d34c] bg-[#d8f56d] text-[#172b35]"
                  : isWrong
                    ? "border-red-400 bg-red-500/10 text-[#a63d2d]"
                    : isSelected
                      ? "border-[#b8d34c] bg-[#d8f56d]/45 text-[#172b35]"
                      : "border-[#b8c8c9] bg-white text-[#172b35] hover:-translate-y-0.5 hover:border-[#263fd6]"
              }`}
            >
              {tile.label}
            </button>
          );
        })}
      </div>

      {isDone && (
        <div className="mt-5 flex w-full flex-col items-center gap-3 rounded-2xl border border-[rgba(198,233,64,0.3)] px-5 py-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-[#315500]"><CheckIcon /> {queue.length > ROUND_SIZE ? "Round complete" : "All words matched"}</p>
          <button
            onClick={reshuffle}
            className="flex h-9 items-center gap-2 rounded-full bg-[#d8f56d] px-4 text-sm font-semibold text-[#172b35]"
          >
            <ArrowRightIcon /> Play again
          </button>
        </div>
      )}
    </div>
  );
}
