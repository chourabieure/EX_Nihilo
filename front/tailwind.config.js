/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main_blue: '#5448C8',
        main_yellow: '#F8AE35',
        background: '#D7D7D7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
