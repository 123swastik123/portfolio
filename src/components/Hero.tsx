"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO, EDUCATION_INFO } from "@/data/portfolioData";
import { ArrowDown, Terminal, Sparkles, MapPin, GraduationCap } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Background Subtle Ambience & Hairline Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/5 via-zinc-700/5 to-transparent blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f26_1px,transparent_1px),linear-gradient(to_bottom,#1f1f26_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      {/* Top Meta Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400 border-b border-zinc-800/80 pb-4"
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
          <span>{PERSONAL_INFO.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
          <span>UVCE • B.Tech AI & Data Science (Class of &apos;29)</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Second-Year Student & Builder</span>
        </div>
      </motion.div>

      {/* Center Statement & Large Editorial Headline */}
      <div className="my-auto py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Active Experimentation & Systems Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.06]">
            Exploring Generative Systems,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
              Local LLMs,
            </span>{" "}
            and Pragmatic AI.
          </h1>

          <p className="text-base sm:text-xl text-zinc-400 max-w-2xl leading-relaxed font-normal">
            I am <strong className="text-zinc-200 font-semibold">{PERSONAL_INFO.name}</strong>, an
            undergraduate at UVCE Bengaluru. I build software at the intersection of deterministic
            logic, computer vision, and emerging AI architectures—learning by shipping functional tools.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-all shadow-[0_0_24px_rgba(255,255,255,0.15)]"
          >
            <span>Selected Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900/90 text-zinc-200 hover:text-white hover:bg-zinc-800/90 border border-zinc-800 text-sm font-mono transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>github.com/123swastik123</span>
          </a>

          <a
            href="#lab"
            className="hidden sm:flex items-center gap-2 px-4 py-3 rounded-full bg-transparent hover:bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 border border-dashed border-zinc-800 text-xs font-mono transition-all"
          >
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span>Try Interactive AI Workbench</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Minimal Editorial Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="pt-8 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono"
      >
        <div>
          <span className="block text-zinc-400 uppercase tracking-wider mb-1">Focus Area</span>
          <span className="text-zinc-200 font-medium">GenAI & Applied ML</span>
        </div>
        <div>
          <span className="block text-zinc-400 uppercase tracking-wider mb-1">Affiliation</span>
          <span className="text-zinc-200 font-medium">UVCE, Bengaluru</span>
        </div>
        <div>
          <span className="block text-zinc-400 uppercase tracking-wider mb-1">Current Research</span>
          <span className="text-zinc-200 font-medium">Local Models & Quantization</span>
        </div>
        <div>
          <span className="block text-zinc-400 uppercase tracking-wider mb-1">Core Ethos</span>
          <span className="text-zinc-200 font-medium">Deterministic Scaffolding</span>
        </div>
      </motion.div>
    </section>
  );
}
