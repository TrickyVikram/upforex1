/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        themePrimary: "#3cff19",
        themeSecondary: "#4454a1",
      },
    },
  },
  plugins: [],
};
