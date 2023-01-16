/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ex_light_purple: "#C6C2ED",
        ex_normal_purple: "#8D85DA",
        ex_medium_purple: "#5448C8",
        ex_dark_purple: '#3A1772',
        ex_light_yellow: '#FEC806',
        ex_dark_yellow: "#F9AF36",
        ex_red: '#FF6969',
        ex_gray: '#92848C'

      }
    },
  },
  plugins: [],
}