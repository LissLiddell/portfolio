import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'sora': ['var(--font-sora)', 'sans-serif'],
      },
      colors: {
        'violet': {
          300: '#A78BFA',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        'fuchsia': {
          500: '#D946EF',
        },
        'indigo': {
          600: '#4338CA',
          900: '#312E81',
        },
        'cyan': {
          400: '#22D3EE',
        },
        'bg-dark': {
          1: '#0F0B1E',
          2: '#110F1A',
          3: '#1F1A2E',
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};

export default config;