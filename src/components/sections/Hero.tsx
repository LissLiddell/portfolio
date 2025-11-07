'use client';

import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements will be added here */}
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 hero-content">
        <div className="max-w-3xl">
          <p className="text-violet-300 font-medium mb-4">Guadalajara, MX — UTC-6</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora mb-6 leading-tight">
            Creo experiencias web <span className="text-fuchsia-500">moradas</span>,{' '}
            <span className="text-violet-300">rápidas</span> y con{' '}
            <span className="text-violet-600">carácter</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Frontend/Full-Stack | Vue · Tailwind · Three.js · AWS
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg text-white font-medium transition-all"
            >
              Escríbeme
            </a>
            <a
              href="#projects"
              className="btn px-6 py-3 bg-transparent border-2 border-violet-600 hover:border-violet-300 rounded-lg text-white font-medium transition-all"
            >
              Explorar proyectos
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white opacity-70" />
      </div>
    </section>
  );
}