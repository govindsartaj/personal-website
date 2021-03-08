module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Proxima Nova"', 'sans-serif']
    },
    extend: {
      colors: {
        'darkbg': '#121212',
        'darkCardGray': '#292929'
      },
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
