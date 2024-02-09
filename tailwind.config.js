/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#93ad8b',
        secondary: '#afc9e0'
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
}

