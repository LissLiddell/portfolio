'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      period: "04/2024 - Presente",
      title: "Full Stack Developer",
      company: "Mavi de Occidentes S.A. de C.V",
      description: [
        "Desarrollé y mantuve aplicaciones web usando Vue3, TypeScript, TailwindCSS, PrimeVue, React, Vite",
        "Construí APIs en Python desplegadas en AWS para integración de sistemas",
        "Gestioné contenedores usando Docker y establecí conexiones a bases de datos SAP HANA Cloud",
        "Implementé nuevas máquinas virtuales y librerías para desarrollo de CRUD e interfaces para varios departamentos",
        "Reduje costos de AWS y HANA Cloud optimizando pipelines y requests",
        "Implementé análisis de proximidad geoespacial para evaluación de créditos"
      ]
    },
    {
      period: "09/2022 - 03/2024",
      title: "Senior Frontend Developer",
      company: "Tech Solutions MX",
      description: [
        "Lideré el desarrollo de aplicaciones web con React y Vue.js",
        "Implementé arquitecturas de microfrontends",
        "Optimicé performance reduciendo tiempos de carga en 40%",
        "Mentoré a desarrolladores junior en best practices"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#110F1A]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-sora mb-12 text-center">
          <span className="text-[#7C3AED]">Mi</span> experiencia
        </h2>
        
        <div className="timeline ml-6 md:ml-0 md:max-w-4xl md:mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="bg-[#1F1A2E] p-8 rounded-xl shadow-lg border border-[#312E81] hover:border-[#7C3AED] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="text-[#A78BFA] font-semibold text-lg mb-2 sm:mb-0">{exp.period}</div>
                  <div className="text-[#D946EF] font-bold text-xl">{exp.company}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 font-sora">{exp.title}</h3>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-[#7C3AED] mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}