import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio - Desarrollador Frontend/Full-Stack',
  description: 'Desarrollador Frontend/Full-Stack especializado en Vue, Tailwind, Three.js y AWS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}