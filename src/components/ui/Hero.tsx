'use client';
import ParticlesBackground from '../effects/ParticlesBackground';
import ThreeBackground from '../effects/ThreeBackground';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticlesBackground />
      <ThreeBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-2">
        <div className="max-w-3xl">
          <p className="text-[#A78BFA] font-medium mb-4">Guadalajara, MX — UTC-6</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora mb-6 leading-tight">
            Creo experiencias web <span className="text-[#D946EF]">moradas</span>, <span className="text-[#A78BFA]">rápidas</span> y con <span className="text-[#7C3AED]">carácter</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Frontend/Full-Stack | Vue · Tailwind · Three.js · AWS
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn px-6 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-lg text-white font-medium transition-all relative overflow-hidden">
              Escríbeme
            </a>
            <a href="#projects" className="btn px-6 py-3 bg-transparent border-2 border-[#7C3AED] hover:border-[#A78BFA] rounded-lg text-white font-medium transition-all relative overflow-hidden">
              Explorar proyectos
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: all 0.6s ease;
        }
        
        .btn:hover::before {
          left: 100%;
        }
      `}</style>
    </section>
  );
}