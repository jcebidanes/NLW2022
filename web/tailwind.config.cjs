/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans: ['Inter' , 'sans-serif']
    },
    extend: {
      backgroundImage:{
        galaxy: "url('/Fundo.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 30%, #43E7AD 65%, #E1D55D 5%)',
        'game-gradient' :'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'

      }
    },
  },
  plugins: [],
}
