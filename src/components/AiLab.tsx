"use client";

import { useState } from "react";
import { Terminal, Cpu, Sliders, Film, CheckCircle2, AlertTriangle, ArrowRight, Sparkles, RefreshCw } from "lucide-react";

export default function AiLab() {
  const [activeTab, setActiveTab] = useState<"civic" | "llm" | "autoclip">("civic");

  // CivicPath Simulator State
  const [resident, setResident] = useState(true);
  const [income, setIncome] = useState<number>(180000);
  const [scheme, setScheme] = useState<"yuvanidhi" | "gruhalakshmi" | "vidyanidhi">("yuvanidhi");
  const [lang, setLang] = useState<"en" | "kn">("en");

  // Local LLM Simulator State
  const [modelParams, setModelParams] = useState<number>(8); // 8B
  const [quantLevel, setQuantLevel] = useState<"FP16" | "Q8" | "Q4" | "Q2">("Q4");

  // AutoClip Scrub State
  const [scrubTime, setScrubTime] = useState<number>(12); // seconds

  // CivicPath Logic
  const getEligibility = () => {
    if (!resident) {
      return {
        status: "INELIGIBLE",
        reason: "Karnataka domicile certificate is mandatory for this state welfare program.",
        rule: "Rule 4.1(a) Karnataka Domicile Clause",
      };
    }
    if (scheme === "yuvanidhi") {
      if (income > 500000) {
        return {
          status: "INELIGIBLE",
          reason: "Family annual income exceeds the ₹5,00,000 threshold for Yuva Nidhi allowance.",
          rule: "Clause 3.2 Income Ceiling Check",
        };
      }
      return {
        status: "ELIGIBLE",
        reason: "Applicant meets domicile requirement and graduated within the eligible 2-year window.",
        rule: "Karnataka Yuva Nidhi 2024 Guidelines Met",
      };
    }
    if (scheme === "gruhalakshmi") {
      return {
        status: "ELIGIBLE",
        reason: "Family head criteria satisfied under Food Security Card (APL/BPL/AAY).",
        rule: "Gruha Lakshmi Act Section 2.b",
      };
    }
    return {
      status: "ELIGIBLE",
      reason: "Farmer ward education assistance threshold verified.",
      rule: "Raita Vidya Nidhi Scheme Regulation 2023",
    };
  };

  const eligibility = getEligibility();

  // Quantization Math
  const getVram = () => {
    let bpw = 4.5;
    if (quantLevel === "FP16") bpw = 16;
    if (quantLevel === "Q8") bpw = 8.5;
    if (quantLevel === "Q2") bpw = 2.8;
    const vramGB = ((modelParams * 1e9 * (bpw / 8)) / (1024 * 1024 * 1024)).toFixed(1);
    const tokPerSec = (
      quantLevel === "Q4" ? 38 : quantLevel === "Q8" ? 22 : quantLevel === "FP16" ? 11 : 48
    );
    return { vramGB, tokPerSec };
  };

  const { vramGB, tokPerSec } = getVram();

  return (
    <section id="lab" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      {/* Section Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
            <Terminal className="w-4 h-4 text-amber-400" />
            <span>Interactive Engineering Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            AI Experimentation Lab
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
          Interactive simulations demonstrating my architectural thinking across deterministic
          scaffolding, local model profiling, and video automation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-zinc-900/70 border border-zinc-800/80 w-fit mb-8">
        <button
          onClick={() => setActiveTab("civic")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
            activeTab === "civic"
              ? "bg-zinc-100 text-zinc-950 font-bold shadow"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>01. CivicPath Hybrid Engine</span>
        </button>

        <button
          onClick={() => setActiveTab("llm")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
            activeTab === "llm"
              ? "bg-zinc-100 text-zinc-950 font-bold shadow"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>02. Local LLM Profiler</span>
        </button>

        <button
          onClick={() => setActiveTab("autoclip")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
            activeTab === "autoclip"
              ? "bg-zinc-100 text-zinc-950 font-bold shadow"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Film className="w-3.5 h-3.5" />
          <span>03. AutoClip Pipeline Visualizer</span>
        </button>
      </div>

      {/* Interactive Window Card */}
      <div className="rounded-2xl bg-[#0c0c10] border border-zinc-800 p-6 sm:p-8">
        {/* TAB 1: CIVICPATH HYBRID SIMULATOR */}
        {activeTab === "civic" && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>CivicPath: Deterministic Verification vs. Generative Explanation</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Live Demo
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  How we eliminate AI hallucinations for legal civic welfare rules by separating rule
                  evaluation from natural language synthesis.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-400">Synthesis Language:</span>
                <button
                  onClick={() => setLang(lang === "en" ? "kn" : "en")}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors"
                >
                  {lang === "en" ? "English (Active)" : "ಕನ್ನಡ (Active)"}
                </button>
              </div>
            </div>

            {/* Two Column Layout: User Controls vs Hybrid Engine Execution */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Citizen Inputs */}
              <div className="lg:col-span-5 space-y-5 p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block pb-2 border-b border-zinc-800">
                  Citizen Parameter Inputs
                </span>

                {/* Scheme Select */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                    Target Government Scheme:
                  </label>
                  <select
                    value={scheme}
                    onChange={(e) => setScheme(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value="yuvanidhi">Yuva Nidhi Scheme (Unemployed Graduates)</option>
                    <option value="gruhalakshmi">Gruha Lakshmi Scheme (Family Head Financial Aid)</option>
                    <option value="vidyanidhi">Raita Vidya Nidhi (Farmer Ward Scholarship)</option>
                  </select>
                </div>

                {/* Domicile Toggle */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                    Karnataka Resident Domicile:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setResident(true)}
                      className={`py-2 px-3 rounded-lg text-xs font-mono transition-all ${
                        resident
                          ? "bg-zinc-200 text-zinc-950 font-bold"
                          : "bg-zinc-950 text-zinc-400 border border-zinc-800"
                      }`}
                    >
                      Yes, Resident
                    </button>
                    <button
                      onClick={() => setResident(false)}
                      className={`py-2 px-3 rounded-lg text-xs font-mono transition-all ${
                        !resident
                          ? "bg-amber-400 text-zinc-950 font-bold"
                          : "bg-zinc-950 text-zinc-400 border border-zinc-800"
                      }`}
                    >
                      Non-Resident
                    </button>
                  </div>
                </div>

                {/* Income Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1.5">
                    <span>Family Annual Income:</span>
                    <span className="text-amber-300 font-bold">₹{income.toLocaleString("en-IN")}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="50000"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                    <span>₹50,000</span>
                    <span>Threshold: ₹5,00,000</span>
                    <span>₹10,00,000</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Two-Tier Processing Display */}
              <div className="lg:col-span-7 space-y-4">
                {/* 1. Deterministic Rule Tier */}
                <div
                  className={`p-5 rounded-xl border transition-colors ${
                    eligibility.status === "ELIGIBLE"
                      ? "bg-emerald-950/20 border-emerald-500/30"
                      : "bg-red-950/20 border-red-500/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                        Tier 1: Deterministic Engine (No LLM)
                      </span>
                    </div>
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        eligibility.status === "ELIGIBLE"
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {eligibility.status}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-200 font-mono mb-1">{eligibility.reason}</p>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    Statutory Rule Applied: {eligibility.rule}
                  </span>
                </div>

                {/* 2. Generative LLM Tier */}
                <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3 font-mono">
                  <div className="flex items-center justify-between text-[10px] text-zinc-400 pb-2 border-b border-zinc-800/80">
                    <span className="flex items-center gap-1.5 text-amber-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Tier 2: Generative LLM Plain Language Synthesis</span>
                    </span>
                    <span>Model: Llama / Claude Context Pipeline</span>
                  </div>

                  <div className="text-xs text-zinc-300 leading-relaxed space-y-2">
                    {lang === "en" ? (
                      eligibility.status === "ELIGIBLE" ? (
                        <>
                          <p className="text-emerald-300">
                            ✓ <strong>Application Roadmap:</strong> You are fully eligible for this
                            benefit.
                          </p>
                          <p className="text-zinc-400">
                            <strong>Step 1:</strong> Prepare your Karnataka Domicile Certificate,
                            Aadhaar card linked with bank account, and degree completion certificate.
                          </p>
                          <p className="text-zinc-400">
                            <strong>Step 2:</strong> Submit online via the Seva Sindhu / Yuva Nidhi
                            portal or at your nearest Bengaluru One / Grama One center.
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-red-300">
                            ✗ <strong>Status Notice:</strong> {eligibility.reason}
                          </p>
                          <p className="text-zinc-400">
                            <strong>Resolution Step:</strong> Verify your Karnataka Domicile or
                            Income Certificate through the Nadakacheri portal before reapplying.
                          </p>
                        </>
                      )
                    ) : eligibility.status === "ELIGIBLE" ? (
                      <>
                        <p className="text-emerald-300">
                          ✓ <strong>ಅರ್ಜಿ ಮಾರ್ಗಸೂಚಿ:</strong> ನೀವು ಈ ಯೋಜನೆಯ ಸೌಲಭ್ಯಕ್ಕೆ ಸಂಪೂರ್ಣವಾಗಿ
                          ಅರ್ಹರಾಗಿದ್ದೀರಿ.
                        </p>
                        <p className="text-zinc-400">
                          <strong>ಹಂತ 1:</strong> ನಿಮ್ಮ ಕರ್ನಾಟಕ ವಾಸಸ್ಥಳ ಪ್ರಮಾಣಪತ್ರ, ಆಧಾರ್ ಕಾರ್ಡ್
                          ಹಾಗೂ ಪದವಿ ಪ್ರಮಾಣಪತ್ರವನ್ನು ಸಿದ್ಧವಾಗಿಟ್ಟುಕೊಳ್ಳಿ.
                        </p>
                        <p className="text-zinc-400">
                          <strong>ಹಂತ 2:</strong> ಸೇವಾ ಸಿಂಧು ಪೋರ್ಟಲ್ ಅಥವಾ ಹತ್ತಿರದ ಬೆಂಗಳೂರು ಒನ್ /
                          ಗ್ರಾಮ ಒನ್ ಕೇಂದ್ರದಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-red-300">
                          ✗ <strong>ಅನರ್ಹತೆಯ ಮಾಹಿತಿ:</strong> {eligibility.reason}
                        </p>
                        <p className="text-zinc-400">
                          <strong>ಪರಿಹಾರ ಮಾರ್ಗ:</strong> ಮರುಅರ್ಜಿ ಸಲ್ಲಿಸುವ ಮುನ್ನ ನಾಡಕಚೇರಿ ಪೋರ್ಟಲ್ ಮೂಲಕ
                          ನಿಮ್ಮ ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿಕೊಳ್ಳಿ.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LOCAL LLM PROFILER */}
        {activeTab === "llm" && (
          <div className="space-y-8">
            <div className="pb-4 border-b border-zinc-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Local LLM Quantization & Hardware Footprint Profiler</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Benchmarking
                </span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Calculates memory overhead, quantization loss trade-offs, and throughput metrics I
                observe when running local models on consumer hardware.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Controls */}
              <div className="space-y-6 p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">
                    Model Size (Parameter Count):
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "7B / 8B (Llama 3)", val: 8 },
                      { label: "14B (Qwen 2.5)", val: 14 },
                      { label: "32B (DeepSeek)", val: 32 },
                    ].map((m) => (
                      <button
                        key={m.val}
                        onClick={() => setModelParams(m.val)}
                        className={`p-2.5 rounded-lg text-xs font-mono text-center transition-all ${
                          modelParams === m.val
                            ? "bg-zinc-100 text-zinc-950 font-bold"
                            : "bg-zinc-950 text-zinc-400 border border-zinc-800"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">
                    Quantization Method (Precision):
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {(["FP16", "Q8", "Q4", "Q2"] as const).map((q) => (
                      <button
                        key={q}
                        onClick={() => setQuantLevel(q)}
                        className={`py-2 px-2 rounded-lg text-xs font-mono text-center transition-all ${
                          quantLevel === q
                            ? "bg-amber-400 text-zinc-950 font-bold"
                            : "bg-zinc-950 text-zinc-400 border border-zinc-800"
                        }`}
                      >
                        {q === "Q4" ? "Q4_K_M" : q}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] font-mono text-zinc-400 mt-2">
                    {quantLevel === "Q4"
                      ? "Recommended: Optimal balance of perplexity retention and 4-bit memory compression."
                      : quantLevel === "FP16"
                      ? "Uncompressed weights: High fidelity, requires high-end VRAM."
                      : quantLevel === "Q8"
                      ? "Near-lossless 8-bit precision with moderate memory overhead."
                      : "Aggressive 2-bit quantization: Noticeable perplexity degradation."}
                  </p>
                </div>
              </div>

              {/* Live Metrics Card */}
              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 text-xs font-mono text-zinc-400">
                  <span>Hardware Execution Metrics</span>
                  <span className="text-amber-400">Local Inference Profiler</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                      Estimated VRAM Required
                    </span>
                    <span className="text-2xl font-bold font-mono text-white mt-1 block">
                      {vramGB} <span className="text-xs text-zinc-400">GB</span>
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                      Tokens / Sec (Approx)
                    </span>
                    <span className="text-2xl font-bold font-mono text-emerald-400 mt-1 block">
                      ~{tokPerSec} <span className="text-xs text-zinc-400">t/s</span>
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/80 text-xs font-mono text-zinc-300 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Network Latency:</span>
                    <span className="text-emerald-400">0 ms (Airgapped / Localhost)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Data Privacy:</span>
                    <span className="text-emerald-400">100% On-Device</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Compute Target:</span>
                    <span className="text-zinc-200">Apple Silicon / RTX / llama.cpp Vulkan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: AUTOCLIP PIPELINE SCRUBBER */}
        {activeTab === "autoclip" && (
          <div className="space-y-8">
            <div className="pb-4 border-b border-zinc-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>AutoClip: Real-Time Dynamic Crop & Subtitle Pipeline</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Video ML
                </span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Visualizing speaker tracking and Whisper audio synchronization during automated 16:9
                to 9:16 reframing.
              </p>
            </div>

            {/* Scrubber Controls */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono text-zinc-300">
                <span>Timeline Scrubber:</span>
                <span className="text-amber-400 font-bold">00:{scrubTime < 10 ? `0${scrubTime}` : scrubTime} / 00:30</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                value={scrubTime}
                onChange={(e) => setScrubTime(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
            </div>

            {/* Video Canvas Simulation */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* 16:9 Input Simulation with 9:16 Crop Box */}
              <div className="md:col-span-8 p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                  <span>Source Footage (16:9 Horizontal)</span>
                  <span>Face Bounding Box: Active Tracking</span>
                </div>

                <div className="relative aspect-video w-full rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center">
                  {/* Subtle Grid / Silhouette */}
                  <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                  {/* Face Tracking Box moving dynamically based on scrubTime */}
                  <div
                    className="absolute top-1/4 w-28 h-36 rounded-lg border-2 border-emerald-400/80 bg-emerald-400/10 flex flex-col items-center justify-between p-1.5 transition-all duration-300"
                    style={{
                      left: `${Math.min(Math.max(20 + Math.sin(scrubTime * 0.4) * 25, 10), 70)}%`,
                    }}
                  >
                    <span className="text-[9px] font-mono text-emerald-300 uppercase">
                      Speaker 01 (98%)
                    </span>
                    <span className="text-[8px] font-mono text-emerald-400">Center: Tracked</span>
                  </div>

                  {/* 9:16 Crop Window Overlay */}
                  <div
                    className="absolute top-0 bottom-0 w-[30%] border-2 border-dashed border-amber-400/70 bg-amber-400/5 transition-all duration-300 pointer-events-none"
                    style={{
                      left: `${Math.min(Math.max(15 + Math.sin(scrubTime * 0.4) * 25, 5), 65)}%`,
                    }}
                  >
                    <span className="absolute top-2 left-2 text-[9px] font-mono text-amber-300 bg-black/60 px-1 py-0.5 rounded">
                      9:16 Crop Window
                    </span>
                  </div>
                </div>
              </div>

              {/* 9:16 Output Simulation */}
              <div className="md:col-span-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                  <span>Export Preview (9:16)</span>
                  <span className="text-amber-400">Shorts Ready</span>
                </div>

                <div className="relative aspect-[9/16] w-48 mx-auto rounded-xl bg-zinc-900 border border-zinc-700 overflow-hidden flex flex-col justify-end p-4">
                  {/* Speaker Mock Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-xs font-mono text-zinc-400">
                      Speaker
                    </div>
                  </div>

                  {/* Karaoke Subtitle Simulation */}
                  <div className="relative z-10 p-2 rounded-lg bg-black/80 backdrop-blur-sm border border-zinc-800 text-center font-bold text-xs tracking-wide">
                    <span className="text-amber-400 underline">Automated</span>{" "}
                    <span className="text-white">video processing</span>{" "}
                    <span className="text-zinc-400">with Whisper AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
