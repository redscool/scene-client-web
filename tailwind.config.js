const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    colors: {
      primary: "#0a0a0a",
      secondary: "#f0f0f0",
      "primary-light": "#1E1E1E",
      placeholder: "#797A86",
      accent: "#E1FF41",
    },
    extend: {
      fontFamily: {
        sans: ['"Kumbh Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Jua"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
