
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
}

export default function Header({ currentSection }: HeaderProps) { // ← Asegúrate de que dice export default
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'Acerca de' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Proyectos' },
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <a href="#hero" className="text-2xl font-bold text-white font-sora">
            <span className="text-violet-300">{'{'}</span>
            <span>Dev</span>
            <span className="text-fuchsia-500">Portfolio</span>
            <span className="text-violet-300">{'}'}</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-white hover:text-violet-300 ${
                  currentSection === item.href.slice(1) ? 'active' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn px-5 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg text-white font-medium transition-all"
            >
              Contactar
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-2 bg-opacity-95 blur-bg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white hover:text-violet-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-4 bg-violet-600 hover:bg-violet-700 rounded-lg text-white font-medium text-center"
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}