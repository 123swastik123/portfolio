"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { GitBranch, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const REPOS = [
  {
    name: "Hypotonic-farming-system",
    title: "HydroMonitor AI",
    description:
      "Smart hydroponics monitoring prototype: sensor telemetry ingestion, plant vitality ML scoring, and automated abnormal condition alarms.",
    language: "Python & ML",
    langColor: "bg-emerald-400",
    url: "https://github.com/123swastik123/Hypotonic-farming-system",
  },
  {
    name: "Government-work-assistant-ai",
    title: "NammaPath / CivicPath",
    description:
      "A multilingual AI-assisted platform helping citizens navigate Karnataka government schemes with deterministic eligibility logic and multi-LLM fallback.",
    language: "TypeScript",
    langColor: "bg-blue-400",
    url: "https://github.com/123swastik123/Government-work-assistant-ai",
  },
  {
    name: "college_manager",
    title: "Study Drive / College Manager",
    description:
      "Modern academic command center: automated multi-engine document ingestion, semantic search, GPA forecasting, and live timetable management.",
    language: "Python & FastAPI",
    langColor: "bg-purple-400",
    url: "https://github.com/123swastik123/college_manager",
  },
  {
    name: "Omnicomm",
    title: "OmniComm Neural HUD",
    description:
      "Real-time dual-mode assistive communication engine with 21-landmark MediaPipe hand tracking, speech synthesis, and an animated cyber-glass HUD.",
    language: "JavaScript & MediaPipe",
    langColor: "bg-cyan-400",
    url: "https://github.com/123swastik123/Omnicomm",
  },
  {
    name: "Autoclip",
    title: "AutoClip Video Automation",
    description:
      "Automated pipeline turning long footage into vertical Shorts: face-following crops, AI speech transcription, audio ducking, and karaoke captions.",
    language: "Python & React",
    langColor: "bg-amber-400",
    url: "https://github.com/123swastik123/Autoclip",
  },
  {
    name: "buddy-claude",
    title: "Agentic Experimentation",
    description:
      "Explorations in prompt conditioning, LLM scaffolding, and autonomous developer assistance workflows.",
    language: "AI Pipelines",
    langColor: "bg-pink-400",
    url: "https://github.com/123swastik123/buddy-claude",
  },
];

export default function GitHubSection() {
  return (
    <section id="github" className="border-t border-zinc-800/80 bg-[#08080a]">
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
              06 <span className="text-[#c8f45e]">—</span> GitHub
            </span>
            <h2 className="mt-4 text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl">
              Code that got{" "}
              <em className="font-serif italic text-[#c8f45e]">pushed.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8f45e] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c8f45e]" />
            </span>
            <span>Live from GitHub · profile</span>
          </motion.div>
        </div>

        {/* Repos Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {REPOS.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group rounded-2xl border border-zinc-800/80 bg-[#0d0d12] p-6 sm:p-8 space-y-4 hover:border-zinc-700 transition-all block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 group-hover:text-[#c8f45e] transition-colors">
                  <GitBranch className="h-3.5 w-3.5" />
                  <span className="font-medium text-zinc-200">{repo.name}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-zinc-100">
                {repo.title}
              </h3>

              <p className="text-sm leading-relaxed text-zinc-400 font-mono">
                {repo.description}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className={`h-2 w-2 rounded-full ${repo.langColor}`} />
                <span>{repo.language}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Profile Link */}
        <div className="mt-12 flex justify-start">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-300 hover:text-[#c8f45e] transition-colors"
          >
            <span>github.com/123swastik123</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
