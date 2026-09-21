import { Project, SkillCategory, EducationInfo } from "@/types";

export const PERSONAL_INFO = {
  name: "Swastik S. Karabashettar",
  shortName: "Swastik",
  role: "AI & Data Science Student / Builder",
  location: "Bengaluru, Karnataka, India",
  coordinates: "12.9716° N, 77.5946° E",
  timezone: "Asia/Kolkata",
  email: "swastikaradashettar@gmail.com",
  github: "https://github.com/123swastik123",
  bio: "Second-year Artificial Intelligence & Data Science student exploring generative systems, local LLM architectures, and practical automation tools. Passionate about understanding how models think and engineering deterministic systems around them.",
  status: "Exploring Local LLMs & Agentic Systems",
  availability: "Open to AI Research & Engineering Internships",
};

export const EDUCATION_INFO: EducationInfo = {
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Artificial Intelligence and Data Science",
  institution: "University Visvesvaraya College of Engineering (UVCE)",
  location: "Bengaluru, Karnataka, India",
  period: "2025 — 2029",
  expectedGraduation: "2029",
  status: "2nd Year Undergraduate",
  focusAreas: [
    "Machine Learning Foundations",
    "Generative AI & LLM Systems",
    "Data Structures & C/C++ Systems",
    "Deterministic & Probabilistic Hybrid Architectures",
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "civicpath",
    number: "01",
    title: "CivicPath / NammaPath",
    subtitle: "Multilingual AI Platform for Karnataka Civic Services",
    category: "Generative AI & Civic Tech",
    period: "2026",
    summary:
      "A multilingual AI-assisted platform designed to help citizens navigate Karnataka government services, decipher complex eligibility criteria, and streamline documentation without administrative friction.",
    problem:
      "Civic schemes and governmental welfare benefits in Karnataka often feature rigid, dense bureaucratic rules spread across fragmented portals. Citizens frequently struggle with eligibility self-assessment, language barriers, and required documentation checklists.",
    solution:
      "CivicPath unifies service discovery by pairing a deterministic rule engine (ensuring 100% legal eligibility accuracy without AI hallucinations) with a generative LLM layer that translates, simplifies, and explains administrative workflows in conversational Kannada and English.",
    architecture: [
      "Deterministic Rule Validation Engine evaluating user parameters (age, income thresholds, domicile criteria) against state policy matrices.",
      "LLM Synthesis Layer generating plain-language guidance, document checklists, and actionable next steps.",
      "Bilingual translation pipeline supporting real-time English and Kannada queries.",
      "PostgreSQL database on Supabase managing verified scheme schemas and session state.",
    ],
    keyFeatures: [
      "Zero-hallucination deterministic eligibility verification",
      "Multilingual natural language explanation in Kannada & English",
      "Context-aware document preparation checklists",
      "Next.js App Router frontend with real-time state synchronization",
      "Supabase PostgreSQL schema for municipal & state schemes",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Generative AI",
      "LLM Integration",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/123swastik123/Government-work-assistant-ai",
    badgeText: "Civic Intelligence",
    architectureDiagram: {
      nodes: [
        { label: "Citizen Input", role: "Demographic & Scheme Query", type: "input" },
        { label: "Deterministic Engine", role: "Hard Rule & Threshold Audit", type: "process" },
        { label: "LLM Synthesizer", role: "Kannada/English Explanation", type: "ai" },
        { label: "Step-by-Step Roadmaps", role: "Required Docs & Office Checklist", type: "output" },
      ],
      flowDescription: "Citizen Query → Rule Matrix Engine (No Hallucination) → Generative Synthesis → Kannada/English Actionable Plan",
    },
  },
  {
    id: "autoclip",
    number: "02",
    title: "AutoClip",
    subtitle: "Automated AI Short-Form Video Reframing & Captioning Engine",
    category: "Computer Vision & Audio ML",
    period: "2026",
    summary:
      "An automated pipeline turning long-form horizontal video into high-engagement vertical Shorts using face-following dynamic crops, Whisper AI transcription, and word-by-word animated karaoke captions.",
    problem:
      "Manually editing horizontal podcasts and interviews into vertical 9:16 video for YouTube Shorts and Reels takes hours of tedious keyframing, manual speaker tracking, speech transcribing, and subtitle timing.",
    solution:
      "AutoClip automates the entire transformation pipeline: detecting speaker faces, calculating camera crop pans with motion smoothing, transcribing audio with Whisper, generating timestamped word-level karaoke subtitles, and performing automated loudness and quality checks.",
    architecture: [
      "Audio Extraction & Whisper AI transcription generating word-level timestamps.",
      "Facial detection and bounding box computation with Kalman filter-based smoothing for fluid camera pans.",
      "Dynamic 16:9 to 9:16 crop calculation centered on the active speaker.",
      "FFmpeg compositing engine overlaying animated karaoke subtitles with audio loudness normalization.",
    ],
    keyFeatures: [
      "Intelligent face-following dynamic 9:16 reframing",
      "AI transcription with sub-second timestamp alignment",
      "Word-by-word animated karaoke subtitle burning",
      "Audio processing with automated loudness normalization (LUFS)",
      "Automated quality checks for jitter and speaker transition",
    ],
    technologies: [
      "Python",
      "Whisper AI",
      "Computer Vision",
      "FFmpeg",
      "Audio Processing",
      "Automation",
    ],
    githubUrl: "https://github.com/123swastik123/Autoclip",
    badgeText: "Media Automation",
    architectureDiagram: {
      nodes: [
        { label: "Raw Video (16:9)", role: "Horizontal footage source", type: "input" },
        { label: "Face Tracking Engine", role: "Speaker center detection", type: "process" },
        { label: "Whisper Transcription", role: "Word-level timestamp tokens", type: "ai" },
        { label: "Vertical Short (9:16)", role: "Karaoke captions + smooth crop", type: "output" },
      ],
      flowDescription: "Source Video → Audio Extraction + Face Detection → Dynamic Crop + Subtitle Sync → Rendered 9:16 Video",
    },
  },
  {
    id: "smart-hydroponics",
    number: "03",
    title: "Smart Hydroponic Health System",
    subtitle: "AI/ML & IoT Real-Time Plant Health Prediction Prototype",
    category: "IoT & Predictive ML",
    period: "2025",
    summary:
      "An integrated IoT and machine learning prototype that continuously monitors hydroponic environmental parameters, detects abnormal nutrient conditions, and predicts plant health vitality.",
    problem:
      "Hydroponic plants lack soil buffer capacity; slight imbalances in pH, electrical conductivity (EC), ambient temperature, or water levels can cause root decay and crop failure within hours if left unnoticed.",
    solution:
      "Built a complete edge-to-dashboard prototype that reads environmental sensor telemetry, runs a trained predictive ML model to flag early physiological stress, and triggers automated corrective nutrient recommendations.",
    architecture: [
      "Telemetry ingestion pipeline collecting pH, EC, temperature, and humidity metrics.",
      "Machine learning classification model trained to predict plant health states (Optimal, Nutrient Stress, Root Vulnerability).",
      "FastAPI backend serving real-time sensor streams and inference endpoints.",
      "Interactive React dashboard for live metrics tracking and alerts.",
      "SQLite local datastore for edge logging and offline resilience.",
    ],
    keyFeatures: [
      "Continuous multi-parameter environmental telemetry ingestion",
      "Trained ML classifier for early plant stress detection",
      "Abnormal-condition alerting before visible leaf necrosis",
      "FastAPI inference microservice with SQLite persistence",
      "Clean, responsive analytics dashboard",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "FastAPI",
      "React",
      "SQLite",
      "IoT Telemetry",
    ],
    githubUrl: "https://github.com/123swastik123/Hypotonic-farming-system",
    badgeText: "IoT & Applied ML",
    architectureDiagram: {
      nodes: [
        { label: "Sensors (pH / EC / Temp)", role: "Edge telemetry stream", type: "input" },
        { label: "FastAPI Pipeline", role: "Data validation & ingestion", type: "process" },
        { label: "ML Health Predictor", role: "Anomaly & vitality classifier", type: "ai" },
        { label: "Telemetry Dashboard", role: "Live telemetry & alerts", type: "output" },
      ],
      flowDescription: "Sensor Stream → Ingestion Microservice → ML Inference Engine → Live Diagnostics Dashboard",
    },
  },
  {
    id: "omnicomm",
    number: "04",
    title: "OmniComm",
    subtitle: "Sign-Language Recognition & Multimodal Integration System",
    category: "Computer Vision & Team Hackathon",
    period: "CodeFury 9.0",
    summary:
      "A collaborative accessibility project built during the CodeFury 9.0 Hackathon, integrating computer vision-based sign language recognition with communication endpoints.",
    problem:
      "Bridging the communication divide between the Deaf/Hard-of-Hearing community and hearing individuals requires low-latency, accessible sign-language translation tools that interface cleanly with everyday messaging.",
    solution:
      "Our team designed OmniComm to capture gesture streams, classify sign language postures, and translate them into text/speech. My personal contribution focused on the system integration layer—connecting the vision inference output to the downstream application services.",
    architecture: [
      "Gesture capture and computer vision pipeline for hand landmark extraction.",
      "Classification pipeline translating hand coordinate sequences into alphanumeric tokens.",
      "System integration and orchestration layer connecting vision outputs to application state.",
    ],
    keyFeatures: [
      "Real-time hand gesture tracking and feature extraction",
      "Multimodal system integration across vision model and web frontend",
      "Built under rapid hackathon constraints at CodeFury 9.0",
    ],
    technologies: [
      "Computer Vision",
      "Python",
      "System Integration",
      "Team Hackathon",
    ],
    githubUrl: "https://github.com/123swastik123",
    teamAttribution:
      "Team Project for CodeFury 9.0. Built collaboratively with peers; my role focused on system integration and bridging components.",
    badgeText: "Hackathon Integration",
    architectureDiagram: {
      nodes: [
        { label: "Camera Stream", role: "Live hand gesture feed", type: "input" },
        { label: "Vision Pipeline", role: "Landmark coordinate extraction", type: "ai" },
        { label: "Integration Layer", role: "System glue & payload router", type: "process" },
        { label: "Text/Audio Output", role: "Decoded communication UI", type: "output" },
      ],
      flowDescription: "Video Stream → Gesture Recognition → Integration Layer (My Focus) → Application Output",
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Core Systems",
    subtitle: "Foundational languages for systems programming, data pipelines, and algorithms",
    items: [
      {
        name: "Python",
        context: "Daily driver for ML experimentation, data processing, backend services, and AI scripts.",
        tag: "Daily Driver",
      },
      {
        name: "C & C++",
        context: "Academic systems foundation at UVCE; understanding memory layout, data structures, and compute efficiency.",
        tag: "Core Foundation",
      },
      {
        name: "Basic JavaScript & HTML",
        context: "Web fundamentals applied in UI components, event handling, and DOM structures.",
        tag: "Web Basics",
      },
    ],
  },
  {
    title: "AI & Machine Intelligence",
    subtitle: "Active experimentation with generative pipelines, local models, and applied ML",
    items: [
      {
        name: "Generative AI & LLMs",
        context: "Prompt engineering, structured JSON outputs, function calling, and multi-step reasoning workflows.",
        tag: "Primary Focus",
      },
      {
        name: "Local LLM Experimentation",
        context: "Testing local inference (Ollama, llama.cpp, quantized GGUF models), latency profiling, and hardware bounds.",
        tag: "Active Lab",
      },
      {
        name: "LLM System Integration",
        context: "Pairing deterministic business logic with probabilistic models to prevent hallucinations (e.g., CivicPath).",
        tag: "Applied",
      },
      {
        name: "Machine Learning",
        context: "Feature engineering, classical classifiers, Scikit-Learn pipelines, and anomaly detection models.",
        tag: "Applied ML",
      },
    ],
  },
  {
    title: "Web, Data & Backends",
    subtitle: "Modern stacks for shipping functional prototypes and full-stack utilities",
    items: [
      {
        name: "Next.js & TypeScript",
        context: "Modern web frontend with App Router, server-rendered components, and type safety.",
        tag: "Frontend",
      },
      {
        name: "Supabase & PostgreSQL",
        context: "Relational database modeling, row schemas, and real-time backend services.",
        tag: "Database",
      },
      {
        name: "FastAPI & SQLite",
        context: "Lightweight, high-performance Python microservices for serving ML inference and IoT logs.",
        tag: "Backend",
      },
    ],
  },
  {
    title: "Developer Workflow & Deployment",
    subtitle: "Tools and infrastructure for continuous iteration and version control",
    items: [
      {
        name: "Git & GitHub",
        context: "Branching workflows, version control, public repositories, and collaborative tracking.",
        tag: "Essential",
      },
      {
        name: "Vercel & Render",
        context: "Continuous deployment for Next.js web applications, API services, and automated build pipelines.",
        tag: "Deployment",
      },
    ],
  },
];

export const AI_PHILOSOPHY = {
  quote:
    "AI is shifting every single week. Instead of memorizing static frameworks, I focus on understanding the underlying model dynamics—experimenting with local LLMs, studying token streams, and building deterministic scaffolding that keeps generative systems reliable.",
  pillars: [
    {
      title: "Pragmatic Over Hype",
      description:
        "Rather than building shallow wrappers around standard prompts, I focus on hybrid architectures where deterministic rules handle critical business logic and AI provides adaptive human synthesis.",
    },
    {
      title: "Local-First Curiosity",
      description:
        "I actively run and benchmark open-weights models locally to understand context window boundaries, quantization tradeoffs (Q4 vs Q8), memory bandwidth, and edge inference constraints.",
    },
    {
      title: "Constant Student Mindset",
      description:
        "As a 2nd-year undergraduate at UVCE, I treat every project as an experimental laboratory—shipping code, dissecting failure points, and iterating alongside the rapid pace of AI research.",
    },
  ],
};
