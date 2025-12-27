/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void': '#080808',
        'charcoal': '#1a1a1a',
        'mist': '#E6E6E6',
        'gold': '#D4AF37',
      },
      fontFamily: {
        'serif': ['"Italiana"', 'serif'],
        'sans': ['"Manrope"', 'sans-serif'],
      },
      fontSize: {
        'giant': '14vw',
      }
    },
  },
  plugins: [],
}