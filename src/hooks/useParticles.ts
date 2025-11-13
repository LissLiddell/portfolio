import { useEffect } from 'react';
import { loadSlim } from 'tsparticles-slim';

export const useParticles = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const initParticles = async () => {
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
              value: ["#7C3AED", "#A78BFA", "#D946EF", "#46ef9aff"]
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
  }, []);
};