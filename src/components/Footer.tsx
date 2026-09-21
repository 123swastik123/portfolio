"use client";

import { ArrowUp, Mail, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#08080a]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          © 2026 Swastik.S.Karabashettar
        </p>

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          Built in Bengaluru · Next.js &amp; curiosity
        </p>

        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs lowercase tracking-normal text-zinc-400 hover:text-[#c8f45e] transition-colors"
            title="Open Gmail to email swastikarabashettar@gmail.com"
          >
            <Mail className="h-3.5 w-3.5 text-[#c8f45e] shrink-0" />
            <span className="lowercase font-mono">{PERSONAL_INFO.email}</span>
            <ArrowUpRight className="h-3 w-3 text-zinc-600 hover:text-[#c8f45e]" />
          </a>

          <button
            onClick={scrollToTop}
            className="group inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
