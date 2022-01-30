module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      head: ['Source Sans Pro', 'sans-serif'],
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
