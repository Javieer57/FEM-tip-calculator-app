const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": {
          200: "#f3f8fb",
          300: "#9EBBBD",
          600: "#7F9C9F",
          700: "#5E7A7D",
          900: "#00494D",
        },
        cyan: {
          200: "#9fe8df",
          400: "#26C2AD",
        },
        orange: "#C57D71",
      },
      fontFamily: {
        sans: ['"Space Mono"', "monospace", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
