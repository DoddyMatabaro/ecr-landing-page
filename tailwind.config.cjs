/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#1A1E23',
      grey: '#888888',
      yellow:'#FFB600',
      grey_varient: '#C5c5c5',
      white_varient: '#F8F8F8',
      'white': '#ffffff',
    },
    extend: {},
  },
  plugins: [],
}
