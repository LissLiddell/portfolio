'use client';

export default function Skills() {
  const skills = [
    { name: "Vue.js / Nuxt.js", percentage: 95 },
    { name: "TypeScript", percentage: 90 },
    { name: "Tailwind CSS", percentage: 98 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-sora mb-12 text-center">
          <span className="text-fuchsia-500">Mis</span> habilidades
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-5">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}