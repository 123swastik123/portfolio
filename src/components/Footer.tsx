"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Terminal, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 sm:px-8 max-w-6xl mx-auto border-t border-zinc-800/80 text-xs font-mono text-zinc-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Attribution */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-zinc-300 font-semibold">{PERSONAL_INFO.name}</span>
          <span className="hidden sm:inline text-zinc-700">/</span>
          <span>B.Tech AI & Data Science • UVCE Bengaluru</span>
        </div>

        {/* Center: Coordinates */}
        <div className="text-center text-zinc-400">
          <span>{PERSONAL_INFO.coordinates}</span>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="mt-8 text-center text-zinc-400 text-[11px]">
        Built with Next.js, TypeScript & Tailwind CSS • No generic templates • Inspired by Dribbble editorial minimalism
      </div>
    </footer>
  );
}
