/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{
      lightBlue: {
        400: '#819DC7',
        600: '#5A79A8',
      },
      blueGray: {
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0C1625',
      }
    },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
