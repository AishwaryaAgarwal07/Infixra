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
        heroButton: "#f6ec72",
        bh:"#BAB254",
        serviceHeading:"#eae6b5",
        "portfolio-bg":"#e4e7fa"
      },
      screens: {
        xs: "450px",
        ad:"1000px",
        hs:"990px", 
      },
      height: {
        '100': '35rem',
        '125': '50rem',
      },
      backgroundImage: {
        "services-background": "url('/src/assets/services.png')",
        "work-bg": "url('/src/assets/workbg.jpg')",
        'custom-name': "url('/src/assets/Tophouse.jpg')",
        "Quotes-Bg":"url('/src/assets/quotesbg.svg')",
        "Contact-bg":"url('/src/assets/ContactUS/Contactbg.jpg')",
        "side-bg":"url('/src/assets/ContactUs/blog-side-bg.png')",
        "Appointment-bg":"url('/src/assets/Services/AppoinmentBg.png')",
        "TC-bg":"url('/src/assets/tcBg.avif')",
        
      }
    },
  },
  plugins: [],
  
}

