/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d9e1f0',
          200: '#b3c3e0',
          300: '#8da5d1',
          400: '#6787c1',
          500: '#4169b2',
          600: '#34548e',
          700: '#273f6b',
          800: '#1b2a47',
          900: '#0e1524',
          950: '#070a12',
        },
        gold: {
          50: '#fef9f0',
          100: '#fdf0d5',
          200: '#fbe1ab',
          300: '#f9d281',
          400: '#f7c357',
          500: '#f5b42d',
          600: '#c48f24',
          700: '#936a1b',
          800: '#624612',
          900: '#312309',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
