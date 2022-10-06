/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    fontFamily: {
      serif: [ 'Roboto Slab', 'serif' ],
    },
    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 21%, rgba(28,27,30,1) 100%)'
      },
      colors: {
        'gray-light': '#3E3B47',
      },
      boxShadow: {
        'replace-autofill': '0 0 0 30px #262529 inset',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: [ 'rounded' ]
  }
}
