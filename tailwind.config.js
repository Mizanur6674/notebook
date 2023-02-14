/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{html,js,ts,tsx,jsx}", "./src/components/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        "theme-black": "#222222",
        "theme-light-black": "#333333",
        "theme-gray": "#666666",
        "theme-light-gray": "#D9D9D9",
        "theme-dark-gray": "#555555",
        "theme-parsian-green": "#00AAA1",
        "theme-grinish-cyan": "#F2F8F7",
        "theme-deep-grinish-cyan": "#DFF1F0",
        "theme-cyan-blue": "#6AB0DE",
        "theme-soft-green": "#78C578",
        "theme-orange-tacao": "#F0B37E",
        "theme-light-pink": "#E06F6C",
      },
      fontFamily: {
        noto_sans: ["Noto Sans"],
      },
    },
  },
  plugins: [],
};
