/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF7F1",
        blush: "#F3E4E1",
        ink: "#171412",
        maroon: {
          DEFAULT: "#6E0F1F",
          deep: "#4A0913",
          bright: "#A21A2E",
        },
        line: "#E7DED4",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};
