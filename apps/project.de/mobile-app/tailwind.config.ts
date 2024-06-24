/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./App.{js,jsx,ts,tsx}",
    // "./pages/**/*.{js,jsx,ts,tsx}",
    // "./layouts/**/*.{js,jsx,ts,tsx}",
    // "./components/**/*.{js,jsx,ts,tsx}",

    './src/app/**/*.{js,jsx,ts,tsx}'
  ],

  theme: {
    container: {
      padding: '28px'
    },
    extend: {
      colors: {
        primary: 'rgb(17 27 47 / <alpha-value>)',
        secondary: '#3399CC',
        accent: '#00ADEE',
        basicGrey: '#929497',
        lightGrey: '#A6A8AB',
        darkBlue: '#111B2F',
        lightBlue: '#3FB0DB'
      },
      fontFamily: {
        aeonisMedium: 'AeonisMedium',
        aeonisBold: 'AeonisBold',
        aeonisBoldExtended: 'AeonisBoldExtended',
        aeonisExtended: 'AeonisExtended',
        montserrat: 'Montserrat'
      }
    }
  },
  plugins: []
}
