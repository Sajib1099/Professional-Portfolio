/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563EB',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e1b4b',
        },
        surface: {
          light: '#ffffff',
          subtle: '#f8fafc',
          border: '#e2e8f0',
        },
        ink: {
          950: '#030712',
          900: '#0b1120',
          800: '#0f172a',
          600: '#334155',
          400: '#94a3b8',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.06) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(96,165,250,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(96,165,250,0.06) 1px, transparent 1px)',
        'signal-gradient': 'linear-gradient(135deg, #2563EB 0%, #1e1b4b 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(15, 23, 42, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'glow-primary': '0 0 40px -8px rgba(37, 99, 235, 0.55)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(14px, -18px)' },
        },
        pulseDash: {
          '0%': { strokeDashoffset: '240' },
          '100%': { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        drift: 'drift 9s ease-in-out infinite',
        'drift-slow': 'drift 14s ease-in-out infinite',
        signal: 'pulseDash 6s linear infinite',
        caret: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
}
