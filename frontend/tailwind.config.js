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
        heading:"#161950",
        heroButton: "#f6ec72"
      },
      screens: {
        xs: "450px", 
      },
      height: {
        '100': '35rem',
        '125': '50rem',
      },
      backgroundImage: {

        "work-bg": "url('/src/assets/workbg.jpg')",
        'custom-name': "url('/src/assets//Tophouse.jpg')",
        "Quotes-Bg":"url('/src/assets//quotesbg.svg')",
      }
    },
  },
  plugins: [],
  
}

