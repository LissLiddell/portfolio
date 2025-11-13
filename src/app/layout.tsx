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
  description: 'Desarrollador Frontend/Full-Stack especializado en Vue, Tailwind, Three.js y AWS. Creando experiencias web modernas, rápidas y con carácter.',
  openGraph: {
    title: 'Portfolio - Desarrollador Frontend/Full-Stack',
    description: 'Creando experiencias web moradas, rápidas y con carácter',
    type: 'website',
    images: ['https://cdn.pixabay.com/photo/2023/05/22/11/22/ai-generated-8010765_1280.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}