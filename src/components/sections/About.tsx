'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Counter from '@/src/components/ui/Counter';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-sora mb-12 text-center">
          <span className="text-violet-300">Sobre</span> mí
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Avatar with Blob Mask */}
          <div className="flex justify-center">
            <div className="relative w-60 h-60">
              <div className="absolute inset-0 blob glow bg-violet-600 opacity-30 transform scale-105"></div>
              <div className="absolute inset-0 blob overflow-hidden rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2023/10/14/09/20/ai-generated-8313220_1280.jpg"
                  alt="Avatar del desarrollador"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Bio Text */}
          <div className="md:col-span-2">
            <p className="text-lg text-gray-300 mb-8">
              Desarrollador apasionado por crear experiencias web modernas y eficientes. Me especializo en el ecosistema Vue y las últimas tecnologías Frontend, siempre buscando el balance perfecto entre diseño atractivo y funcionalidad impecable. Mi objetivo es construir aplicaciones que no solo se vean bien, sino que también ofrezcan excelente rendimiento y accesibilidad.
            </p>
            
            {/* KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="p-6 bg-dark-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <Counter value={5} className="text-4xl font-bold text-fuchsia-500" />
                <p className="text-gray-400 mt-2">Años de experiencia</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 bg-dark-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <Counter value={35} className="text-4xl font-bold text-violet-600" />
                <p className="text-gray-400 mt-2">Proyectos completados</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 bg-dark-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <Counter value={12} className="text-4xl font-bold text-violet-300" />
                <p className="text-gray-400 mt-2">Tech stacks dominados</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}