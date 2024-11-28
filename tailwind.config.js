const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        primary: "#0FF1F6",
        secondary: "#2D2D2D",
        accent: "#002228",
        foreground: "#FFFFFF",
      },
      // backgroundImage: {
      //   "gradient-primary": "linear-gradient(180deg, #00D2FF 0%, #059DBE 100%)",
      //   "gradient-secondary":
      //     "linear-gradient(161.45deg, #00D2FF -5.54%, #9AEDFF 59.11%)",
      // },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ['"Work Sans"', "sans-serif"],
      },

      boxShadow: {
        "nav-btn": "0px 0px 16px 0px #53FFFC33",
        card: "0px 10px 30px 0px #02B6DC26",
        faq: "0px 0px 25px 0px #02B6DC26",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
