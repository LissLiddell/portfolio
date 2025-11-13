'use client';

import { useState, useEffect } from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Hero from '../components/ui/Hero';
import About from '../components/ui/About';
import Experience from '../components/ui/Experience';
import Skills from '../components/ui/Skills';
import Projects from '../components/ui/Projects';
import Contact from '../components/ui/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0B1E] text-white">
      <Header />
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