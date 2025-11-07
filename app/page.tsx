'use client';

import { useState, useEffect } from 'react';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import Hero from '@/src/components/sections/Hero';
import About from '@/src/components/sections/About';
import Experience from '@/src/components/sections/Experience';
import Skills from '@/src/components/sections/Skills';
import Projects from '@/src/components/sections/Projects';
import Contact from '@/src/components/sections/Contact';

const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <Header currentSection={currentSection} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}