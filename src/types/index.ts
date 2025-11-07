export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

export interface FormStatus {
  type: 'success' | 'error';
  message: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string[];
}

export interface Project {
  title: string;
  image: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  demoLink?: string;
  repoLink?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend';
}