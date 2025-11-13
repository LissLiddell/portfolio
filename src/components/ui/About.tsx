'use client';
import { useAnimations } from '../../hooks/useAnimations';
import { useEffect } from 'react';

export default function About() {
  const { animateCounters } = useAnimations();

  useEffect(() => {
    setTimeout(() => {
      animateCounters();
    }, 1000);
  }, [animateCounters]);

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-6">
              Acerca de <span className="text-[#D946EF]">Mí</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Soy un <span className="text-[#A78BFA] font-medium">Desarrollador Full-Stack</span> apasionado por crear 
              experiencias digitales excepcionales.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#D946EF] mb-2 counter" data-target="50">0</div>
                <div className="text-sm text-gray-400">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#D946EF] mb-2 counter" data-target="3">0</div>
                <div className="text-sm text-gray-400">Años Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#D946EF] mb-2 counter" data-target="25">0</div>
                <div className="text-sm text-gray-400">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#D946EF] mb-2 counter" data-target="15">0</div>
                <div className="text-sm text-gray-400">Tecnologías</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-14 h-14 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#D946EF] rounded-full blob opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-[#1F1A2E] to-[#0F0B1E] rounded-full flex items-center justify-center">
                <div className="text-center">
                  {/* Icono más pequeño */}
                  <div className="w-16 h-16 bg-gradient-to-r from-[#7C3AED] to-[#D946EF] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-sora font-semibold text-white">Full-Stack Developer</h3>
                  <p className="text-[#A78BFA] text-xs mt-2">Vue · React · Node · AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[#1F1A2E] rounded-lg border border-[#7C3AED]/20">
            <div className="w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-sora font-semibold mb-3">Frontend</h3>
            <p className="text-gray-300 text-sm">
              Interfaces modernas con Vue, React, TypeScript y Tailwind CSS
            </p>
          </div>
          
          <div className="text-center p-6 bg-[#1F1A2E] rounded-lg border border-[#7C3AED]/20">
            <div className="w-10 h-10 bg-[#D946EF] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-sora font-semibold mb-3">Backend</h3>
            <p className="text-gray-300 text-sm">
              APIs robustas con Node.js, bases de datos y cloud
            </p>
          </div>
          
          <div className="text-center p-6 bg-[#1F1A2E] rounded-lg border border-[#7C3AED]/20">
            <div className="w-10 h-10 bg-[#A78BFA] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-sora font-semibold mb-3">Performance</h3>
            <p className="text-gray-300 text-sm">
              Optimización, SEO y mejores prácticas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}