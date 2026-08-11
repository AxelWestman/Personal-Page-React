/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: '#0a0a1a',
        surface: '#0f0f24',
        card: '#151530',
        cardHover: '#1c1c3d',
        text: '#e8e0d0',
        'text-dim': '#8078a0',
        gold: '#c8a84e',
        cyan: '#00f0ff',
        magenta: '#ff5fa2',
        green: '#39ff14',
        yellow: '#ffd700',
        orange: '#ff8c42',
        purple: '#b44dff',
      },
      fontFamily: {
        display: ['"Press Start 2P"', 'monospace'],
        body: ['"VT323"', 'monospace'],
      },
    },
  },
  plugins: [],
};
