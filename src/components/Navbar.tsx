'use client';
import { useState } from 'react';
import { NavItem } from '@/types';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>('hero');

  const navItems: NavItem[] = [
    { href: '#about', label: 'Acerca de' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Proyectos' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-opacity-70 bg-[#0F0B1E] backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <a href="#hero" className="text-2xl font-bold text-white font-sora">
            <span className="text-[#A78BFA]">{'{'}</span>
            <span>Dev</span>
            <span className="text-[#D946EF]">Portfolio</span>
            <span className="text-[#A78BFA]">{'}'}</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item: NavItem) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-white hover:text-[#A78BFA] transition-all duration-300 relative ${
                  currentSection === item.href.slice(1) ? 'active' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn px-5 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-lg text-white font-medium transition-all relative overflow-hidden"
            >
              Contactar
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {!mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#110F1A] bg-opacity-95 backdrop-blur-md absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navItems.map((item: NavItem) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white hover:text-[#A78BFA] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-4 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-lg text-white font-medium text-center transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #A78BFA;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
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
    </header>
  );
}