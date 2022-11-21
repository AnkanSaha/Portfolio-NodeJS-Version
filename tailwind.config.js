/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./static/**/*.html', './static/**/*.js, ./static/**/*.jsx, ./static/**/*.ts, ./static/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}