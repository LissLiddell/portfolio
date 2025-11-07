'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-1 py-12 border-t border-indigo-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <a href="#hero" className="text-2xl font-bold text-white font-sora inline-block mb-4">
            <span className="text-violet-300">{'{'}</span>
            <span>Dev</span>
            <span className="text-fuchsia-500">Portfolio</span>
            <span className="text-violet-300">{'}'}</span>
          </a>
          <p className="text-gray-400">
            © {currentYear} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}