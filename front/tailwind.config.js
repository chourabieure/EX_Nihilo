/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ], // remove unused styles in production
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                ex_light_purple: "#C6C2ED",
                ex_normal_purple: "#8D85DA",
                ex_medium_purple: "#5448C8",
                ex_dark_purple: "#3A1772",
                ex_light_yellow: "#FEC806",
                ex_dark_yellow: "#F9AF36",
                ex_red: "#FF6969",
                ex_gray: "#92848C",
            },
            fontFamily: {
                Miju: ["var(--font-miju)"],
                Poppins: ["var(--font-poppins)", ...fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};
