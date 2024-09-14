/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        h1: ["64px", "72px"],
        h2: ["56px", "64px"],
        h3: ["48px", "56px"],
        h4: ["40px", "48px"],
        h5: ["32px", "40px"],
        p: ["16px", "24px"],
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        red: "#b91c1c",
      },
      backgroundImage: {
        "about-section":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/background/AboutBackground.jpg')",
        "event-section":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)), url('/src/assets/images/background/MainEventBackground.jpg')",
        "speakers-section":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('/src/assets/images/background/SpeakersBackground.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
