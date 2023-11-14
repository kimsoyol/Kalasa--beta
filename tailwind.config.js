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
      Charcoal: '#32312F',
      Black: '#161616',
      Eggshell: '#F6EACC',
      Merio: '#F5EEDC',
      Quicksand: '#C59E7F',
      Merino: '#F5F0E6',
      cream:'#F7E4C3',
      White: '#FFFFFF',
      Gray: 'rgb(185 185 185)'
    },
    fontFamily: {
      serif: ['Cardo', 'serif'],
    },
    extend: {
    },
  },
  plugins: [],
}