/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'White': '#FFFFFF',
      'Light gray': '#D5D8E3',
      'Grayish blue': '#8495B5',
      'Dark blue': '#1D2A38',

    },
    fontFamily: {
      Family: ['outfit']
      
    },
    extend: {},
  },
  plugins: [],
}

