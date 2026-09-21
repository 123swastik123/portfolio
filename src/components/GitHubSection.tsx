"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { GitBranch, Star, Code2, ArrowUpRight } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";

export default function GitHubSection() {
  const featuredRepos = [
    {
      name: "Government-work-assistant-ai",
      title: "CivicPath / NammaPath",
      description:
        "Multilingual AI-assisted platform helping citizens navigate Karnataka state government schemes with deterministic eligibility checks and LLM guidance.",
      language: "TypeScript",
      langColor: "bg-blue-400",
      url: "https://github.com/123swastik123/Government-work-assistant-ai",
    },
    {
      name: "Autoclip",
      title: "AutoClip Video Automation",
      description:
        "Automated AI pipeline converting horizontal video to vertical Shorts using facial detection, speech transcription, and word-by-word karaoke captions.",
      language: "Python",
      langColor: "bg-amber-400",
      url: "https://github.com/123swastik123/Autoclip",
    },
    {
      name: "Hypotonic-farming-system",
      title: "Smart Hydroponic Monitoring",
      description:
        "AI/ML & IoT prototype for hydroponic plant health prediction, abnormal nutrient alert generation, and dashboard metrics telemetry.",
      language: "Python / JS",
      langColor: "bg-emerald-400",
      url: "https://github.com/123swastik123/Hypotonic-farming-system",
    },
    {
      name: "buddy-claude",
      title: "Agentic Experimentation",
      description:
        "Explorations in prompt conditioning, developer workflows, and autonomous coding assistants.",
      language: "AI Workflows",
      langColor: "bg-purple-400",
      url: "https://github.com/123swastik123/buddy-claude",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
            <GithubIcon className="w-4 h-4 text-zinc-300" />
            <span>Open Source & Public Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Code on GitHub
          </h2>
        </div>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
        >
          <span>View profile @123swastik123</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Repos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-[#0c0c10] hover:bg-[#121217] border border-zinc-800/80 hover:border-zinc-700/90 p-6 space-y-4 transition-all duration-200 block"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 group-hover:text-amber-300 transition-colors">
                <GitBranch className="w-3.5 h-3.5" />
                <span className="font-semibold text-zinc-200">{repo.name}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <h3 className="text-lg font-bold text-white tracking-tight">{repo.title}</h3>

            <p className="text-xs text-zinc-400 leading-relaxed font-mono">
              {repo.description}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                <span>{repo.language}</span>
              </div>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-500">Public Repository</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
