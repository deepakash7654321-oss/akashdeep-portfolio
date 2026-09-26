export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: 'RAG / AI' | 'Full Stack & AI' | 'LLM Ops' | 'Enterprise AI';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyNote?: string;
  period: string;
  location: string;
  bullets: string[];
  skills: string[];
}

export interface SkillItem {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
  allTags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  location?: string;
}

export interface Achievement {
  title: string;
  description: string;
  badge: string;
}
