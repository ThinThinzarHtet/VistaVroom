/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "primary-black": "#222",
        "primary-green": "#94CA21",
        "secondary-green": "#EDF3E0",
        "accent-green": "#D3EB9F",
        "light-gray": "#686868",
        "dark-gray": "#414141",
        "subtitle-gray": "#686868",
        "lightest-gray": "#F9F9F9",
        "accent-gray": "#E1E1E1",
        "secondary-gray": "#E4E4E4",
      },
      screens: {
        xl: "1140px",
        lg: "900px",
        sm: "640px",
        xs: "300px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
