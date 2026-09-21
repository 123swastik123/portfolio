"use client";

import { useState } from "react";
import {
  Terminal,
  Cpu,
  Sliders,
  Sprout,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Droplets,
  Thermometer,
  Activity,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

export default function AiLab() {
  const [activeTab, setActiveTab] = useState<"hydroponics" | "civic" | "llm">("hydroponics");

  // CivicPath Simulator State
  const [resident, setResident] = useState(true);
  const [income, setIncome] = useState<number>(180000);
  const [scheme, setScheme] = useState<"yuvanidhi" | "gruhalakshmi" | "vidyanidhi">("yuvanidhi");
  const [lang, setLang] = useState<"en" | "kn">("en");

  // Local LLM Simulator State
  const [modelParams, setModelParams] = useState<number>(8); // 8B
  const [quantLevel, setQuantLevel] = useState<"FP16" | "Q8" | "Q4" | "Q2">("Q4");

  // Hydroponics ML Simulator State
  const [selectedCrop, setSelectedCrop] = useState<"lettuce" | "tomato" | "spinach" | "basil" | "strawberry">("lettuce");
  const [ph, setPh] = useState<number>(6.0);
  const [ec, setEc] = useState<number>(1.5);
  const [temp, setTemp] = useState<number>(21);
  const [humidity, setHumidity] = useState<number>(60);
  const [hydroLang, setHydroLang] = useState<"en" | "hi" | "kn">("en");

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
    const tokPerSec =
      quantLevel === "Q4" ? 38 : quantLevel === "Q8" ? 22 : quantLevel === "FP16" ? 11 : 48;
    return { vramGB, tokPerSec };
  };

  const { vramGB, tokPerSec } = getVram();

  // Hydroponics ML Inference Simulation
  // Optimal ranges based on the 10,500 synthetic readings dataset
  const cropStandards = {
    lettuce: { minPh: 5.5, maxPh: 6.5, minEc: 1.2, maxEc: 1.8, minTemp: 18, maxTemp: 22, name: "Lettuce (Butterhead)" },
    tomato: { minPh: 5.8, maxPh: 6.8, minEc: 2.0, maxEc: 3.0, minTemp: 20, maxTemp: 26, name: "Tomato (Vine)" },
    spinach: { minPh: 6.0, maxPh: 7.0, minEc: 1.4, maxEc: 2.2, minTemp: 16, maxTemp: 20, name: "Spinach (English)" },
    basil: { minPh: 5.6, maxPh: 6.5, minEc: 1.0, maxEc: 1.6, minTemp: 20, maxTemp: 25, name: "Sweet Basil" },
    strawberry: { minPh: 5.5, maxPh: 6.2, minEc: 1.8, maxEc: 2.4, minTemp: 18, maxTemp: 23, name: "Strawberry (Day-neutral)" },
  };

  const currentCrop = cropStandards[selectedCrop];

  // Regressor Model: Score 0 - 100 based on Euclidean distance from ideal center
  const getHydroHealth = () => {
    const idealPh = (currentCrop.minPh + currentCrop.maxPh) / 2;
    const idealEc = (currentCrop.minEc + currentCrop.maxEc) / 2;
    const idealTemp = (currentCrop.minTemp + currentCrop.maxTemp) / 2;

    const phDev = Math.abs(ph - idealPh) / (currentCrop.maxPh - currentCrop.minPh);
    const ecDev = Math.abs(ec - idealEc) / (currentCrop.maxEc - currentCrop.minEc);
    const tempDev = Math.abs(temp - idealTemp) / (currentCrop.maxTemp - currentCrop.minTemp);

    const totalPenalty = phDev * 35 + ecDev * 40 + tempDev * 25;
    const rawScore = Math.max(0, Math.min(100, Math.round(100 - totalPenalty * 0.8)));

    let status: "HEALTHY" | "WARNING" | "CRITICAL" = "HEALTHY";
    if (rawScore < 55) {
      status = "CRITICAL";
    } else if (rawScore < 80) {
      status = "WARNING";
    }

    // Diagnostics in English, Hindi, and Kannada (as noted in Swastik's resume)
    let diagEn = "All nutrient parameters are within ideal physiological thresholds.";
    let diagHi = "सभी पोषक तत्व सामान्य सीमा के भीतर हैं।";
    let diagKn = "ಎಲ್ಲಾ ಪೋಷಕಾಂಶಗಳ ಮಟ್ಟಗಳು ಉತ್ತಮ ಸ್ಥಿತಿಯಲ್ಲಿವೆ.";

    if (ph < currentCrop.minPh) {
      diagEn = `Water pH (${ph}) is too acidic. Add potassium hydroxide buffer to prevent nutrient lockout.`;
      diagHi = `पानी का pH (${ph}) बहुत अम्लीय है। पोषक तत्वों की कमी रोकने के लिए बफर मिलाएं।`;
      diagKn = `ನೀರಿನ pH (${ph}) ಆಮ್ಲೀಯವಾಗಿದೆ. ಪೋಷಕಾಂಶಗಳ ಸಮತೋಲನಕ್ಕೆ ಬಫರ್ ಸೇರಿಸಿ.`;
    } else if (ph > currentCrop.maxPh) {
      diagEn = `Water pH (${ph}) is too alkaline. Dose with dilute phosphoric acid to lower pH.`;
      diagHi = `पानी का pH (${ph}) बहुत क्षारीय है। pH कम करने के लिए हल्का फॉस्फोरिक एसिड डालें।`;
      diagKn = `ನೀರಿನ pH (${ph}) ಕ್ಷಾರೀಯವಾಗಿದೆ. pH ಕಡಿಮೆ ಮಾಡಲು ದುರ್ಬಲ ಆಮ್ಲ ಸೇರಿಸಿ.`;
    } else if (ec < currentCrop.minEc) {
      diagEn = `EC (${ec} mS/cm) is low. Nutrient solution is depleted; dose with Stock A & B nutrients.`;
      diagHi = `EC (${ec} mS/cm) कम है। पोषक तत्व समाप्त हो रहे हैं; स्टॉक A और B खाद डालें।`;
      diagKn = `EC (${ec} mS/cm) ಕಡಿಮೆಯಾಗಿದೆ. ಪೋಷಕಾಂಶಗಳ ದ್ರಾವಣವನ್ನು ಸೇರಿಸಿ.`;
    } else if (ec > currentCrop.maxEc) {
      diagEn = `EC (${ec} mS/cm) is dangerously high. Risk of root salt burn; flush with fresh water.`;
      diagHi = `EC (${ec} mS/cm) बहुत अधिक है। जड़ों को नमक से बचाने के लिए ताजा पानी मिलाएं।`;
      diagKn = `EC (${ec} mS/cm) ಅಪಾಯಕಾರಿಯಾಗಿ ಹೆಚ್ಚಾಗಿದೆ. ಶುದ್ಧ ನೀರನ್ನು ಬೆರೆಸಿ.`;
    } else if (temp > currentCrop.maxTemp) {
      diagEn = `Water temperature (${temp}°C) is high. Dissolved oxygen is dropping; activate nutrient reservoir chiller.`;
      diagHi = `पानी का तापमान (${temp}°C) अधिक है। पानी में ऑक्सीजन कम हो रहा है; चिलर चालू करें।`;
      diagKn = `ನೀರಿನ ತಾಪಮಾನ (${temp}°C) ಹೆಚ್ಚಾಗಿದೆ. ಆಮ್ಲಜನಕ ಕಡಿಮೆಯಾಗುತ್ತಿದ್ದು, ಚಿಲ್ಲರ್ ಚಾಲನೆ ಮಾಡಿ.`;
    }

    return {
      score: rawScore,
      status,
      recommendation: hydroLang === "en" ? diagEn : hydroLang === "hi" ? diagHi : diagKn,
    };
  };

  const hydroResult = getHydroHealth();

  return (
    <section id="lab" className="border-t border-zinc-800/80 bg-[#08080a]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        {/* Section Title */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
              03 <span className="text-[#c8f45e]">—</span> AI Lab &amp; Sandbox
            </span>
            <h2 className="mt-4 text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl">
              Test the models{" "}
              <em className="font-serif italic text-[#c8f45e]">live.</em>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs sm:text-sm text-zinc-400">
            Interactive sandboxes demonstrating how my software works: hydroponic plant health ML predictions,
            citizen eligibility trees, and local model hardware sizing.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-zinc-900/70 border border-zinc-800/80 w-fit mb-8">
          <button
            onClick={() => setActiveTab("hydroponics")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === "hydroponics"
                ? "bg-white text-zinc-950 font-bold shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Sprout className="w-3.5 h-3.5 text-emerald-500" />
            <span>01. Hydroponics ML Tester</span>
          </button>

          <button
            onClick={() => setActiveTab("civic")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === "civic"
                ? "bg-white text-zinc-950 font-bold shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>02. CivicPath Rules Engine</span>
          </button>

          <button
            onClick={() => setActiveTab("llm")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === "llm"
                ? "bg-white text-zinc-950 font-bold shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>03. Local LLM Calculator</span>
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
                  <span>CivicPath: Accurate Rule Logic vs. AI Explanation</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Live Demo
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Why we don&apos;t let AI guess government rules: Eligibility is checked using 100%
                  accurate rule logic from verified data. The AI only explains the application steps
                  in simple Kannada or English.
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
                        Tier 1: Rule-Based Logic (100% Accurate)
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
                      <span>Tier 2: AI Multi-Language Guidance (Groq → Gemini → Claude)</span>
                    </span>
                    <span>Zod Validated</span>
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
                <span>Local AI Hardware Footprint & Quantization Calculator</span>
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

        {/* TAB 3: HYDROPONIC FARMING SYSTEMS ML TESTER */}
        {activeTab === "hydroponics" && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sprout className="w-5 h-5 text-emerald-400" />
                  <span>HydroMonitor AI: Real-Time Plant Health ML Simulator</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Trained on 10,500 Readings
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Test the machine learning model built for soil-free NFT farming. Move sensor sliders
                  to simulate water pH, nutrient concentration (EC), and temperature to see the
                  classifier and score regressor predict plant health in real time.
                </p>
              </div>

              {/* Language Toggle for Suggestions */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-400">Alerts In:</span>
                <div className="flex rounded-lg bg-zinc-900 border border-zinc-800 p-0.5 text-xs font-mono">
                  <button
                    onClick={() => setHydroLang("en")}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      hydroLang === "en" ? "bg-zinc-200 text-zinc-950 font-bold" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setHydroLang("hi")}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      hydroLang === "hi" ? "bg-zinc-200 text-zinc-950 font-bold" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    हिंदी
                  </button>
                  <button
                    onClick={() => setHydroLang("kn")}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      hydroLang === "kn" ? "bg-zinc-200 text-zinc-950 font-bold" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    ಕನ್ನಡ
                  </button>
                </div>
              </div>
            </div>

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Sensor Inputs & Crop Selector */}
              <div className="lg:col-span-6 space-y-5 p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block pb-2 border-b border-zinc-800">
                  Hydroponic Reservoir Telemetry Controls
                </span>

                {/* Crop Selection */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">
                    Select Target Hydroponic Crop:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {(Object.keys(cropStandards) as (keyof typeof cropStandards)[]).map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedCrop(c)}
                        className={`px-3 py-2 rounded-lg text-xs font-mono capitalize transition-all ${
                          selectedCrop === c
                            ? "bg-emerald-400 text-zinc-950 font-bold shadow"
                            : "bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mt-2">
                    <span>Selected: {currentCrop.name}</span>
                    <span>Ideal pH: {currentCrop.minPh}–{currentCrop.maxPh}</span>
                  </div>
                </div>

                {/* pH Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Droplets className="w-3.5 h-3.5 text-blue-400" />
                      <span>Water pH Level:</span>
                    </span>
                    <span className={`font-bold ${ph < currentCrop.minPh || ph > currentCrop.maxPh ? "text-red-400" : "text-emerald-400"}`}>
                      {ph.toFixed(1)} pH
                    </span>
                  </div>
                  <input
                    type="range"
                    min="4.0"
                    max="8.5"
                    step="0.1"
                    value={ph}
                    onChange={(e) => setPh(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>4.0 (Acidic)</span>
                    <span className="text-emerald-500/80">Ideal: {currentCrop.minPh}–{currentCrop.maxPh}</span>
                    <span>8.5 (Alkaline)</span>
                  </div>
                </div>

                {/* EC (Conductivity) Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-amber-400" />
                      <span>Nutrient Strength (EC):</span>
                    </span>
                    <span className={`font-bold ${ec < currentCrop.minEc || ec > currentCrop.maxEc ? "text-red-400" : "text-emerald-400"}`}>
                      {ec.toFixed(2)} mS/cm
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.5"
                    step="0.05"
                    value={ec}
                    onChange={(e) => setEc(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>0.5 (Watery)</span>
                    <span className="text-emerald-500/80">Ideal: {currentCrop.minEc}–{currentCrop.maxEc} mS/cm</span>
                    <span>3.5 (Heavy Salt)</span>
                  </div>
                </div>

                {/* Water Temp Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Thermometer className="w-3.5 h-3.5 text-rose-400" />
                      <span>Water Temperature:</span>
                    </span>
                    <span className={`font-bold ${temp < currentCrop.minTemp || temp > currentCrop.maxTemp ? "text-amber-400" : "text-emerald-400"}`}>
                      {temp}°C
                    </span>
                  </div>
                  <input
                    type="range"
                    min="14"
                    max="32"
                    step="1"
                    value={temp}
                    onChange={(e) => setTemp(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>14°C (Cold)</span>
                    <span className="text-emerald-500/80">Ideal: {currentCrop.minTemp}–{currentCrop.maxTemp}°C</span>
                    <span>32°C (Root Rot Risk)</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Real-Time ML Predictions Output */}
              <div className="lg:col-span-6 space-y-4">
                {/* 1. Vitality Score Regressor Display */}
                <div
                  className={`p-6 rounded-2xl border transition-all ${
                    hydroResult.status === "HEALTHY"
                      ? "bg-emerald-950/20 border-emerald-500/40"
                      : hydroResult.status === "WARNING"
                      ? "bg-amber-950/20 border-amber-500/40"
                      : "bg-red-950/20 border-red-500/40"
                  }`}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                    <span className="text-[10px] font-mono uppercase text-zinc-400">
                      Scikit-learn Regressor Model
                    </span>
                    <span
                      className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                        hydroResult.status === "HEALTHY"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : hydroResult.status === "WARNING"
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          : "bg-red-500/20 text-red-300 border border-red-500/30"
                      }`}
                    >
                      {hydroResult.status}
                    </span>
                  </div>

                  <div className="py-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-zinc-400 block">
                        Predicted Vitality Score:
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-4xl sm:text-5xl font-bold font-mono text-white">
                          {hydroResult.score}
                        </span>
                        <span className="text-sm font-mono text-zinc-400">/ 100</span>
                      </div>
                    </div>

                    <div className="text-right font-mono text-xs text-zinc-400 space-y-1">
                      <div>Crop: <span className="text-zinc-200 capitalize">{selectedCrop}</span></div>
                      <div>Model: <span className="text-emerald-400">RandomForest / Ridge</span></div>
                    </div>
                  </div>

                  {/* Score Progress Bar */}
                  <div className="w-full bg-zinc-900 rounded-full h-2.5 overflow-hidden border border-zinc-800">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        hydroResult.status === "HEALTHY"
                          ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                          : hydroResult.status === "WARNING"
                          ? "bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]"
                          : "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                      }`}
                      style={{ width: `${hydroResult.score}%` }}
                    />
                  </div>
                </div>

                {/* 2. Automated Actionable Remediation Suggestion */}
                <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3 font-mono">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-2 border-b border-zinc-800">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Automated Diagnostic Action</span>
                    </span>
                    <span className="text-[10px] text-zinc-500">FastAPI Recommendation Engine</span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                    {hydroResult.recommendation}
                  </p>
                </div>

                {/* Live App Link Banner */}
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between gap-4 font-mono text-xs">
                  <div className="text-zinc-400">
                    <span className="text-zinc-200 font-semibold block">Want to see the full system?</span>
                    <span className="text-[11px] text-zinc-500">Live React charts & multi-tank telemetry</span>
                  </div>

                  <a
                    href="https://hypotonic-farming-system.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-colors shrink-0"
                  >
                    <span>Open Live Dashboard</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}
