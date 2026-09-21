"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "AI Lab", href: "#lab" },
    { name: "Interests", href: "#interests" },
    { name: "Journey", href: "#journey" },
    { name: "Stack", href: "#stack" },
    { name: "GitHub", href: "#github" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-colors duration-500 bg-[#08080a]/80 backdrop-blur-md border-b border-zinc-800/60">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        {/* Left: Brand Monogram / Name */}
        <a
          href="#top"
          className="font-mono text-xs sm:text-sm font-bold tracking-wider text-white hover:text-[#c8f45e] transition-colors uppercase"
        >
          SWASTIK<span className="text-[#c8f45e]">.</span>S<span className="text-[#c8f45e]">.</span>KARABASHETTAR<span className="text-[#c8f45e]">.</span>
        </a>

        {/* Center: Desktop Navigation */}
        <ul className="hidden items-center gap-7 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions: Resume & Menu */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-[#0e0e12] px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-zinc-300 transition-all hover:border-[#c8f45e] hover:text-[#c8f45e]"
          >
            <FileText className="h-3.5 w-3.5 text-[#c8f45e]" />
            <span>CV (PDF)</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#08080a]/95 backdrop-blur-xl px-6 py-6 space-y-4 font-mono text-xs uppercase tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-[#c8f45e] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-zinc-400 hover:text-white"
            >
              <FileText className="h-4 w-4 text-[#c8f45e]" />
              <span>Download CV (PDF)</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 py-2 text-[#c8f45e]"
            >
              <span>{PERSONAL_INFO.email}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
