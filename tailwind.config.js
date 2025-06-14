/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // TEMA AZZURRO CORRETTO - Sovrascrive completamente i colori blue
        blue: {
          50: '#F0F9FF',    // Azzurro molto chiaro
          100: '#E0F2FE',   // Azzurro chiaro  
          200: '#BAE6FD',   // Azzurro chiaro medio
          300: '#7DD3FC',   // Azzurro medio
          400: '#38BDF8',   // Azzurro medio scuro (colore destra logo - bottoni)
          500: '#0EA5E9',   // Azzurro base
          600: '#0284C7',   // Azzurro principale (colore sinistra logo - scritte)
          700: '#0369A1',   // Azzurro scuro
          800: '#075985',   // Azzurro molto scuro
          900: '#0C4A6E',   // Azzurro scurissimo
        },
        // Colori aggiuntivi per varietà
        purple: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7C3AED',
          800: '#6B21A8',
          900: '#581C87',
        },
        // Manteniamo anche i colori originali per compatibilità
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
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