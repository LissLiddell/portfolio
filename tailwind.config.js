import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
      },
      animation: {
        'morph-blob': 'morphBlob 15s ease-in-out infinite',
      },
      keyframes: {
        morphBlob: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 40% / 40% 30% 70% 60%' },
          '75%': { borderRadius: '40% 60% 70% 30% / 60% 40% 30% 70%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        }
      }
    },
  },
  plugins: [],
};

export default config;