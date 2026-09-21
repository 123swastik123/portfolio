"use client";

import { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Check, Copy, Clock, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: PERSONAL_INFO.timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "AI Lab", href: "#lab" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 sm:py-6 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#0d0d12]/80 backdrop-blur-xl border border-zinc-800/80 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all">
        {/* Left: Identity & Live Status */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="group flex items-center gap-2.5 font-medium tracking-tight text-zinc-100 hover:text-white transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            <span className="text-sm font-semibold tracking-tight">Swastik</span>
            <span className="hidden md:inline-block text-xs text-zinc-400 font-mono tracking-wide">
              / UVCE &apos;29
            </span>
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-full border border-zinc-800/50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/70 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Bengaluru Time & Copy Email CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Bengaluru Clock */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/60 text-xs font-mono text-zinc-400">
            <Clock className="w-3 h-3 text-zinc-400" />
            <span>BLR {time || "--:--:--"}</span>
          </div>

          {/* Copy Email Button */}
          <button
            onClick={copyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-mono tracking-tight bg-zinc-100 text-zinc-950 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 transition-all"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold text-emerald-800">Copied</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5" />
                <span className="font-semibold">Get in Touch</span>
              </>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 rounded-2xl bg-[#0e0e13]/95 backdrop-blur-2xl border border-zinc-800 p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 text-xs font-mono text-zinc-400">
            <span>BENGALURU, IN (IST)</span>
            <span className="text-zinc-200 font-semibold">{time}</span>
          </div>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-mono tracking-wider text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
            <button
              onClick={copyEmail}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-mono tracking-wider bg-zinc-100 text-zinc-950 font-semibold hover:bg-white transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Email Copied to Clipboard" : PERSONAL_INFO.email}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
