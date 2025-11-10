'use client';

export default function Skills() {
  const skills = [
    { name: "Vue.js / Next.js", percentage: 80 },
    { name: "React", percentage: 80 },
    { name: "PrimeVue", percentage: 80 },
    { name: "Entity Framework", percentage: 80 },
    { name: "LuigiClient", percentage: 80 },
    { name: "Python", percentage: 80 },
    { name: "TypeScript", percentage: 80 },
    { name: "JavaScript", percentage: 80 },
    { name: "C#", percentage: 50 },
    { name: "PHP", percentage: 50 },
    { name: "HTML5", percentage: 50 },
    { name: "Tailwind CSS", percentage: 80 },
    { name: "PrimeFlex", percentage: 80 },
    { name: "AWS (APIs, Luigi),", percentage: 80 },
    { name: "Docker", percentage: 80 },
    { name: "MySQL", percentage: 80 },
    { name: "SAP HANA Cloud", percentage: 30 },
    { name: "Intelisis", percentage: 80 },
    { name: "SAP BAPI/CPI", percentage: 80 },
    { name: "JWT Authentication", percentage: 80 },
    { name: "Scrum", percentage: 80 },
    { name: "Requirements Analysis", percentage: 80 },
    { name: "Technical/Functional Documentation", percentage: 80 },
    { name: "Collections", percentage: 90 },
    { name: "Credit", percentage: 50 },
    { name: "HR", percentage: 50 },
    { name: "Sales", percentage: 70 },
    { name: "Legal HR Management", percentage: 60 },
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