"use client";

import { Sparkle } from "lucide-react";

const TICKER_ITEMS = [
  "Generative AI",
  "LLM integration",
  "Local models",
  "Machine learning",
  "Automation",
  "Prototyping",
  "Linux",
  "FastAPI",
  "Next.js",
  "Python",
  "Supabase",
  "OpenCV",
  "Faster-Whisper",
];

export default function MarqueeTicker() {
  return (
    <div className="relative overflow-hidden border-y border-zinc-800/80 bg-[#09090c] py-4">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8 select-none">
        {/* First repetition */}
        {TICKER_ITEMS.map((item, idx) => (
          <span
            key={`ticker-1-${idx}`}
            className="flex items-center gap-8 whitespace-nowrap font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-zinc-400"
          >
            <span>{item}</span>
            <Sparkle className="h-3 w-3 text-[#c8f45e] shrink-0" />
          </span>
        ))}
        {/* Second repetition for seamless loop */}
        {TICKER_ITEMS.map((item, idx) => (
          <span
            key={`ticker-2-${idx}`}
            className="flex items-center gap-8 whitespace-nowrap font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-zinc-400"
          >
            <span>{item}</span>
            <Sparkle className="h-3 w-3 text-[#c8f45e] shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
