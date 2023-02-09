/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    screens: {
      xs: "280px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      header: ["DocumanHeavy", "sans-serif"],
      body: ["Open sans", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      primary: "#451499",
      secondary: "#c8b2ff",
      black: "#2d2d2d",
      grey: "#d9dbda",
      white: "#ffffff",
      accent: "#f7528b",
    },
    extend: {},
  },
  plugins: [],
}
