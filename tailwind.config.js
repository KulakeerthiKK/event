/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fdf4ff',
          100: '#fae8ff',
          200: '#f3d0fe',
          300: '#e9a8fd',
          400: '#d870f8',
          500: '#c040ef',
          600: '#a21bce',
          700: '#8416aa',
          800: '#6d158b',
          900: '#5a1672',
          950: '#3b0a4d',
        },
        gold: {
          300: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        dark: {
          50:  '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d0d0d0',
          400: '#a8a8a8',
          500: '#737373',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #3b0a4d 0%, #0a0a0a 60%)',
        'card-gradient': 'linear-gradient(135deg, #fdf4ff 0%, #ffffff 100%)',
      },
      boxShadow: {
        'brand':    '0 4px 24px -4px rgba(192,64,239,0.35)',
        'brand-lg': '0 8px 40px -6px rgba(192,64,239,0.45)',
        'gold':     '0 4px 24px -4px rgba(245,158,11,0.35)',
        'card':     '0 2px 20px 0 rgba(0,0,0,0.07)',
        'card-lg':  '0 8px 40px 0 rgba(0,0,0,0.12)',
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'slide-up':   'slideUp 0.6s ease-out forwards',
        'float':      'float 6s ease-in-out infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
};
