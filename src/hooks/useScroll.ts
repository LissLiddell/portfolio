import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const setupScrollspy = () => {
      const sections = document.querySelectorAll('section[id]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setCurrentSection(entry.target.id);
          }
        });
      }, { threshold: 0.5 });
      
      sections.forEach(section => {
        observer.observe(section);
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    setTimeout(() => {
      setupScrollspy();
    }, 1000);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrolled, currentSection };
};