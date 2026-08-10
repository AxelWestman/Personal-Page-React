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
      'xs': '440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        cream: '#faf7f2',
        ink: '#141413',
        'ink-light': '#3d3c3a',
        'ink-muted': '#787670',
        vermilion: '#e63946',
        'vermilion-light': '#ff4d5a',
        electric: '#4361ee',
        'electric-light': '#5e7bff',
        solar: '#ffd60a',
        'surface-gray': '#f0ece6',
        'surface-dark': '#e8e4dc',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        label: ['"Space Mono"', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'slide-left': 'slideLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-up': 'revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(24px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        revealUp: {
          '0%': { transform: 'translateY(32px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'bootstrap-photo': "url('/src/assets/images/bootstrap_page.png')",
        'tailwind-photo': "url('/src/assets/images/tailwind-project.png')",
        'react-photo': "url('/src/assets/images/react-photo.png')",
        'spacex': "url('/src/assets/images/spacex.png')",
        'php-project': "url('/src/assets/images/php_page.png')",
        'calculator-react': "url('/src/assets/images/calculadora.png')",
        'dkl-page': "url('/src/assets/images/dkl.png')",
      },
    },
  },
  plugins: [nextui()],
};
