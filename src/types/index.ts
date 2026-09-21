export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  image?: string;
  whatItIs: string;
  problemSolved: string;
  whatIBuilt: string;
  whyItsInteresting: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  teamAttribution?: string;
  badgeText?: string;
  architectureDiagram?: {
    nodes: { label: string; role: string; type: "input" | "process" | "ai" | "output" }[];
    flowDescription: string;
  };
}

export interface SkillItem {
  name: string;
  context: string;
  tag?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  items: SkillItem[];
}

export interface EducationInfo {
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  period: string;
  expectedGraduation: string;
  status: string;
  focusAreas: string[];
}
