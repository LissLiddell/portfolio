'use client';

export default function Projects() {
  const projects = [
    {
      title: "Trading Analysis Tool",
      image: "https://cdn.pixabay.com/photo/2023/05/21/07/47/ai-generated-8007426_1280.jpg",
      solution: "Developed an automated financial analysis tool using Python for market data processing and trend identification,Implemented data visualization for trading decisions and portfolio performance tracking.",
      technologies: ["Python", "Automated Scheduling", "Automated Scheduling"]
    },
    {
      title: "Point of Sale (POS) System",
      image: "https://cdn.pixabay.com/photo/2023/05/21/07/47/ai-generated-8007426_1280.jpg",
      solution: "Developed an automated financial analysis tool using Python for market data processing and trend identification,Implemented data visualization for trading decisions and portfolio performance tracking.",
      technologies: ["React", "Node.js", "Tailwindcss", "next js"]
    },
    {
      title: "Hotmart Affiliate Management Platform",
      image: "https://cdn.pixabay.com/photo/2023/05/21/07/47/ai-generated-8007426_1280.jpg",
      solution: "Developed an automated financial analysis tool using Python for market data processing and trend identification,Implemented data visualization for trading decisions and portfolio performance tracking.",
      technologies: ["Hotmart"]
    },
    {
      title: "Security Module & Authentication System",
      image: "https://cdn.pixabay.com/photo/2023/05/21/07/47/ai-generated-8007426_1280.jpg",
      solution: "Developed an automated financial analysis tool using Python for market data processing and trend identification,Implemented data visualization for trading decisions and portfolio performance tracking.",
      technologies: ["Hotmart"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-sora mb-12 text-center">
          <span className="text-violet-300">Proyectos</span> destacados
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card rounded-xl overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover object-center" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold font-sora mb-2">{project.title}</h3>
                <div className="mb-4">
                  <p className="text-sm text-violet-300 font-medium mb-1">Problema:</p>
                  <p className="text-sm text-gray-300">{project.solution}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-indigo-900 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}