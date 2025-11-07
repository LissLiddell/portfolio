'use client';

import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[]) => {
  const [currentSection, setCurrentSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setCurrentSection(id);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return currentSection;
};