/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sohneKraftig': ["sohne-kraftig"],
        'sohneBuch': ["sohne-buch"],
      },
      colors:{
        'clay-black':"#1d2026",
        'clay-green':'#41a46d',
        'clay-orange':'#e3763a',
        'clay-sand':'#edab44',
        'clay-yellow':'#e8b239',
        'clay-pink-100':'#e45f82',
        'clay-pink-500':'#cc3c58',
        'clay-blue-50':'#e7e8ec',
        'clay-blue-100':'#f4f7fd',
        'clay-blue-200':'#676d7e',
        'clay-blue-500':'#3c82ec',
        'clay-purple-200':"#9170e6",
        'clay-purple-500':"#825ddc",
        'clay-red-100':"#e86558"
      }
    },
  },
  plugins: [],
}

