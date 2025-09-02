/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Custom:["Yrsa", 'serif']
      },
        colors: {
          PrimaryColor: "#D7AE61"
      }
    },
  },
  plugins: [ require('daisyui')],
}

