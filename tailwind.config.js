/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./static/**/*.html', './static/**/*.{js,jsx,ts,tsx,vue,pug}'],
  theme: {
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
}
