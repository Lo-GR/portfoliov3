module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'sp-background': {
          100: '#FFF',
          300: '#E1E1E1',
        },
        'sp-text': {
          300: '#33332D',
        },
        'sp-contrast-blue': {
          400: '#82F7EB',
          500: '#82D2F7'
        },
        'sp-contrast-yellow': {
          400: '#F7F382',
        },
        'sp-contrast-green': {
          400: '#D4FCB5'
        },
        'sp-contrast-orange': {
          400: '#EEAC5D'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};