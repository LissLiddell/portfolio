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

export interface NavItem {
  href: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}