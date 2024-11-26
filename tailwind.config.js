/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yap: {
          primary: '#e8b527',
          dark: '#1a1a1a',
          gray: '#2d2d2d',
          light: '#3d3d3d',
        },
      },
    },
  },
  plugins: [],
};