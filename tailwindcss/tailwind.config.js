/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: '#41e051'
    }
  }
}