/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      letterSpacing: {
        ultraWider: '.4em',
      },
      colors: {
        primary: {
          darkCyan: 'hsl(158, 36%, 37%)',
          veryDarkCyan: 'hsl(156, 42%, 18%)',
          cream: 'hsl(30, 38%, 92%)',
        },
        neutral: {
          veryDarkBlue: 'hsl(212, 21%, 14%)',
          darkGrayishblue: 'hsl(228, 12%, 48%)',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        fraunces: ['Fraunces'],
      },
    },
  },
  plugins: [],
}
