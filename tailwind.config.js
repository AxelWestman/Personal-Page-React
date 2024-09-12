const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
  theme: {
    screens: {
      'newphones': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
        'bootstrap-photo': "url('/src/assets/images/bootstrap_page.png')",
        'tailwind-photo': "url('/src/assets/images/tailwind-project.png')",
        'react-photo': "url('/src/assets/images/react-photo.png')",
        'spacex': "url('/src/assets/images/spacex.png')",
        'php-project': "url('/src/assets/images/php_page.png')",
        "calculator-react": "url('/src/assets/images/calculadora.png')",
        'dkl-page': "url('/src/assets/images/dkl.png')",
      },
      fontFamily:{
          baskerville:["Libre Baskerville", "serif"],
          poppins:["Poppins", "sans-serif"],
      },
      colors:{
        
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

