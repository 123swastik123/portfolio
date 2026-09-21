"use client";

import { motion } from "framer-motion";

const STACK_CATEGORIES = [
  {
    name: "Languages",
    skills: ["Python", "C", "C++", "HTML & CSS", "JavaScript — basics"],
  },
  {
    name: "AI & ML",
    skills: [
      "Generative AI",
      "LLM integration",
      "Local LLM experimentation",
      "Machine Learning",
    ],
  },
  {
    name: "Web & backend",
    skills: [
      "Next.js",
      "React",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Render",
    ],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Linux", "FFmpeg"],
  },
];

export default function SkillsMatrix() {
  return (
    <section id="stack" className="border-t border-zinc-800/80 bg-[#08080a]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Left Column: Heading and Context */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
                06 <span className="text-[#c8f45e]">—</span> Stack
              </span>
              <h2 className="mt-6 text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl">
                Tools I reach for{" "}
                <em className="font-serif italic text-[#c8f45e]">today.</em>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400 font-mono">
                Listed honestly — grouped roughly by what I use them for. Some are
                comfortable, some are still being learned. No fake percentages here.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Categories and Pill Badges */}
          <div className="md:col-span-8">
            <div className="border-t border-zinc-800/80">
              {STACK_CATEGORIES.map((cat, idx) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="border-b border-zinc-800/80 py-6"
                >
                  <div className="grid gap-3 md:grid-cols-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 md:pt-1.5">
                      {cat.name}
                    </span>
                    <div className="flex flex-wrap gap-2.5 md:col-span-3">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-zinc-800/80 bg-zinc-900/60 px-3.5 py-1.5 text-sm text-zinc-300 transition-colors duration-300 hover:border-[#c8f45e] hover:bg-[#c8f45e] hover:text-zinc-950 cursor-default select-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
