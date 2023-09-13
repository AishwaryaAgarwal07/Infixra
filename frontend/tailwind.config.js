/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        //main colors
        primary: "#f8f8f8",
        secondary: "#2d3061",
        tertiary: "#08088f",
        footerColor:"#061124",
        navColor:"#0b1015",
        hover:"#1c6aab",
        heading:"#161950"
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
  
}

