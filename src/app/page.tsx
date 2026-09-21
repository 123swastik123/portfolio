import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import About from "@/components/About";
import Projects from "@/components/Projects";
import AiLab from "@/components/AiLab";
import Interests from "@/components/Interests";
import Journey from "@/components/Journey";
import SkillsMatrix from "@/components/SkillsMatrix";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08080a] text-[#f4f4f5] selection:bg-[#c8f45e] selection:text-[#08080a]">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <About />
      <Projects />
      <AiLab />
      <Interests />
      <Journey />
      <SkillsMatrix />
      <GitHubSection />
      <Contact />
      <Footer />
    </main>
  );
}
