'use client';
import { useState } from 'react';
import { useScroll } from '../../hooks/useScroll';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { href: '#about', label: 'Acerca de' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Proyectos' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrolled, currentSection } = useScroll();

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-opacity-70 bg-[#0F0B1E] blur-bg shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          {/* Logo - Colores forzados */}
          <a 
            href="#hero" 
            className="text-2xl font-bold font-sora"
            style={{ color: 'white' }}
          >
            <span style={{ color: '#A78BFA' }}>{'{'}</span>
            <span style={{ color: 'white' }}>Dev</span>
            <span style={{ color: '#D946EF' }}>Portfolio</span>
            <span style={{ color: '#A78BFA' }}>{'}'}</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${currentSection === item.href.slice(1) ? 'active' : ''}`}
                style={{
                  color: currentSection === item.href.slice(1) ? '#A78BFA' : 'white'
                }}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn"
              style={{
                backgroundColor: '#7C3AED',
                color: 'white',
                padding: '0.5rem 1.25rem',
                borderRadius: '0.5rem',
                fontWeight: '500'
              }}
            >
              Contactar
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            style={{ color: 'white' }}
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
        <div 
          className="md:hidden absolute w-full"
          style={{
            backgroundColor: 'rgba(17, 15, 26, 0.95)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        >
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.5rem 0',
                  color: 'white',
                  textAlign: 'center'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#A78BFA'}
                onMouseOut={(e) => e.currentTarget.style.color = 'white'}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.5rem 1rem',
                backgroundColor: '#7C3AED',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '500',
                textAlign: 'center',
                margin: '0 1rem'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6D28D9'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#7C3AED'}
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}