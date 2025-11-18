'use client';

const projects = [
  {
    id: 1,
    title: "Trading Analysis Tool",
    description: "Developed an automated financial analysis tool using Python for market data processing and trend identification,Implemented data visualization for trading decisions and portfolio performance tracking.",
    technologies: ["Python", "Automated Scheduling"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#"
  },
    {
    id: 2,
    title: "Point of Sale (POS) System",
    description:
      "Full POS solution including cash drawer management, product catalog, user permissions, and real-time transaction tracking. Features a responsive dashboard, automated reports, authentication with JWT, and modular architecture.",
    technologies: ["React", "TailwindCSS", "Next.js", "Node.js"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Hotmart Affiliate Catalog Website",
    description:
      "Responsive website designed to showcase and highlight Hotmart affiliate products. Includes dynamic product cards, category filtering, SEO-optimized pages, and direct CTA redirections to Hotmart for conversion. Built to work as a clean, fast product showcase for affiliate marketing.",
    technologies: ["React", "Framer Motion", "Tailwind", "Vite"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Security Module & Authentication System",
    description:
      "Reusable security module featuring user authentication, role-based access control (RBAC), permission management, and protected routes. Includes login, session validation, access restrictions to tools/modules, and scalable architecture designed to integrate easily into any SaaS or enterprise application.",
    technologies: ["Next.js", "Node.js", "Prisma", "JWT", "Redis"],
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
                    Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 text-center px-4 py-2 bg-transparent border border-[#7C3AED] hover:border-[#A78BFA] text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Code
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
            <span>Have a project in mind? Let’s build it.</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}