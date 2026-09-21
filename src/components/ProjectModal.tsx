"use client";

import { useEffect } from "react";
import { Project } from "@/types";
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, Code2, AlertCircle } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d0d12] border border-zinc-800 shadow-2xl p-6 sm:p-8 space-y-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 border-b border-zinc-800/80 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2 font-mono text-xs text-zinc-400">
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                PROJ {project.number}
              </span>
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.period}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-400 mt-1">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Team Attribution Alert (Honest disclaimer for team projects like OmniComm) */}
        {project.teamAttribution && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm">
            <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold block mb-0.5">Project Contribution Note:</span>
              <p className="text-amber-300/90 leading-relaxed">{project.teamAttribution}</p>
            </div>
          </div>
        )}

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
              The Challenge & Friction
            </span>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
              The Architectural Approach
            </span>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Architecture Flow Diagram */}
        {project.architectureDiagram && (
          <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              <span>System Flow & Component Pipeline</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.architectureDiagram.nodes.map((node, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-zinc-950/80 border border-zinc-800/80 text-left space-y-1 relative group"
                >
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                    Step 0{i + 1}
                  </span>
                  <div className="text-xs font-semibold text-zinc-200">{node.label}</div>
                  <div className="text-[11px] text-zinc-400 leading-snug">{node.role}</div>
                </div>
              ))}
            </div>

            <p className="text-xs font-mono text-zinc-400 pt-2 border-t border-zinc-800/60">
              {project.architectureDiagram.flowDescription}
            </p>
          </div>
        )}

        {/* Architecture Details & Key Features */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-zinc-400" />
            <span>Key Engineering Highlights</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/40 text-xs text-zinc-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
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
                className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-800/60 text-zinc-200 border border-zinc-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-800/80">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-medium text-xs sm:text-sm hover:bg-zinc-200 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800 text-xs sm:text-sm transition-colors"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
}
