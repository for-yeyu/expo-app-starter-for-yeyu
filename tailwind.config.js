/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f6fbf3',
          100: '#edf7e7',
          200: '#d9edcd',
          300: '#c4e0b2',
          400: '#a2cb8b',
          500: '#7dae64',
          600: '#5f8e49',
          700: '#496f38',
          800: '#38562d',
          900: '#2f4728',
        },
      },
    },
  },
  plugins: [],
};
