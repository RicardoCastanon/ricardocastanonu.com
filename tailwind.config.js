/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      disc: 'disc',
      square: 'square',
      circle: 'circle'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
