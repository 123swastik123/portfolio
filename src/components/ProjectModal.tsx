"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { X, ArrowUpRight, ExternalLink, CheckCircle2, Layers, Cpu, Code2, AlertCircle } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0d0d12] border border-zinc-800 shadow-2xl p-6 sm:p-10 space-y-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close */}
        <div className="sticky -top-6 sm:-top-10 -mx-6 sm:-mx-10 px-6 sm:px-10 py-4 bg-[#0d0d12]/95 backdrop-blur-md border-b border-zinc-800/80 z-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
            <span className="px-2 py-0.5 rounded bg-zinc-800 text-amber-400 font-bold">
              [ {project.number} ]
            </span>
            <span className="text-zinc-200 font-semibold">{project.title}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors shadow"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Open Live</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Title & Category */}
        <div className="space-y-2">
          <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
            <span className="text-zinc-400 uppercase">{project.category}</span>
            <span>•</span>
            <span>{project.period}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {project.title}
          </h2>
          <p className="text-sm text-zinc-400">{project.subtitle}</p>
        </div>

        {/* Real Screenshot Banner */}
        {project.image && (
          <div className="rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-xl">
            <div className="px-4 py-2 bg-zinc-900 border-b border-zinc-800 text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span>Verified Interface Screenshot</span>
              <span className="text-zinc-500">Live Application Preview</span>
            </div>
            <div className="relative aspect-[16/9] w-full bg-zinc-900">
              <Image
                src={project.image}
                alt={`${project.title} actual screenshot`}
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
          </div>
        )}

        {/* Team Attribution Alert if applicable */}
        {project.teamAttribution && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm">
            <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold block mb-0.5">Project Role & Team Attribution:</span>
              <p className="text-amber-300/90 leading-relaxed font-mono">{project.teamAttribution}</p>
            </div>
          </div>
        )}

        {/* The 4 Clarity Pillars */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Project Deep Dive & Breakdown</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block">
                1. What is this project?
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{project.whatItIs}</p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block">
                2. What problem does it solve?
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block">
                3. What did I build & contribute?
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{project.whatIBuilt}</p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block">
                4. Why is it technically interesting?
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.whyItsInteresting}
              </p>
            </div>
          </div>
        </div>

        {/* Architecture Flow Diagram */}
        {project.architectureDiagram && (
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              <span>System Flow & Execution Pipeline</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.architectureDiagram.nodes.map((node, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-left space-y-1 relative"
                >
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                    Step 0{i + 1}
                  </span>
                  <div className="text-xs font-semibold text-zinc-200">{node.label}</div>
                  <div className="text-[11px] text-zinc-400 leading-snug">{node.role}</div>
                </div>
              ))}
            </div>

            <p className="text-xs font-mono text-zinc-400 pt-2 border-t border-zinc-800/60">
              Flow: {project.architectureDiagram.flowDescription}
            </p>
          </div>
        )}

        {/* Key Features List */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Key Capabilities & Test Coverage</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/30 border border-zinc-800/50 text-xs text-zinc-300 font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5 text-zinc-400" />
            <span>Technologies & Frameworks</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-800/80">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors shadow"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Application</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-zinc-200 hover:text-white hover:bg-zinc-800 border border-zinc-800 font-mono text-xs sm:text-sm transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-zinc-950 text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 text-xs sm:text-sm font-mono transition-colors"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
}
