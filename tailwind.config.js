/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PJ: ['Plus Jakarta Sans', 'sans-serif'],
        
      },
    },
    borderRadius:{
      'md': '10px',
    }
  },
  plugins: [],
}
