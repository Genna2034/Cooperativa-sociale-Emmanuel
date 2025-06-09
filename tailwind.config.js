/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // NUOVO TEMA AZZURRO CHIARO DELICATO
        blue: {
          50: '#F0F9FF',    // Molto chiaro
          100: '#E0F2FE',   // Chiaro
          200: '#BAE6FD',   // Chiaro medio
          300: '#7DD3FC',   // Medio
          400: '#38BDF8',   // Medio scuro
          500: '#0EA5E9',   // Base
          600: '#0284C7',   // Principale (più delicato)
          700: '#0369A1',   // Scuro
          800: '#075985',   // Molto scuro
          900: '#0C4A6E',   // Scurissimo
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: '1.5',
          },
        },
      },
    },
  },
  plugins: [],
};