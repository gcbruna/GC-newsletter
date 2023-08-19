/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
        colors: {
            dark: {
                100: 'rgb(18, 18, 18)',
                200: 'rgb(51, 51, 51)'
            },
            roxo: {
                100: '#9681EB',
                200: '#35155D'
            }
        }
    },
},
  plugins: [],
}

