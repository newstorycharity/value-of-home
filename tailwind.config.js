/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './value-of-home/index.html',
    './src/input.css',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00bae0',
        hover: '#3993B0',
        dark: '#2f2f2f',
        darkgray: '#333333',
        lightgray: '#f9f9f9',
        lightblue: '#EDFCFF',
        footer: '#6c6c6c',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        heading:['Barlow', 'sans-serif'],
        mackinack: ['p22-mackinac-pro', 'serif'],
        condensed: ['Barlow Semi Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
