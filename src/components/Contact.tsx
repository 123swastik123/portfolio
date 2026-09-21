"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUpRight, Copy, Check, FileText, Mail } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="border-t border-zinc-800/80 bg-[#08080a]">
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-48">
        {/* Section Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
              07 <span className="text-[#c8f45e]">—</span> Contact
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="max-w-3xl text-4xl sm:text-6xl md:text-7xl font-medium leading-[1.02] tracking-tight text-white">
              Got an idea, a critique,{" "}
              <em className="font-serif italic text-[#c8f45e]">
                or a project to build?
              </em>
            </h2>
          </motion.div>
        </div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 flex flex-wrap gap-4 items-center"
        >
          {/* Primary Action: Open Gmail */}
          <a
            href={PERSONAL_INFO.gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-[#c8f45e] px-7 py-4 font-mono text-xs sm:text-sm uppercase tracking-wider text-zinc-950 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d6f87d] shadow-[0_0_24px_rgba(200,244,94,0.25)] cursor-pointer"
            title="Open Gmail to compose email to Swastik"
          >
            <Mail className="h-4 w-4 text-zinc-950 shrink-0" />
            <span>Open in Gmail</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </a>

          {/* Copy Email Button */}
          <button
            onClick={copyEmail}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-[#0d0d12] px-6 py-4 font-mono text-xs sm:text-sm lowercase tracking-normal text-zinc-300 transition-colors duration-300 hover:border-[#c8f45e] hover:text-white cursor-pointer"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-[#c8f45e]" />
                <span className="text-[#c8f45e] font-semibold">Copied to clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-zinc-400" />
                <span>{PERSONAL_INFO.email} (Copy)</span>
              </>
            )}
          </button>

          {/* GitHub button */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-[#0d0d12] px-6 py-4 font-mono text-xs sm:text-sm uppercase tracking-[0.15em] text-zinc-300 transition-colors duration-300 hover:border-zinc-600 hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          {/* Resume PDF */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-[#0d0d12] px-6 py-4 font-mono text-xs sm:text-sm uppercase tracking-[0.15em] text-zinc-300 transition-colors duration-300 hover:border-[#c8f45e] hover:text-[#c8f45e]"
          >
            <FileText className="h-4 w-4" />
            <span>Resume (PDF)</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        {/* Location & Availability Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="mt-12 max-w-lg text-sm leading-relaxed text-zinc-400 font-mono">
            Based in Bengaluru. Happy to talk about AI, machine learning, internships or anything you think I should be building next.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
