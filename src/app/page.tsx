import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AiLab from "@/components/AiLab";
import SkillsMatrix from "@/components/SkillsMatrix";
import Journey from "@/components/Journey";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08080a] text-[#f4f4f5] selection:bg-[#f4f4f5] selection:text-[#08080a]">
      {/* Ambient background lighting */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-amber-500/[0.03] via-zinc-800/[0.02] to-transparent blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Projects />
      <AiLab />
      <SkillsMatrix />
      <Journey />
      <GitHubSection />
      <Contact />
      <Footer />
    </main>
  );
}
