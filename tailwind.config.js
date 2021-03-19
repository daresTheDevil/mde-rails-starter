// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: [
    './app/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/components/*.html.erb',
    './app/components/*.rb',
    './app/javascript/controllers/*.js',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        'activity': '700px'
      },
      zIndex: {
        'overlay': '9999'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        // sans: ['Public Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: theme => ({
        'cookie-hero': "url('/img/cookie-monster-eating-cookies.jpg')",

      }),
      colors: {
        primary: {
          DEFAULT: '#003b71', // 500
          hover: '#2A5C89',
          light: '#d9e8f6', // 100
          dark: '#001E39', // 700
        },
        secondary: {
          DEFAULT: '#7665d1',
          hover: '#5e519e',
          light: '#e7e3fa',
          dark: '#453c7b',
        },
        info: {
          DEFAULT: colors.blue[700],
          hover: colors.blue[800],
          light: colors.blue[100],
          dark: colors.blue[900],
        },
        success: {
          DEFAULT: colors.emerald[700],
          hover: colors.emerald[800],
          light: colors.emerald[100],
          dark: colors.emerald[900],
        },
        warning: {
          DEFAULT: '#eeca56',
          hover: colors.amber[700],
          light: colors.amber[100],
          dark: colors.amber[900],
        },
        error: {
          DEFAULT: colors.rose[600],
          hover: colors.rose[700],
          light: colors.rose[100],
          dark: colors.rose[900],
        },
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        rose: colors.rose,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
        lime: colors.lime,
        yellow: colors.yellow,
        amber: colors.amber,
        orange: colors.orange,
        red: colors.red,
      },
      zIndex: {
        'overlay': 9999
      }
    },
  },

  variants: {
    extend: {
      // ...
      cursor: ['hover', 'focus'],
    }

  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],

}
