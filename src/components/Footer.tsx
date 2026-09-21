"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#08080a]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          © 2026 Swastik S. Karabashettar
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          Built in Bengaluru · Next.js &amp; a lot of curiosity
        </p>
        <button
          onClick={scrollToTop}
          className="group inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white"
        >
          <span>Back to top</span>
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
