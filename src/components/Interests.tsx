"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const INTERESTS = [
  {
    title: "Generative AI",
    desc: "How models produce text, images and media",
  },
  {
    title: "LLM integration",
    desc: "Wiring models into real, working product flows",
  },
  {
    title: "Local LLMs",
    desc: "Running and breaking models on my own machine",
  },
  {
    title: "Machine learning",
    desc: "Building things that learn from data",
  },
  {
    title: "Automation",
    desc: "Letting software do the repetitive work",
  },
  {
    title: "Practical AI",
    desc: "Ideas that ship, not just demos",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="border-t border-zinc-800/80 bg-[#08080a]">
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
              04 <span className="text-[#c8f45e]">—</span> Interests
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl">
              What I&apos;m{" "}
              <em className="font-serif italic text-[#c8f45e]">tinkering with.</em>
            </h2>
          </motion.div>
        </div>

        {/* Interests Interactive List */}
        <div className="border-t border-zinc-800/80">
          {INTERESTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group flex items-baseline gap-6 border-b border-zinc-800/80 py-5 transition-colors duration-300 hover:bg-[#c8f45e] md:gap-10 md:py-6 px-3 rounded-lg"
            >
              <span className="hidden w-24 shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-950 md:block">
                Interest
              </span>

              <h3 className="text-2xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-zinc-950 md:text-4xl">
                {item.title}
              </h3>

              <p className="ml-auto hidden max-w-xs text-right text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-900 md:block font-mono">
                {item.desc}
              </p>

              <ArrowUpRight className="ml-auto hidden h-5 w-5 shrink-0 text-zinc-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-950 group-hover:opacity-100 md:ml-0 md:block" />
            </motion.div>
          ))}
        </div>

        {/* Reflection Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="mt-12 max-w-xl text-sm leading-relaxed text-zinc-400 font-mono">
            It&apos;s a fast-moving field — I keep up by reading, running models locally and rebuilding things I don&apos;t yet understand. When AI changes, my workflow changes with it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
