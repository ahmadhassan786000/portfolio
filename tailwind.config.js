/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          50: '#F5F0FE',
          100: '#EBE1FD',
          200: '#D3BAFA',
          300: '#BB93F7',
          400: '#A36CF4',
          500: '#7C3AED',
          600: '#6420D4',
          700: '#4E19A6',
          800: '#381278',
          900: '#220B4A',
        },
        secondary: '#A855F7',
        accentCyan: '#22D3EE',
        surface: {
          light: '#FFFFFF',
          dark: '#0F172A',
        },
        ink: {
          950: '#0B1120',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #7C3AED 0%, #A855F7 55%, #22D3EE 100%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(124, 58, 237, 0.45)',
        card: '0 10px 30px -12px rgba(15, 23, 42, 0.25)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 12s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
