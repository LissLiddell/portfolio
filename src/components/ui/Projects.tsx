'use client';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma de e-commerce moderna con carrito de compras, pasarela de pagos y panel administrativo.",
    technologies: ["Vue 3", "TypeScript", "Node.js", "MongoDB", "AWS"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Dashboard interactivo para visualización de datos con gráficos en tiempo real y reportes automáticos.",
    technologies: ["React", "D3.js", "Express", "PostgreSQL", "Docker"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Portfolio 3D",
    description: "Portfolio interactivo con experiencias 3D, animaciones WebGL y efectos de partículas.",
    technologies: ["Three.js", "React", "Framer Motion", "Tailwind", "Vite"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "App de Tareas",
    description: "Aplicación de productividad con sincronización en tiempo real y múltiples vistas.",
    technologies: ["Next.js", "Socket.io", "Prisma", "Redis", "Vercel"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "API REST",
    description: "API escalable con autenticación JWT, documentación Swagger y sistema de caché.",
    technologies: ["Node.js", "Express", "JWT", "Redis", "Swagger"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Landing Page",
    description: "Landing page optimizada para conversión con animaciones CSS y SEO avanzado.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Netlify"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4 text-center">
          Mis <span className="text-[#D946EF]">Proyectos</span>
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Una selección de proyectos donde he aplicado mis habilidades en desarrollo web moderno
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card group rounded-xl overflow-hidden bg-[#1F1A2E] border border-[#7C3AED]/20"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-[#7C3AED] to-[#D946EF] opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-sora font-semibold text-white mb-3 group-hover:text-[#A78BFA] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-[#7C3AED]/20 text-[#A78BFA] rounded text-xs border border-[#7C3AED]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 text-center px-4 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Ver Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 text-center px-4 py-2 bg-transparent border border-[#7C3AED] hover:border-[#A78BFA] text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#D946EF] hover:from-[#6D28D9] hover:to-[#C026D3] text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <span>¿Tienes un proyecto en mente?</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}