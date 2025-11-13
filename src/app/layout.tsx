import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'Portfolio - Desarrollador Frontend/Full-Stack',
  description: 'Desarrollador Frontend/Full-Stack especializado en Vue, Tailwind, Three.js y AWS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}