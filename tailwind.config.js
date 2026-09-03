/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c1c1e",
        stone: "#6b6f76",
        haze: "#dcdcdc",
        periwinkle: "#5b6ee8",
      },
      fontFamily: {
        signature: ["Caveat", "cursive"],
        body: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
