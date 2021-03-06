const colors = require('tailwindcss/colors')

module.exports = {
  // important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": false,
            "code::after": false,
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
            a: {
              textDecoration: `none`,
              "&:hover": {
                textDecoration: `underline`,
              },
            },
          },
        },
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      blue: {
        '50': 'hsl(201, 100%, 90%)',
        '100': 'hsl(201, 100%, 80%)',
        '200': 'hsl(201, 100%, 75%)',
        '300': 'hsl(201, 100%, 70%)',
        '400': 'hsl(201, 100%, 65%)',
        '500': 'hsl(201, 100%, 60%)',
        '600': 'hsl(201, 100%, 55%)',
        '700': 'hsl(201, 100%, 50%)',
        '800': 'hsl(201, 100%, 45%)',
        '900': 'hsl(201, 100%, 40%)',
      },
    },
    // fontFamily: {
    //   sans: ['Raleway', 'sans-serif'],
    //   serif: ['Castoro', 'serif'],
    // },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
