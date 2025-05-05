/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        delius: ['"Delius"', 'cursive'],
      },
      colors: {
        'lime-custom': '#e4f68f',
        'teal-custom': '#50c19a',
        'brown-light': '#686354',
        'brown-dark': '#444036',
      }
    },
  },
  plugins: [],
}
