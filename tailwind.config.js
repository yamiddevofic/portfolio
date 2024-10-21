/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Agrega esta línea
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#1E3A8A',
        'yellow-mustard': '#F6C453',
        'emerald-green': '#2C7A7B',
        'light-gray': '#D1D5DB',
        'lime-green': '#A3E635',
      },
    },
  },
  plugins: [],
}
