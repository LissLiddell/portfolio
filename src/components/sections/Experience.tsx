'use client';

export default function Experience() {
  const experiences = [
    {
      period: "2023 - Presente",
      title: "Lead Frontend Developer",
      company: "TechInnovate Solutions",
      description: [
        "Lideré el rediseño completo de la plataforma SaaS, incrementando la retención de usuarios en un 42%.",
        "Implementé una arquitectura de microfrontends que redujo el tiempo de carga inicial en un 65%.",
        "Automaticé el pipeline de CI/CD, reduciendo el tiempo de deploy en un 80% y mejorando la estabilidad."
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