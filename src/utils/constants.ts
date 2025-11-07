import { ExperienceItem, Project, Skill } from '@/types';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: "2023 - Presente",
    title: "Lead Frontend Developer",
    company: "TechInnovate Solutions",
    description: [
      "Lideré el rediseño completo de la plataforma SaaS, incrementando la retención de usuarios en un 42%.",
      "Implementé una arquitectura de microfrontends que redujo el tiempo de carga inicial en un 65%.",
      "Automaticé el pipeline de CI/CD, reduciendo el tiempo de deploy en un 80% y mejorando la estabilidad."
    ]
  },
  // ... más experiencias
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Analytics Dashboard Platform",
    image: "/images/project1.jpg",
    problem: "Visualización de datos complejos con problemas de rendimiento y UX confusa.",
    solution: "Dashboard con lazy loading, visualizaciones dinámicas y optimización de memoria.",
    result: "Reducción de 65% en tiempo de carga y aumento de 40% en engagement del usuario.",
    technologies: ["Vue 3", "TypeScript", "D3.js", "AWS"],
    demoLink: "#",
    repoLink: "#"
  },
  // ... más proyectos
];

export const SKILLS_DATA: Skill[] = [
  { name: "Vue.js / Nuxt.js", percentage: 95, category: "frontend" },
  { name: "TypeScript", percentage: 90, category: "frontend" },
  { name: "Tailwind CSS", percentage: 98, category: "frontend" },
  { name: "Three.js / WebGL", percentage: 85, category: "frontend" },
  { name: "Node.js / Express", percentage: 88, category: "backend" },
  { name: "AWS (Lambda, S3, SES)", percentage: 80, category: "backend" },
  { name: "Docker / CI/CD", percentage: 82, category: "backend" },
  { name: "GraphQL / REST APIs", percentage: 85, category: "backend" }
];