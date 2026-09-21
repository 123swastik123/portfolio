"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import { PROJECT_SCREENSHOTS } from "@/data/projectScreenshots";
import { Project } from "@/types";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, ExternalLink, AlertCircle, Layers } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import { motion } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="border-t border-zinc-800/80 bg-[#08080a]">
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
              02 <span className="text-[#c8f45e]">—</span> Selected projects
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl">
              Things I&apos;ve built —{" "}
              <em className="font-serif italic text-[#c8f45e]">or am building.</em>
            </h2>
          </motion.div>
        </div>

        {/* Project List */}
        <div className="border-t border-zinc-800/80">
          {PROJECTS.map((project, idx) => {
            const screenshotUrl =
              PROJECT_SCREENSHOTS[project.id] || project.image;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative border-b border-zinc-800/80 transition-colors duration-300 hover:bg-[#0d0d12]"
              >
                <div className="grid gap-6 py-10 md:grid-cols-12 md:items-center md:gap-8 md:py-14">
                  {/* Project Index Number */}
                  <div className="md:col-span-1">
                    <span className="font-mono text-sm text-zinc-500 group-hover:text-[#c8f45e] transition-colors">
                      {project.number}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white hover:text-[#c8f45e] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                      {project.category}
                      {project.badgeText && (
                        <span className="ml-2 text-zinc-500 font-normal">
                          · {project.badgeText}
                        </span>
                      )}
                    </p>

                    {/* Team attribution notice if applicable */}
                    {project.teamAttribution && (
                      <div className="mt-3 flex items-start gap-1.5 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300/90 font-mono">
                        <AlertCircle className="w-3 h-3 shrink-0 mt-0.5 text-amber-400" />
                        <span>{project.teamAttribution}</span>
                      </div>
                    )}
                  </div>

                  {/* Description & Tech Tags */}
                  <div className="md:col-span-4">
                    <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      {project.whatItIs}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-zinc-800/80 bg-zinc-900/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400 group-hover:border-zinc-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-white text-zinc-950 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-wider hover:bg-zinc-200 transition-colors shadow-sm"
                        >
                          <span>Visit Live</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 px-3.5 py-1.5 font-mono text-xs text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                      >
                        <GithubIcon className="h-3 w-3" />
                        <span>GitHub</span>
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 font-mono text-xs text-zinc-400 hover:text-[#c8f45e] transition-colors ml-1"
                      >
                        <Layers className="h-3 w-3" />
                        <span>Deep Dive</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Screenshot Preview */}
                  <div className="md:col-span-3">
                    {screenshotUrl ? (
                      <div
                        onClick={() => setSelectedProject(project)}
                        className="group/thumb relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-800/90 bg-zinc-950 cursor-pointer shadow-lg hover:border-[#c8f45e]/50 transition-all"
                      >
                        {/* Browser chrome header bar */}
                        <div className="flex items-center justify-between px-2.5 py-1.5 bg-zinc-900/90 border-b border-zinc-800/80 text-[10px] font-mono text-zinc-500">
                          <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-zinc-700" />
                            <span className="w-2 h-2 rounded-full bg-zinc-700" />
                            <span className="w-2 h-2 rounded-full bg-zinc-700" />
                          </div>
                          <span className="truncate max-w-[130px] text-zinc-400">
                            {project.liveUrl
                              ? project.liveUrl.replace("https://", "")
                              : "github.com"}
                          </span>
                        </div>

                        {/* Guaranteed Image Display via Embedded Data URI */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={screenshotUrl}
                          alt={`${project.title} interface preview`}
                          className="h-full w-full object-cover object-top group-hover/thumb:scale-[1.04] transition-transform duration-500"
                          loading="lazy"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-end p-2.5">
                          <span className="text-[10px] font-mono text-[#c8f45e] flex items-center gap-1">
                            <span>Expand Case Study</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Schematic Graphic for Team Hackathon */
                      <div
                        onClick={() => setSelectedProject(project)}
                        className="relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-800/90 bg-[#0d0d12] p-4 flex flex-col justify-between cursor-pointer hover:border-zinc-700 transition-all"
                      >
                        <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                          Architecture Pipeline
                        </div>
                        <div className="space-y-1.5 py-2">
                          <div className="h-1.5 w-3/4 rounded bg-zinc-800" />
                          <div className="h-1.5 w-1/2 rounded bg-[#c8f45e]/40" />
                          <div className="h-1.5 w-2/3 rounded bg-zinc-800" />
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                          <span>Sign-Language CV</span>
                          <span className="text-[#c8f45e]">CodeFury 9.0 ↗</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Link to GitHub */}
        <div className="mt-12 flex justify-end">
          <a
            href="https://github.com/123swastik123"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
          >
            <span>More experiments on GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#c8f45e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Deep-dive Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
