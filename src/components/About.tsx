"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { FileText, ArrowUpRight, Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      {/* Section Header */}
      <div className="mb-16 grid gap-6 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
            01 <span className="text-[#c8f45e]">—</span> About
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-9"
        >
          <h2 className="text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-6xl">
            A student who builds, breaks,{" "}
            <em className="font-serif italic text-[#c8f45e]">then rebuilds.</em>
          </h2>
        </motion.div>
      </div>

      {/* Content Grid */}
      <div className="grid gap-12 md:grid-cols-12">
        {/* Left Column: Narrative Copy */}
        <div className="md:col-span-7 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-2xl text-lg sm:text-xl leading-relaxed text-zinc-300"
          >
            I&apos;m an AI &amp; data science student at UVCE, Bengaluru. I genuinely enjoy
            keeping up with how fast AI is moving — researching new models, experimenting with
            local LLMs and trying to understand the ideas close enough to build with them.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400"
          >
            I&apos;m early in my journey, and I&apos;m not pretending otherwise. My focus is on
            shipping small, real things — function over polish: prototype first, learn fast, iterate.
          </motion.p>

          {/* Quick Resume Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="pt-6"
          >
            <div className="p-6 rounded-2xl bg-[#0e0e12] border border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#c8f45e]">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Curriculum Vitae / Resume</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-mono">
                  Verified PDF covering degree, coursework, hackathons &amp; code.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-semibold uppercase tracking-wider transition-colors"
                  title="View Resume PDF in new tab"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>View PDF</span>
                </a>
                <a
                  href="/resume.pdf?download=true"
                  download="Swastik_S_Karabashettar_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono transition-colors"
                  title="Download Resume PDF file"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Key Specifications */}
        <div className="md:col-span-5 md:col-start-8">
          <div className="border-t border-zinc-800">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-5 gap-4 border-b border-zinc-800 py-4.5"
            >
              <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500">
                Based in
              </span>
              <span className="col-span-3 text-sm text-zinc-200">
                Bengaluru, Karnataka, India
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-5 gap-4 border-b border-zinc-800 py-4.5"
            >
              <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500">
                Studying
              </span>
              <span className="col-span-3 text-sm text-zinc-200">
                B.Tech · AI &amp; Data Science, UVCE
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-5 gap-4 border-b border-zinc-800 py-4.5"
            >
              <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500">
                Graduating
              </span>
              <span className="col-span-3 text-sm text-zinc-200">
                Expected 2029
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-5 gap-4 border-b border-zinc-800 py-4.5"
            >
              <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500">
                Currently
              </span>
              <span className="col-span-3 text-sm text-[#c8f45e]">
                Second year — learning &amp; building
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
