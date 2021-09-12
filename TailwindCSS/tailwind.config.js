const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'abril': ['"Abril Fatface"', 'serif'], 
        'roboto': ['"Roboto"', 'sans-serif']
      },
      colors: {
        lime: colors.lime
      },
      backgroundImage: theme => ({
        'photo-1': "url('https://images.pexels.com/photos/5740842/pexels-photo-5740842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')", 
        'photo-2': "url('https://images.pexels.com/photos/5474504/pexels-photo-5474504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        'photo-3': "url('https://images.pexels.com/photos/1938345/pexels-photo-1938345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')", 
        'photo-4': "url('https://images.pexels.com/photos/1819656/pexels-photo-1819656.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')", 
        'photo-5': "url('https://images.pexels.com/photos/1938348/pexels-photo-1938348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
        'photo-6': "url('https://images.pexels.com/photos/1674624/pexels-photo-1674624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
