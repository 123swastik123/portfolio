"use client";

import { EDUCATION_INFO, AI_PHILOSOPHY, PERSONAL_INFO } from "@/data/portfolioData";
import { GraduationCap, Sparkles, Compass, Lightbulb, BookOpen, ArrowUpRight } from "lucide-react";

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Academic Roots & Engineering Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Journey & About Me
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
          An honest reflection of where I am: a second-year student fascinated by AI systems, rapid
          experimentation, and continuous learning.
        </p>
      </div>

      {/* Main Grid: Education vs AI Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Education Card */}
        <div className="lg:col-span-5 rounded-2xl bg-[#0c0c10] border border-zinc-800/80 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 pb-4 border-b border-zinc-800/80">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>

          <div className="space-y-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 text-amber-400 border border-zinc-800 inline-block">
              {EDUCATION_INFO.status}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {EDUCATION_INFO.degree}
            </h3>
            <p className="text-sm font-semibold text-zinc-300">
              {EDUCATION_INFO.specialization}
            </p>
            <p className="text-xs text-zinc-400 font-mono">
              {EDUCATION_INFO.institution} • {EDUCATION_INFO.location}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/70 space-y-2 font-mono text-xs">
            <div className="flex justify-between text-zinc-400">
              <span>Program Timeline:</span>
              <span className="text-zinc-200">{EDUCATION_INFO.period}</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Expected Graduation:</span>
              <span className="text-emerald-400 font-bold">{EDUCATION_INFO.expectedGraduation}</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
              Core Coursework & Active Study:
            </span>
            <div className="space-y-2">
              {EDUCATION_INFO.focusAreas.map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-zinc-300 font-mono"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Philosophical Pillars */}
        <div className="lg:col-span-7 space-y-6">
          {/* Editorial Quote Card */}
          <div className="rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-950 border border-zinc-800/90 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE BUILDER&apos;S APPROACH</span>
            </div>
            <blockquote className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal italic">
              &ldquo;{AI_PHILOSOPHY.quote}&rdquo;
            </blockquote>
            <p className="text-xs font-mono text-zinc-400 pt-2 border-t border-zinc-800/80">
              — Swastik S. Karabashettar • Bengaluru, India
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {AI_PHILOSOPHY.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-[#0c0c10] border border-zinc-800/80 space-y-2 hover:border-zinc-700/80 transition-colors"
              >
                <div className="text-[10px] font-mono text-zinc-400 uppercase">
                  Pillar 0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
