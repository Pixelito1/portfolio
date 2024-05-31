/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amatic: ['"Amatic SC"', "cursive"],
        edu: ['"Edu NSW ACT Foundation"', "cursive"],
        galada: ["Galada", "cursive"],
        hind: ['"Hind Siliguri"', "sans-serif"],
        lora: ["Lora", "serif"],
        merriweather: ["Merriweather", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        nunito: ['"Nunito Sans"', "sans-serif"],
        questrial: ["Questrial", "sans-serif"],
        shadows: ['"Shadows Into Light"', "cursive"],
        signika: ['"Signika Negative"', "sans-serif"],
      },
      colors: {
        one: "#16213e",
        two: "#2a9d8f",
        three: "#0f3460",
        forth: "#002B5B",
      },
      boxShadow: {
        orangee:
          "0 10px 15px -3px rgba(255, 165, 0, 0.4), 0 4px 6px -2px rgba(255, 165, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
