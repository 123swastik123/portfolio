"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Check, Copy, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#f59e0b", "#10b981", "#ffffff"],
      });
      setTimeout(() => setCopied(false), 2600);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      <div className="rounded-3xl bg-gradient-to-b from-[#111116] to-[#0a0a0d] border border-zinc-800/90 p-8 sm:p-16 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to AI Engineering & Research Opportunities</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Let&apos;s build something thoughtful together.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
            Whether you are working on local model fine-tuning, deterministic RAG pipelines, or media
            automation—or looking for a curious, hands-on student engineer in Bengaluru—I&apos;d love to
            connect.
          </p>

          {/* Email Copy Box */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div
              onClick={handleCopy}
              className="group flex items-center justify-between gap-4 px-5 py-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-all"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                <span className="text-sm font-mono font-medium text-zinc-200 selection:bg-amber-400 selection:text-black">
                  {PERSONAL_INFO.email}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </div>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-medium text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <span>Send Direct Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 font-mono text-sm transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Location & Response Expectation */}
          <div className="pt-6 border-t border-zinc-800/60 flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>Based in {PERSONAL_INFO.location}</span>
            </div>
            <span>•</span>
            <span>Typical Response: Within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
