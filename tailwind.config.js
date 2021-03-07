module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Proxima Nova"', 'sans-serif']
    },
    extend: {
      colors: {
        'darkbg': '#0a0a0a',
      },
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
