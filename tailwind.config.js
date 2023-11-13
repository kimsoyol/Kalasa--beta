/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      Brown: '#883B0A',
      Black: '#32312F',
      Eggshell: '#F6EACC',
      Merio: '#F5EEDC',
      Quicksand: '#C59E7F',
      white: '#F5F0E6',
      cream:'#F7E4C3'
    },
    fontFamily: {
      serif: ['Cardo', 'serif'],
    },
    extend: {
    },
  },
  plugins: [],
}