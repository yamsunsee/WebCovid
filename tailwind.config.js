/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {},
      colors: {
        primary: "#786C6C",
        purple: "#6200DE",
      },

      fontFamily: {
        main: ["Mulish"],
      },
    },
  },
  plugins: [],
};
