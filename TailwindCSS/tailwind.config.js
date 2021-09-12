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
        'photo-1': "url('https://images.pexels.com/photos/4338015/pexels-photo-4338015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')", 
        'photo-2': "url('https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        'photo-3': "url('https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')", 
        'photo-4': "url('https://images.pexels.com/photos/4072840/pexels-photo-4072840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')", 
        'photo-5': "url('https://images.pexels.com/photos/5709180/pexels-photo-5709180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        'photo-6': "url('https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
