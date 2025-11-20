'use client';

const experiences = [
  {
    id: 1,
    company: "Mavi de Occcidente S.A de C.V",
    position: "Full Stack Developer",
    period: "04/07/2024 - Presente",
    description: [
      "Developed and maintained web applications using Vue3, TypeScript, TailwindCSS, PrimeVue, React, Vite",
      "Built and consumed Python APIs deployed on AWS for system integration",
      "Managed containers using Docker and established connections to SAP HANA Cloud databases",
      "Implemented security modules, configured roles and profiles, and developed CRUD operations for various departments (Credit, Collections, RH)",
      "Reduced AWS and HANA Cloud costs by optimizing repositories, merging requests, and generalizing queries to minimize resource consumption",
      "Developed C# projects for integration with bank terminals and payment ticket generation",
      "Implemented geospatial proximity analysis for credit evaluation."
    ],
    technologies: ["Vue.js", "PrimeVue", "Tailwind", "AWS", "PrimeFlex", "BAPI/CPI SAP", "Python", "JS"]
  },
  {
    id: 2,
    company: "Mavi de Occcidente S.A de C.V",
    position: "Software Analyst / Key User",
    period: "14/02/2022 - 03/07/2024",
    description: [
      "Served as the primary liaison between development teams and the specialized Collections department.",
      "Designed and authored technical and functional documentation for new tools and features.",
      "Led and orchestrated refinement and analysis meetings to define requirements and plan sprints using Agile (Scrum) methodologies.",
      "Validated tool functionality in production environments and addressed incidents.",
      "Successfully designed and validated the Legal HR Management module and the Collections tool.",
    ],
    technologies: [""]
  },
  {
    id: 3,
    company: "Just Creative S.A de C.V",
    position: "Web Developer",
    period: "05/05/2017 - 16/01/2018",
    description: [
      "Programmed and managed websites and online radios using PHP 5, JavaScript, AJAX, and MySQL.",
      "Administered databases via phpMyAdmin.",
      "Developed user interfaces with HTML5, Bootstrap and CSS.",
      "Maintained and updated client portfolio websites, implementing new features and functionality.",
      "Developed and programmed digital radio streaming platforms with custom features."
    ],
    technologies: ["JavaScript", "CSS3", "HTML5", "Ajax", "PHP", "JQuery"], 
  },
   {
    id: 4,
    company: "Mavi de Occcidente S.A de C.V",
    position: "Intelisis Developer",
    period: "15/07/2016 - 31/01/2017",
    description: [
      "Developed custom reports, views, and forms for the Intelisis ERP.",
      "Programmed SQL Stored Procedures and MySQL queries to connect and extend ERP functionality.",
      "Conducted comprehensive flow testing to ensure seamless integrations without impacting production environments.",
      "Created external plugins to enhance ERP connectivity and expand system capabilities."
    ],
    technologies: ["MySQL", "Stored Procedures", "Intelisis ERP"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-sora mb-12 text-center">
          My <span className="text-[#D946EF]">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="bg-[#1F1A2E] p-6 rounded-lg border border-[#7C3AED]/20 hover:border-[#A78BFA]/40 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <h3 className="text-xl font-sora font-semibold text-white mb-4">{exp.position}</h3>
                    <span className="text-[#D946EF] font-medium bg-[#D946EF]/10 px-3 py-1 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-[#A78BFA] font-medium mb-6">{exp.company}</h4>
                  <ul className="space-y-3 mb-4">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-[#D946EF] mt-1">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-8">
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
            <span className="font-medium">Ready to build something together?</span>
            <a href="#contact" className="text-[#D946EF] hover:text-[#A78BFA] transition-colors font-semibold">
              Let's talk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}