/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        hide: 'transform, opacity, background-color, color, fill',
        padding: 'padding',
      },
    },
  },
  plugins: [],
};
