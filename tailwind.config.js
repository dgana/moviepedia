/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fugaz: ['"Fugaz One"', "sans-serif"],
        montserat: ["Montserrat", "sans-serif"],
        secular: ["Secular One", "sans-serif"],
      },
      gridTemplateColumns: {
        "fill-300": "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
