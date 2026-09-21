"use client";

import { motion } from "framer-motion";

const TIMELINE = [
  {
    period: "2025 — now",
    title: "B.Tech · Artificial Intelligence & Data Science",
    institution: "UVCE, Bengaluru",
    desc: "Expected graduation 2029. The place where the curiosity gets structured — ML, data and AI as coursework, and a lot of experimenting outside it.",
  },
  {
    period: "2025",
    title: "CodeFury 9.0 — OmniComm",
    institution: "Hackathon, team project",
    desc: "Worked in a team on sign-language recognition and system integration, contributing to connecting the different parts of the system.",
  },
  {
    period: "ongoing",
    title: "Self-directed experiments",
    institution: "My laptop, mostly at night",
    desc: "Local LLMs, generative AI, automation pipelines and prototypes that may or may not see the light of day.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="border-t border-zinc-800/80 bg-[#08080a]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
              05 <span className="text-[#c8f45e]">—</span> Journey
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl">
              The road so far is{" "}
              <em className="font-serif italic text-[#c8f45e]">still short.</em>
            </h2>
          </motion.div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* Left Column: Narrative Reflections */}
          <div className="md:col-span-5 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-md text-lg leading-relaxed text-zinc-300"
            >
              I&apos;m barely two years in. Every project on this page was a learning experiment
              that happened to ship — and I&apos;m okay framing them exactly that honestly.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md text-base leading-relaxed text-zinc-400"
            >
              The through-line: I&apos;m curious, I find AI genuinely exciting, and I&apos;d rather
              build the wrong thing fast than the perfect thing never.
            </motion.p>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="md:col-span-7">
            <div className="border-t border-zinc-800/80">
              {TIMELINE.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="grid gap-2 border-b border-zinc-800/80 py-8 md:grid-cols-4 md:gap-8"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c8f45e]">
                    {item.period}
                  </span>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-medium tracking-tight text-white md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500">
                      {item.institution}
                    </p>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
                      {item.desc}
                    </p>
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
