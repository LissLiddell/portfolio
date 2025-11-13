// src/hooks/useAnimations.ts
export const useAnimations = () => {
  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 2000;
      const step = target / (duration / 30);
      
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (counter) {
          counter.textContent = Math.floor(current).toString();
        }
        
        if (current >= target) {
          if (counter) {
            counter.textContent = target.toString();
          }
          clearInterval(timer);
        }
      }, 30);
    });
  };

  const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.transform = 'scaleX(1)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    skillBars.forEach(bar => {
      observer.observe(bar);
    });
  };

  return { animateCounters, animateSkillBars };
};