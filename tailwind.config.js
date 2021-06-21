// const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   gray: '#44464d',
    //   blue: '#00a5ff',
    //   red: '#ff0000',
    //   pink: colors.fuchsia,
    // },
    // fontFamily: {
    //   sans: ['Raleway', 'sans-serif'],
    //   serif: ['Castoro', 'serif'],
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
