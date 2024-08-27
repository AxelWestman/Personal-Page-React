const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", 
    ],
  theme: {
    extend: {
      backgroundImage: {
        'bootstrap-photo': "url('src/assets/images/bootstrap_page.png')",
      },
      fontFamily:{
          baskerville:["Libre Baskerville", "serif"],
      },
      colors:{
        
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

