/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      // 下面这里是自定义的
      colors:{
        primary: '#FF6363',
        secondary: {
          100: '#e2e2d5',
          200: '#888883',
        }
      },
      fontFamily:{
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

