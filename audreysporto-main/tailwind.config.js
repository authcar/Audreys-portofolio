const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], //daftar file yg dicek tailwind
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Libre Baskerville", "serif"],
      playwrite: ['"Playwrite NO"', "cursive"],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
      pink: colors.pink,
    },

    extend: {
      colors: {
        //warna kustom
        bg: "#FDFDF5",
        "fun-gray": "#7b89a8",
        "fun-gray-medium": "#767c85",
        "fun-gray-darker": "#2a2a2c",
        "fun-gray-dark": "#1F1F20",
        "fun-gray-darkest": "#141414",
        beige: "#ece3d2",
        "medium-pink": "#f4c7d0",
        "dark-pink": "#c66f80",
        "medium-green": "#9faa74",
        "dark-green": "#4a6644",
        "light-pink": "#fcebf1",
        "fun-pink-darker": "#4a6644",
        "fun-pink-darkest": "#c66f80",
        "fun-pink-light": "#f4c7d0",
      },
      rotate: {
        360: "360deg",
      },

      animation: {
        wave: "wave 2s ease-in-out infinite",
        fadeInAndBounce: "fadeIn 3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-25px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      willChange: {
        projectCard: "border-color, opacity, transform",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
