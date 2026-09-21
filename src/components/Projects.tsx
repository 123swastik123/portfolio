"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/data/portfolioData";
import { Project } from "@/types";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, Layers, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
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
            <span>Featured Work & Working Software</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Selected Projects
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
          Real tools I built across citizen guidance, video automation, IoT plant telemetry, and
          computer vision. Click any project to view live links and architecture details.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="group relative rounded-3xl bg-[#0c0c10] border border-zinc-800/90 hover:border-zinc-700 p-6 sm:p-8 lg:p-10 transition-all duration-300 overflow-hidden"
          >
            {/* Header / Number & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-zinc-800/70 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="text-amber-400 font-bold tracking-wider">
                  [ {project.number} ]
                </span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-300 uppercase tracking-wide">{project.category}</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400">{project.period}</span>
              </div>

              {project.badgeText && (
                <span className="px-3 py-0.5 rounded-full text-[11px] bg-zinc-900 text-zinc-300 border border-zinc-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{project.badgeText}</span>
                </span>
              )}
            </div>

            {/* Main Content Grid: Text Breakdown (Left) + Real Screenshot (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
              {/* Left Column: Clear 4-Part Explanation */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Team attribution notice if applicable */}
                {project.teamAttribution && (
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/90 font-mono">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
                    <span>{project.teamAttribution}</span>
                  </div>
                )}

                {/* Plain-English Clarity Points */}
                <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed">
                  <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 space-y-1">
                    <span className="text-[11px] font-mono uppercase text-amber-400 font-semibold block">
                      What it does:
                    </span>
                    <p className="text-zinc-300">{project.whatItIs}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 space-y-1">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 font-semibold block">
                      Problem it solves:
                    </span>
                    <p className="text-zinc-400">{project.problemSolved}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 space-y-1">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 font-semibold block">
                      What I contributed:
                    </span>
                    <p className="text-zinc-400">{project.whatIBuilt}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Clear Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 text-xs sm:text-sm font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.12)]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Live Website</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 text-xs sm:text-sm font-mono transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View GitHub Code</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-950 text-zinc-300 hover:text-white hover:bg-zinc-900 border border-dashed border-zinc-800 text-xs sm:text-sm font-mono transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>Case Study & Architecture</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Real Screenshot / Visual Preview */}
              <div className="lg:col-span-5 w-full">
                {project.image ? (
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="group/img relative rounded-2xl bg-zinc-950 border border-zinc-800/90 overflow-hidden shadow-2xl cursor-pointer"
                  >
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between px-3 py-2 bg-zinc-900/90 border-b border-zinc-800 text-[11px] font-mono text-zinc-500">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                      </div>
                      <span className="truncate max-w-[200px] text-zinc-400">
                        {project.liveUrl
                          ? project.liveUrl.replace("https://", "")
                          : "github.com/123swastik123"}
                      </span>
                      <span className="text-[10px] text-zinc-500">Preview</span>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                      <Image
                        src={project.image}
                        alt={`${project.title} actual screenshot`}
                        fill
                        className="object-cover object-top group-hover/img:scale-[1.02] transition-transform duration-500"
                        unoptimized
                      />
                    </div>

                    <div className="p-3 bg-zinc-950/90 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span>Actual Interface Screenshot</span>
                      <span className="text-amber-400 group-hover/img:underline flex items-center gap-1">
                        <span>Click to expand</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Schematic Fallback for OmniComm (Team Hackathon) */
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 space-y-4 cursor-pointer hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-2 border-b border-zinc-800">
                      <span>System Integration Pipeline</span>
                      <span className="text-amber-400">CodeFury 9.0</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 py-2">
                      <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-1">
                        <span className="text-[10px] font-mono text-zinc-500 block uppercase">
                          Step 1
                        </span>
                        <div className="text-xs font-semibold text-zinc-200">Video Gesture Capture</div>
                        <div className="text-[11px] text-zinc-400">Live webcam hand landmark tracking</div>
                      </div>

                      <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-1">
                        <span className="text-[10px] font-mono text-zinc-500 block uppercase">
                          Step 2
                        </span>
                        <div className="text-xs font-semibold text-zinc-200">Vision Inference</div>
                        <div className="text-[11px] text-zinc-400">Gesture sequence classification</div>
                      </div>

                      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 space-y-1">
                        <span className="text-[10px] font-mono text-amber-400 block uppercase">
                          Step 3 (My Focus)
                        </span>
                        <div className="text-xs font-semibold text-amber-200">Integration Layer</div>
                        <div className="text-[11px] text-amber-300/80">Connecting vision model to UI</div>
                      </div>

                      <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-1">
                        <span className="text-[10px] font-mono text-zinc-500 block uppercase">
                          Step 4
                        </span>
                        <div className="text-xs font-semibold text-zinc-200">Decoded UI</div>
                        <div className="text-[11px] text-zinc-400">Real-time readable conversation</div>
                      </div>
                    </div>

                    <div className="pt-2 text-center text-xs font-mono text-zinc-400 group-hover:text-zinc-200">
                      Click to explore full architecture case study →
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Deep Dive Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
