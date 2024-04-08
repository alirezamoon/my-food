/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          10: '#FFFEF6',
          20: '#E4D8AB',
          30: '#647403',
          40: '#101010',
          60: '#F9F7EB'
        },
      }
    },
  },
  plugins: [],
}
