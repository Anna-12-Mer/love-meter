/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E4A5FF",
        secondary: {
          100: "#E4A5FF",
          200: "#2E2133",
          500: "#B8A4C0",
        },
      },
      fontFamily: {
        ruda: ["Ruda"],
        ruslan: ["Ruslan Display"],
      },
    },
  },
  plugins: [],
};
