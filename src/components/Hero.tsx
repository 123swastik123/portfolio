"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowDown, FileText, ArrowUpRight, Terminal, Mail } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[95vh] flex flex-col justify-between pt-36 pb-12 px-6 sm:px-10 max-w-[1400px] mx-auto overflow-hidden">
      {/* Background Subtle Radial Glow & Cyber Vector Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 0%, rgba(200,244,94,0.08), transparent 70%), radial-gradient(40% 40% at 15% 90%, rgba(6,182,212,0.05), transparent 60%)",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-cyber-grid opacity-60" />

      {/* Floating Ambient Vector Cyber Accents (Desktop) */}
      <div aria-hidden="true" className="pointer-events-none absolute top-28 right-8 hidden lg:flex flex-col items-end gap-1.5 font-mono text-[10px] text-zinc-600 select-none">
        <div className="flex items-center gap-2">
          <span className="text-[#c8f45e]/60">+</span>
          <span className="tracking-widest">SYS_NODE // 12.9716°N · 77.5946°E</span>
        </div>
        <div className="flex items-center gap-1.5 text-zinc-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>UVCE_AI_DS_CORE // ACTIVE</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="w-full relative">
        {/* Futuristic Corner Vector Brackets */}
        <div className="pointer-events-none absolute -top-8 -left-4 w-8 h-8 border-t-2 border-l-2 border-zinc-800/80 hidden sm:block" />
        <div className="pointer-events-none absolute -top-8 -right-4 w-8 h-8 border-t-2 border-r-2 border-zinc-800/80 hidden sm:block" />

        {/* Top Status & Live Telemetry Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-zinc-400"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8f45e] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#c8f45e]" />
            </span>
            <span>Open to internships &amp; projects</span>
          </motion.div>

          {/* Floating High-Tech Vector Pill Badges */}
          <div className="hidden md:flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
            <span className="animate-float-vector px-2.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.15)] flex items-center gap-1.5">
              <svg className="w-2.5 h-2.5 text-cyan-400 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12" />
              </svg>
              <span>21-LM CV · Vision AI</span>
            </span>
            <span className="animate-float-alt px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.15)] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>FastAPI · Local LLMs</span>
            </span>
          </div>
        </div>

        {/* Massive Bold Uppercase Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="break-words text-[clamp(2.4rem,8.2vw,7.8rem)] font-bold leading-[0.98] tracking-[-0.03em] uppercase text-white"
        >
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="inline-block">
              SWASTIK<span className="text-[#c8f45e]">.</span>S<span className="text-[#c8f45e]">.</span>
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="inline-block">KARABASHETTAR</span>
            <span className="inline-block text-[#c8f45e]">.</span>
          </span>
        </motion.h1>

        {/* Editorial Subtext & Academic Metadata Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid gap-8 md:grid-cols-12 md:items-end border-b border-zinc-800/80 pb-12"
        >
          <p className="max-w-xl font-serif text-2xl italic leading-snug text-zinc-100/90 md:col-span-7 md:text-3xl">
            An AI &amp; data science student who likes to take new ideas —{" "}
            <span className="text-[#c8f45e]">especially ones that involve AI</span> — and turn them into things that actually work.
          </p>
          <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 md:col-span-5 md:items-end">
            <span className="text-zinc-200">B.Tech · AI &amp; Data Science</span>
            <span>UVCE, Bengaluru</span>
            <span className="text-[#c8f45e]/90 font-medium">Class of 2029</span>
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-[0_0_24px_rgba(255,255,255,0.15)]"
          >
            <span>Selected Projects</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Email / Gmail button */}
          <a
            href={PERSONAL_INFO.gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#c8f45e] hover:bg-[#d6f87d] text-zinc-950 font-bold text-xs sm:text-sm font-mono transition-all shadow-[0_0_20px_rgba(200,244,94,0.2)]"
            title="Compose email to Swastik in Gmail"
          >
            <Mail className="w-4 h-4 text-zinc-950 shrink-0" />
            <span className="uppercase tracking-wider">Email (Gmail)</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </a>

          {/* Actual Resume PDF */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#121216] hover:bg-[#1a1a20] text-zinc-200 hover:text-white border border-zinc-800 hover:border-[#c8f45e]/50 text-xs sm:text-sm font-mono uppercase tracking-wider transition-all"
            title="View Resume PDF"
          >
            <FileText className="w-4 h-4 text-[#c8f45e]" />
            <span>View Resume (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#121216] text-zinc-300 hover:text-white hover:bg-[#1a1a20] border border-zinc-800 text-xs sm:text-sm font-mono uppercase tracking-wider transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="#lab"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-dashed border-zinc-800 text-xs sm:text-sm font-mono uppercase tracking-wider transition-all"
          >
            <Terminal className="w-3.5 h-3.5 text-[#c8f45e]" />
            <span>Interactive AI Lab</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Minimal Editorial Meta Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="pt-10 flex w-full items-end justify-between"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          Bengaluru, India
        </span>
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white"
        >
          <span>Scroll</span>
          <span className="block h-10 w-px bg-zinc-800 group-hover:bg-[#c8f45e] transition-colors" />
        </a>
      </motion.div>
    </section>
  );
}
