'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative bg-[#0F0B1E]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-sora mb-12 text-center">
          <span className="text-[#A78BFA]">Sobre</span> mí
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Section */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 blob glow bg-[#7C3AED] opacity-20 transform scale-110"></div>
              <div className="absolute inset-4 blob overflow-hidden rounded-2xl">
                <img
                  src="https://cdn.pixabay.com/photo/2023/10/14/09/20/ai-generated-8313220_1280.jpg"
                  alt="Avatar del desarrollador"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Bio Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold font-sora mb-4 text-[#A78BFA]">Desarrollador Full Stack</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Profesional con experiencia integral en el ciclo de vida del desarrollo de software—desde el análisis de requisitos y diseño hasta la implementación y optimización. 
                Fuerte background técnico en entornos cloud (AWS), lenguajes como Python, JavaScript/TypeScript, y frameworks modernos como Vue3 y React.
              </p>
            </motion.div>
            
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <div className="text-center p-6 bg-[#1F1A2E] rounded-xl shadow-lg border border-[#312E81] hover:border-[#7C3AED] transition-all duration-300">
                <div className="text-4xl font-bold text-[#D946EF] mb-2">5</div>
                <p className="text-gray-400 font-medium">Años de experiencia</p>
              </div>
              
              <div className="text-center p-6 bg-[#1F1A2E] rounded-xl shadow-lg border border-[#312E81] hover:border-[#7C3AED] transition-all duration-300">
                <div className="text-4xl font-bold text-[#7C3AED] mb-2">35</div>
                <p className="text-gray-400 font-medium">Proyectos completados</p>
              </div>
              
              <div className="text-center p-6 bg-[#1F1A2E] rounded-xl shadow-lg border border-[#312E81] hover:border-[#7C3AED] transition-all duration-300">
                <div className="text-4xl font-bold text-[#A78BFA] mb-2">12</div>
                <p className="text-gray-400 font-medium">Tech stacks dominados</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}