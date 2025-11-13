'use client';
import { useParticles } from '../../hooks/useParticles';

export default function ParticlesBackground() {
  useParticles();
  
  return <div id="particles-js" className="absolute w-full h-full top-0 left-0 z-1 pointer-events-none" />;
}