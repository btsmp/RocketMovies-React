/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      serif: [ 'Roboto Slab', 'serif' ],
    },
    extend: {
      colors: {
        'gray-light': '#3E3B47',
      },
    },
  },
  plugins: [],
}
