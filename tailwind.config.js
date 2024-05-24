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
        'sp-contrast': {
          400: '#82F7EB',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};