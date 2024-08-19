/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      ...colors,
      'primary': '#63e2b7',
      'warning': '#f2c97d',
      'danger': '#e88080',
      'info': '#70c0e8',
    }
  }
}