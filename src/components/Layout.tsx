'use client';
import { useEffect, useState, ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import ParticlesBackground from './ParticlesBackground';
import ThreeBackground from './ThreeBackground';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio - Desarrollador Frontend/Full-Stack</title>
        <meta name="description" content="Desarrollador Frontend/Full-Stack especializado en Vue, Tailwind, Three.js y AWS. Creando experiencias web modernas, rápidas y con carácter." />
        <meta property="og:title" content="Portfolio - Desarrollador Frontend/Full-Stack" />
        <meta property="og:description" content="Creando experiencias web moradas, rápidas y con carácter" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cdn.pixabay.com/photo/2023/05/22/11/22/ai-generated-8010765_1280.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-[#0F0B1E] text-white font-inter">
        <Navbar scrolled={scrolled} />
        <main className="relative">
          <ParticlesBackground />
          <ThreeBackground />
          {children}
        </main>
      </div>
    </>
  );
}