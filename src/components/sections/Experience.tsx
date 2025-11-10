'use client';

export default function Experience() {
  const experiences = [
    {
      period: "04/07/2024 - Presente",
      title: "Full Stack Developer",
      company: "Mavi de Occcidente S.A de C.V",
      description: [
        "Developed and maintained web applications using Vue3, TypeScript, TailwindCSS, PrimeVue, React, Vite",
        "Built and consumed Python APIs deployed on AWS for system integration",
        "Managed containers using Docker and established connections to SAP HANA Cloud databases",
        "Implemented security modules, configured roles and profiles, and developed CRUD operations for various departments (Credit, Collections, RH)",
        "Reduced AWS and HANA Cloud costs by optimizing repositories, merging requests, and generalizing queries to minimize resource consumption in a 33%",
        "Developed C# projects for integration with bank terminals and payment ticket generation",
        "Implemented geospatial proximity analysis for credit evaluation."
      ]
    },
    {
      period: "14/02/2022 - 03/07/2024",
      title: "Software Analyst / Key User",
      company: "Mavi de Occcidente S.A de C.V",
      description: [
        "Served as the primary liaison between development teams and the specialized Collections department.",
        "Designed and authored technical and functional documentation for new tools and features.",
        "Led and orchestrated refinement and analysis meetings to define requirements and plan sprints using Agile (Scrum) methodologies.",
        "Validated tool functionality in production environments and addressed incidents.",
        "Successfully designed and validated the Legal HR Management module and the Collections tool.",
      ]
    },
    {
      period: "05/05/2017 - 16/01/2018",
      title: "Web Developer",
      company: "Just Creative S.A de C.V",
      description: [
        "Programmed and managed websites and online radios using PHP 5, JavaScript, AJAX, and MySQL.",
        "Administered databases via phpMyAdmin.",
        "Developed user interfaces with HTML5, Bootstrap and CSS.",
        "Maintained and updated client portfolio websites, implementing new features and functionality.",
        "Developed and programmed digital radio streaming platforms with custom features."
      ]
    },
    {
      period: "15/07/2016 - 31/01/2017",
      title: "Intelisis Developer",
      company: "Mavi de Occcidente S.A de C.V",
      description: [
        "Developed custom reports, views, and forms for the Intelisis ERP.",
        "Programmed SQL Stored Procedures and MySQL queries to connect and extend ERP functionality.",
        "Conducted comprehensive flow testing to ensure seamless integrations without impacting production environments.",
        "Created external plugins to enhance ERP connectivity and expand system capabilities."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-sora mb-12 text-center">
          <span className="text-violet-600">Mi</span> experiencia
        </h2>
        
        <div className="timeline ml-6 md:ml-0 md:max-w-3xl md:mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="bg-dark-3 p-6 rounded-lg shadow-lg">
                <div className="text-violet-300 font-medium mb-1">{exp.period}</div>
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-fuchsia-500 font-medium mb-4">{exp.company}</p>
                <ul className="space-y-2 text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}