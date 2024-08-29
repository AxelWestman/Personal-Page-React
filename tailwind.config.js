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
      animation: {
        'escribir' : 'escribir 5s steps(13) infinite alternate',
      },
      keyframes:{
        escribir: {
          'from': { width: '100%' },
          'to': { width: '0' }
      },
    },
      backgroundImage: {
        'bootstrap-photo': "url('src/assets/images/bootstrap_page.png')",
        'tailwind-photo': "url('src/assets/images/tailwind-project.png')",
        'react-photo': "url('src/assets/images/react-photo.png')",
        'spacex': "url('src/assets/images/spacex.png')",
        'gradient-bg': {
          'background-image': 'linear-gradient(135deg, hsla(350, 100%, 31%, 1) 0%, hsla(229, 56%, 20%, 1) 87%)',
          'background-size': 'cover',
          'background-position': 'center'
        }
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

