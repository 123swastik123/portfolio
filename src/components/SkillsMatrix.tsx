"use client";

import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Check, Terminal, Cpu, Database, Wrench } from "lucide-react";

export default function SkillsMatrix() {
  const categoryIcons = [
    <Terminal key="term" className="w-4 h-4 text-amber-400" />,
    <Cpu key="cpu" className="w-4 h-4 text-amber-400" />,
    <Database key="db" className="w-4 h-4 text-amber-400" />,
    <Wrench key="wr" className="w-4 h-4 text-amber-400" />,
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Honest Technical Scope</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Skills & Working Knowledge
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
          No arbitrary 99% proficiency bars. Only tools and technologies I actually write code in,
          with authentic context on how they fit into my projects.
        </p>
      </div>

      {/* Skills Grid: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.title}
            className="rounded-2xl bg-[#0c0c10] border border-zinc-800/80 p-6 sm:p-8 space-y-6 hover:border-zinc-700/80 transition-colors"
          >
            {/* Category Title & Icon */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
              <div className="flex items-center gap-2.5">
                {categoryIcons[idx % categoryIcons.length]}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {cat.title}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">
                0{idx + 1}
              </span>
            </div>

            <p className="text-xs font-mono text-zinc-400 leading-relaxed">
              {cat.subtitle}
            </p>

            {/* List of Skills with Context */}
            <div className="space-y-4">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="group p-3.5 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/50 hover:border-zinc-700/60 transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    {item.tag && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800/80 text-zinc-400 border border-zinc-700/40">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.context}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
