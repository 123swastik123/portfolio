"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import { Project } from "@/types";
import { ArrowUpRight, Sparkles, Layers, Terminal } from "lucide-react";
import ProjectModal from "./ProjectModal";
import GithubIcon from "./icons/GithubIcon";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Curated Work & Prototypes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Selected Projects
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
          Each project explores a practical intersection: deterministic engines, computer vision,
          multilingual synthesis, and edge IoT models.
        </p>
      </div>

      {/* Projects List: Editorial Stacked Format */}
      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="group relative rounded-2xl bg-[#0c0c10] hover:bg-[#111116] border border-zinc-800/80 hover:border-zinc-700/80 p-6 sm:p-10 transition-all duration-300 overflow-hidden"
          >
            {/* Subtle Hover Gradient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/5 via-zinc-600/5 to-transparent blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              {/* Left Column: Index, Meta, Title, Description */}
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                  <span className="text-zinc-200 font-bold tracking-wider">
                    [ {project.number} ]
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="text-zinc-400 uppercase">{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span>{project.period}</span>
                </div>

                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-2xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Interaction Trigger Buttons */}
              <div className="flex flex-row lg:flex-col items-center lg:items-end gap-3 shrink-0 pt-2 lg:pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 hover:bg-white text-xs sm:text-sm font-medium transition-all shadow-[0_0_15px_rgba(255,255,255,0.08)]"
                >
                  <span>Explore Architecture</span>
                  <Layers className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Architecture Highlights Mini Bar */}
            <div className="mt-8 pt-6 border-t border-zinc-800/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="w-1 h-1 rounded-full bg-amber-400/80 shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Deep Dive Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
