'use client';

const experiences = [
  {
    id: 1,
    company: "Tech Startup",
    position: "Senior Frontend Developer",
    period: "2022 - Presente",
    description: "Lideré el desarrollo de aplicaciones web modernas utilizando Vue.js y React. Implementé arquitecturas escalables y mejoré el performance en un 40%.",
    technologies: ["Vue.js", "TypeScript", "Tailwind", "AWS", "Three.js"]
  },
  {
    id: 2,
    company: "Agencia Digital",
    position: "Full-Stack Developer",
    period: "2021 - 2022",
    description: "Desarrollé soluciones web completas para diversos clientes, desde landing pages hasta aplicaciones empresariales complejas.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"]
  },
  {
    id: 3,
    company: "Freelance",
    position: "Web Developer",
    period: "2020 - 2021",
    description: "Trabajé con startups y pequeñas empresas creando sus primeras versiones web y estableciendo sus presencia digital.",
    technologies: ["JavaScript", "CSS3", "HTML5", "WordPress", "PHP"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-sora mb-12 text-center">
          Mi <span className="text-[#D946EF]">Experiencia</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="timeline-item">
                <div className="bg-[#1F1A2E] p-6 rounded-lg border border-[#7C3AED]/20 hover:border-[#A78BFA]/40 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <h3 className="text-xl font-sora font-semibold text-white">{exp.position}</h3>
                    <span className="text-[#D946EF] font-medium bg-[#D946EF]/10 px-3 py-1 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-[#A78BFA] font-medium mb-4">{exp.company}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-[#7C3AED]/20 text-[#A78BFA] rounded-full text-sm border border-[#7C3AED]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-[#A78BFA] bg-[#7C3AED]/10 px-6 py-3 rounded-lg border border-[#7C3AED]/30">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-medium">¿Interesado en trabajar juntos?</span>
            <a href="#contact" className="text-[#D946EF] hover:text-[#A78BFA] transition-colors font-semibold">
              Hablemos →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}