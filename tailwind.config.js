/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        beige:'#B4A5A5',
        blue:'#3C415C',
        purple:'#301B3F'
      }
    },
  },
  plugins: [],
}
