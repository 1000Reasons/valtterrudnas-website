/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode:"class",
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'darkmode': "URL('/build/img/dark-mode.png')",
        'lightmode': "URL('./build/img/light-mode.png')",
        'darkmode-1': "URL('/img/dark-mode.png')",
        'lightmode-1': "URL(./img/light-mode.png')",
        'darkmode-2': "URL('../valtterrudnas-website/build/img/dark-mode.png')",
        'lightmode-2': "URL('../valtterrudnas-website/build/img/light-mode.png')",
      },
      fontFamily: {"Inter": "sans-serif"},
      colors: {
        "nord": {
          0: '#2E3440',
          1: '#3B4252',
          2: '#434C5E',
          3: '#4C566A',
          4: '#D8DEE9',
          5: '#E5E9F0',
          6: '#ECEFF4',
          7: '#8FBCBB',
          8: '#88C0D0',
          9: '#81A1C1',
          10: '#5E81AC',
          11: '#BF616A',
          12: '#D08770',
          13: '#EBCB8B',
          14: '#A3BE8C',
          15: '#B48EAD',
        },
      },
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(min-aspect-ratio: 13/20)'},
        'break-width': '900px',
      },
      keyframes:{
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.1)'},
          '100%': {transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
