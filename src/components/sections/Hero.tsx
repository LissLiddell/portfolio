'use client';

import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-hero">
      {/* Overlay para mejor contraste */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Efecto de gradiente adicional */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0B1E] via-transparent to-[#1F1A2E]"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-[#A78BFA] font-medium mb-4 text-lg">Guadalajara, MX — UTC-6</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora mb-6 leading-tight">
            Creo experiencias web <span className="text-[#D946EF]">moradas</span>,{' '}
            <span className="text-[#A78BFA]">rápidas</span> y con{' '}
            <span className="text-[#7C3AED]">carácter</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            Frontend/Full-Stack | Vue · Tailwind · Three.js · AWS
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-lg text-white font-medium transition-all text-lg"
            >
              Escríbeme
            </a>
            <a
              href="#projects"
              className="btn px-8 py-4 bg-transparent border-2 border-[#7C3AED] hover:border-[#A78BFA] rounded-lg text-white font-medium transition-all text-lg"
            >
              Explorar proyectos
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="h-8 w-8 text-white opacity-70" />
      </div>
    </section>
  );
}