'use client';
import { useEffect, useRef } from 'react';
import { loadSlim } from 'tsparticles-slim';
import { Engine } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const particlesInitialized = useRef<boolean>(false);

  useEffect(() => {
    if (particlesInitialized.current) return;
    
    // Skip if prefers-reduced-motion is enabled
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const initParticles = async (): Promise<void> => {
      const { tsParticles } = await import('tsparticles-engine');
      await loadSlim(tsParticles);
      
      await tsParticles.load({
        id: "particles-js",
        options: {
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#7C3AED", "#A78BFA", "#D946EF"]
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.5,
              random: true
            },
            size: {
              value: 3,
              random: true
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: false
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 150,
                line_linked: {
                  opacity: 0.5
                }
              }
            }
          },
          retina_detect: true
        }
      });
    };

    initParticles();
    particlesInitialized.current = true;
  }, []);

  return <div id="particles-js" className="absolute w-full h-full top-0 left-0 z-1 pointer-events-none" />;
}