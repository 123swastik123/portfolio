import { Project, SkillCategory, EducationInfo } from "@/types";

export const PERSONAL_INFO = {
  name: "Swastik.S.Karabashettar",
  shortName: "Swastik",
  role: "B.Tech Student & AI Developer",
  location: "Bengaluru, Karnataka, India",
  coordinates: "12.9716° N, 77.5946° E",
  timezone: "Asia/Kolkata",
  email: "swastikarabashettar@gmail.com",
  gmailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=swastikarabashettar@gmail.com",
  phone: "+91 9108263297",
  github: "https://github.com/123swastik123",
  resumeUrl: "/resume.pdf",
  bio: "Second-year B.Tech student in Artificial Intelligence and Data Science at UVCE Bengaluru. I learn by building things—from computer vision tools to citizen platforms and machine learning dashboards. Passionate about exploring emerging models and engineering reliable software around them.",
  status: "Exploring Local LLMs & Multimodal Systems",
  availability: "Open to AI & Software Internships / UVCE '29",
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
    "Machine Learning & Data Science",
    "Generative AI & LLM Systems",
    "Data Structures & Systems Programming",
    "Full-Stack Web & Backend Architectures",
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "smart-hydroponics",
    number: "01",
    title: "HydroMonitor AI",
    subtitle: "Smart Hydroponic Plant Health Monitoring System",
    category: "IoT Telemetry & Machine Learning",
    period: "2025",
    image: "/api/image/hydromonitor.png",
    whatItIs:
      "A smart monitoring platform for soil-free hydroponic farms that analyzes environmental sensor data in real-time, rates plant condition as Healthy, Warning, or Critical, and gives actionable recommendations.",
    problemSolved:
      "Hydroponic crops grow in water without soil. If water temperature, pH, or nutrient levels drift even slightly, plants can suffer severe stress or root damage before visible discoloration appears on leaves.",
    whatIBuilt:
      "Built the complete software side as part of a 7-person team: engineered a synthetic dataset of 10,500 sensor readings across 5 crops (lettuce, tomato, spinach, basil, strawberry), trained two ML models, built a FastAPI backend, and designed an interactive React dashboard.",
    whyItsInteresting:
      "Instead of just showing raw sensor numbers, it uses machine learning to score crop vitality from 0 to 100 based on healthy ranges for each specific plant type. It also provides corrective guidance and alerts in English, Hindi, and Kannada.",
    keyFeatures: [
      "Trained on 10,500 readings across lettuce, tomato, spinach, basil, and strawberry",
      "Dual ML architecture: one classifier for plant status + one regressor for 0–100 health score",
      "FastAPI backend microservice with SQLite database",
      "Live interactive React dashboard with simulated sensor telemetry and charts",
      "Actionable recommendations and alerts in English, Hindi, and Kannada",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "FastAPI",
      "React",
      "SQLite",
      "Tailwind CSS",
      "Recharts",
    ],
    githubUrl: "https://github.com/123swastik123/Hypotonic-farming-system",
    liveUrl: "https://hypotonic-farming-system.vercel.app/",
    teamAttribution:
      "Team project of 7. I designed and built the complete software stack: ML models, FastAPI backend, and React dashboard.",
    badgeText: "Live Dashboard",
    architectureDiagram: {
      nodes: [
        { label: "Sensor Readings", role: "pH, EC, water temp, humidity", type: "input" },
        { label: "FastAPI Backend", role: "Data validation & SQLite logging", type: "process" },
        { label: "Scikit-learn Models", role: "Vitality classifier & score regressor", type: "ai" },
        { label: "Live Dashboard", role: "Real-time charts & alerts in 3 languages", type: "output" },
      ],
      flowDescription:
        "Sensor Readings → FastAPI Ingestion → Machine Learning Models (Score 0-100) → Live Multilingual Dashboard",
    },
  },
  {
    id: "civicpath",
    number: "02",
    title: "CivicPath / NammaPath",
    subtitle: "Multilingual Government Services Assistant for Karnataka",
    category: "AI & Civic Web Platform",
    period: "2026",
    image: "/api/image/nammapath.png",
    whatItIs:
      "A free citizen-guidance website that helps people in Karnataka understand which government services they qualify for, what documents they need, and step-by-step how to apply. Available in English, Kannada, and Hindi across 15+ state and central schemes.",
    problemSolved:
      "Finding government scheme requirements in Karnataka is often confusing and spread across disjointed portals. Citizens often struggle with eligibility requirements, language barriers, and figuring out what official paperwork to bring.",
    whatIBuilt:
      "Built the full-stack web application using Next.js, TypeScript, and Supabase. Engineered a strict rule engine so eligibility results are calculated from verified data without relying on AI guesses, and added multi-model AI fallback (Groq → Gemini → Claude) to explain results in plain language with downloadable PDF checklists.",
    whyItsInteresting:
      "Unlike standard AI chatbots that might hallucinate legal rules, CivicPath separates rule evaluation from text explanation. The rule check runs against verified state criteria first; the AI only explains the steps and generates your checklist. It also features automatic provider failover so the site stays online even if an AI provider goes down.",
    keyFeatures: [
      "Plain rule-based condition trees over verified database (no AI hallucinations for rules/fees)",
      "Multi-provider AI fallback: tries Groq first, then Gemini, then Claude",
      "AI responses validated with Zod schemas before being shown to users",
      "Multilingual support in English, Kannada, and Hindi",
      "Automated PDF application checklist generation (pdf-lib)",
      "Supabase / PostgreSQL database with row-level security and 37 Jest tests",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Groq / Gemini / Claude APIs",
      "Tailwind CSS",
      "Jest",
    ],
    githubUrl: "https://github.com/123swastik123/Government-work-assistant-ai",
    liveUrl: "https://government-work-assistant-ai-two.vercel.app/",
    badgeText: "Live Web App",
    architectureDiagram: {
      nodes: [
        { label: "Citizen Input", role: "Age, income, residency details", type: "input" },
        { label: "Rule Engine", role: "Checked against verified policy data", type: "process" },
        { label: "AI Explainer", role: "Plain Kannada, Hindi & English", type: "ai" },
        { label: "PDF Checklist", role: "Required documents & next steps", type: "output" },
      ],
      flowDescription:
        "User Input → Verified Database Rule Check (100% Accurate) → AI Language Explanation → Downloadable PDF Roadmap",
    },
  },
  {
    id: "study-drive",
    number: "03",
    title: "Study Drive / College Manager",
    subtitle: "Academic Command Center & Epistemic Truth Engine (UVCE AI&DS)",
    category: "AI Systems & Academic OS",
    period: "2026",
    image: "/api/image/studydrive.png",
    whatItIs:
      "An academic command center and personal AI assistant for UVCE Semester 3 Artificial Intelligence & Data Science, engineered with an epistemic truth engine: NO EVIDENCE = NO FACT. Quarantines unconfirmed chat rumors, indexes 100+ Google Drive study notes, and tracks real-time university attendance compliance.",
    problemSolved:
      "College WhatsApp groups are flooded with unverified exam dates, conflicting timetable rumors, and lost assignment deadlines. Meanwhile, tracking 75% university attendance rules and finding semester notes across multiple drives causes unnecessary academic anxiety.",
    whatIBuilt:
      "Engineered the full-stack system with FastAPI, SQLite, and an Arshakir dark-theme student OS. Built a WhatsApp collector daemon that quarantines unverified chat rumors until verified against official departmental circulars, integrated a local Gemma 4 RAG pipeline with KaTeX STEM math rendering, and implemented dynamic 75% attendance compliance tracking.",
    whyItsInteresting:
      "Adheres to a strict Epistemic Truth Engine ('NO EVIDENCE = NO FACT'). Unverified messages in WhatsApp groups are held in quarantine rather than blindly trusted. The AI assistant cites verified departmental source documents before confirming any academic deadlines, preventing hallucinated dates or exam misinformation.",
    keyFeatures: [
      "Epistemic Truth Engine with WhatsApp rumor quarantine ('NO EVIDENCE = NO FACT')",
      "75% university attendance compliance calculator with dynamic safe-skip metrics",
      "Verified Semester 3 subjects hub (DSA, ML, TOC, DMS, Networking, Labs)",
      "Indexed Google Drive study notes with semester historical archive separation",
      "Local Gemma 4 AI Assistant with KaTeX mathematical formula rendering",
      "Real-time Omnibar global search (Ctrl+K) with provenance status badges",
      "Serverless Vercel cloud deployment with automated SQLite staging",
    ],
    technologies: [
      "FastAPI",
      "Python",
      "SQLite",
      "TypeScript",
      "Tailwind CSS",
      "Gemma 4 / Ollama",
      "KaTeX",
      "Vercel Serverless",
    ],
    githubUrl: "https://github.com/123swastik123/college_manager",
    liveUrl: "https://college-manager.vercel.app/",
    badgeText: "Live Academic OS",
    architectureDiagram: {
      nodes: [
        { label: "Class Chat & Gmail", role: "Unverified messages & notices", type: "input" },
        { label: "Truth Engine Quarantine", role: "Verification against official circulars", type: "process" },
        { label: "RAG & Formula Engine", role: "Gemma 4 + KaTeX STEM math", type: "ai" },
        { label: "Command Center", role: "Schedule, 75% attendance & Drive hub", type: "output" },
      ],
      flowDescription:
        "Raw Chat Ingest → Strict Truth-Engine Quarantine (NO EVIDENCE = NO FACT) → Gemma 4 RAG Verification → Live Student Dashboard",
    },
  },
  {
    id: "omnicomm",
    number: "04",
    title: "OmniComm",
    subtitle: "Real-Time AI Sign Language & Speech Communication Platform",
    category: "Computer Vision & Multimodal AI",
    period: "CodeFury 9.0 · 2026",
    image: "/api/image/omnicomm.png",
    whatItIs:
      "A bidirectional AI communication platform bridging Indian Sign Language (ISL) / ASL signers and speaking peers through real-time MediaPipe hand tracking, neural token translation, and automated speech synthesis.",
    problemSolved:
      "Over 70 million deaf individuals globally encounter friction communicating with non-signers in everyday healthcare, civic, and professional settings where trained human interpreters are unavailable.",
    whatIBuilt:
      "Developed the computer vision landmark extraction pipeline using MediaPipe Hands, designed the gesture-token grammar stitching engine, and built an interactive cyberpunk glassmorphic UI with WebRTC video calling and dual-channel live subtitles.",
    whyItsInteresting:
      "Prioritizes human agency over black-box guessing: rather than immediately speaking unverified tokens, recognized sign gestures are compiled into natural grammatical sentences and shown in an AI Review Dock for signer confirmation before TTS audio is broadcast.",
    teamAttribution:
      "Team project of 4 (Byte Hogs) for CodeFury 9.0. We integrated an existing sign-language model into the app, and I did most of the core development, UI engineering, and system integration work.",
    keyFeatures: [
      "Real-time 21-point 3D hand landmark tracking via MediaPipe",
      "Dual-mode support for Indian Sign Language (ISL) and American Sign Language (ASL)",
      "Grammar stitching engine: converts raw token sequences into fluent sentences",
      "Human-in-the-loop AI Review Dock with 1-click signer confirmation",
      "Two-way audio pipeline: Whisper speech-to-text + Web Speech TTS synthesis",
      "Futuristic cyber-glass darkroom UI with live landmark vector HUD and audio waveforms",
    ],
    technologies: [
      "Python",
      "MediaPipe",
      "OpenCV",
      "FastAPI",
      "WebRTC",
      "Tailwind CSS",
      "Whisper",
      "JavaScript (ES6+)",
    ],
    githubUrl: "https://github.com/123swastik123",
    badgeText: "Vision & WebRTC",
    architectureDiagram: {
      nodes: [
        { label: "Webcam Video", role: "Captures 21 3D hand landmarks", type: "input" },
        { label: "MediaPipe & ML", role: "Classifies ISL / ASL gesture tokens", type: "ai" },
        { label: "Grammar Stitcher", role: "Human confirmation & sentence assembly", type: "process" },
        { label: "Audio Synthesis", role: "TTS audio & live bidirectional captions", type: "output" },
      ],
      flowDescription:
        "Camera Video → 21-Landmark Vector Tracking → ML Token Classification → Grammar Assembly → Voice Audio & Captions",
    },
  },
  {
    id: "autoclip",
    number: "05",
    title: "AutoClip",
    subtitle: "Automated AI Short-Form Video Generator & Motion Director",
    category: "Computer Vision & Audio ML",
    period: "2026",
    image: "/api/image/autoclip.png",
    whatItIs:
      "An automated video processing pipeline that takes long horizontal videos (interviews, podcasts, talks) and automatically converts them into vertical (9:16) YouTube Shorts and Reels.",
    problemSolved:
      "Manually editing horizontal video into vertical clips is slow and repetitive: you have to manually crop, track speakers as they move, transcribe audio, time subtitles, and add background music.",
    whatIBuilt:
      "Developed the end-to-end Python automation pipeline using OpenCV, FFmpeg, and Faster-Whisper. Implemented face detection to keep the speaker centered with smooth camera panning, word-by-word animated karaoke subtitles, audio ducking, and automated quality checks.",
    whyItsInteresting:
      "It eliminates hours of manual video editing. It uses OpenCV to track the speaker's face with motion smoothing so the camera doesn't jitter, adds dynamic karaoke subtitles synchronized down to the word, and runs automated checks on frame rate, audio loudness, and pacing before finalizing the video.",
    keyFeatures: [
      "Face tracking with OpenCV that pans the 9:16 crop smoothly to follow speakers",
      "Automatic zoom-in on high-energy conversational moments",
      "Word-by-word animated karaoke captions using Faster-Whisper",
      "Background music that automatically quiets down (ducks) under speech",
      "Automated two-gate QA: technical checks (1080x1920, 30 FPS, loudness) and creative checks (speaker visibility, pacing)",
      "Comprehensive automated test suite (333 tests passed) ensuring pipeline stability",
      "Modern darkroom edit-suite UI with multitrack timeline and interactive preview",
    ],
    technologies: [
      "Python",
      "OpenCV",
      "Faster-Whisper",
      "FFmpeg",
      "React",
      "Vite",
      "Tailwind CSS",
      "Pytest",
    ],
    githubUrl: "https://github.com/123swastik123/Autoclip",
    badgeText: "Video Automation",
    architectureDiagram: {
      nodes: [
        { label: "Long 16:9 Video", role: "Source horizontal footage", type: "input" },
        { label: "OpenCV Face Tracker", role: "Keeps speaker centered without jitter", type: "process" },
        { label: "Faster-Whisper AI", role: "Word-level timestamped captions", type: "ai" },
        { label: "Vertical 9:16 Short", role: "Karaoke captions + audio ducking", type: "output" },
      ],
      flowDescription:
        "Horizontal Video → Face Tracking + Faster-Whisper Transcription → Dynamic Crop + Audio Ducking → 9:16 Rendered Short",
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    subtitle: "Languages I write code in regularly for projects and academic coursework",
    items: [
      {
        name: "Python",
        context: "Daily language for ML models, OpenCV automation, Faster-Whisper, and FastAPI backends.",
        tag: "Daily Driver",
      },
      {
        name: "TypeScript & JavaScript",
        context: "Used in Next.js and React web apps (CivicPath, HydroMonitor), UI state, and Zod validation.",
        tag: "Web Apps",
      },
      {
        name: "C & C++",
        context: "Core academic foundation at UVCE; data structures, memory layout, and systems programming.",
        tag: "Core Academic",
      },
      {
        name: "SQL",
        context: "Writing queries, table schemas, and relational filters in PostgreSQL and SQLite.",
        tag: "Database",
      },
    ],
  },
  {
    title: "AI, ML & Computer Vision",
    subtitle: "Libraries, models, and tools I have used to build working applications",
    items: [
      {
        name: "Machine Learning (Scikit-learn)",
        context: "Trained classifiers and regressors on 10,500 sensor readings in the HydroMonitor project.",
        tag: "Applied ML",
      },
      {
        name: "Computer Vision (OpenCV)",
        context: "Face detection, motion tracking, and bounding-box reframing in AutoClip.",
        tag: "Vision",
      },
      {
        name: "Speech & Audio (Faster-Whisper)",
        context: "Sub-second word-by-word timestamp extraction and karaoke subtitle generation.",
        tag: "Audio AI",
      },
      {
        name: "LLM APIs & Multi-Provider Fallback",
        context: "Building reliable pipelines with Groq, Gemini, and Claude APIs with Zod schema checks.",
        tag: "LLM Systems",
      },
      {
        name: "Local LLM Experimentation",
        context: "Running and benchmarking quantized models locally (Ollama, GGUF) to test memory and latency.",
        tag: "Hands-on Lab",
      },
    ],
  },
  {
    title: "Web & Backend Frameworks",
    subtitle: "Full-stack tools used to build live prototypes and APIs",
    items: [
      {
        name: "Next.js & React",
        context: "Building responsive frontends with App Router, Tailwind CSS, and server components.",
        tag: "Frontend",
      },
      {
        name: "FastAPI",
        context: "Serving real-time Python endpoints and ML predictions with high speed and lightweight setup.",
        tag: "Backend",
      },
      {
        name: "Tailwind CSS",
        context: "Clean, responsive, mobile-friendly design systems and layouts.",
        tag: "Styling",
      },
    ],
  },
  {
    title: "Databases, Testing & Tools",
    subtitle: "Data persistence, test suites, and developer workflows",
    items: [
      {
        name: "Supabase & PostgreSQL",
        context: "Cloud database with Row-Level Security (RLS) used in CivicPath.",
        tag: "Database",
      },
      {
        name: "SQLite & SQLAlchemy",
        context: "Lightweight local datastores for edge logging and prototype backends.",
        tag: "Database",
      },
      {
        name: "Git & GitHub",
        context: "Branching workflows, version control, and public project management.",
        tag: "Workflow",
      },
      {
        name: "FFmpeg",
        context: "Automated video compositing, audio ducking, loudness normalization, and subtitle burning.",
        tag: "Media Engine",
      },
      {
        name: "Jest & Pytest",
        context: "Writing automated test suites: 37 Jest tests in CivicPath and 37 Pytest tests in AutoClip.",
        tag: "Testing",
      },
    ],
  },
];

export const AI_PHILOSOPHY = {
  quote:
    "I learn by building things. Rather than treating AI like a magic black box, I focus on understanding how models actually work—experimenting with local models, testing prompt resilience, and wrapping probabilistic models in reliable rule checks.",
  pillars: [
    {
      title: "Reliability Over Hype",
      description:
        "In projects like CivicPath, we don't let AI guess legal rules. Plain condition logic handles the eligibility math, and AI explains the result in simple language.",
    },
    {
      title: "Local & Hands-On",
      description:
        "I actively run and test open-weights models locally to understand real-world constraints—quantization loss, memory limits, and inference speeds.",
    },
    {
      title: "Constantly Learning",
      description:
        "As a 2nd-year student at UVCE, I enjoy breaking down new tools, building functional prototypes with friends, and sharing what I learn.",
    },
  ],
};
