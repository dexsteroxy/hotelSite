/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
     container: {
      padding: {
        DEFAULT: '20px',
        lg: '0',
      }
     },
    extend: {
      colors: {
        dark: '#111111',
        grey: {
          DEFAULT: '#555555'
        },
      },

      fontFamily: {
        poppins: "poppins"
       },
      backgroundImage: {
        hero: "url('/src/image/ttt.jpg')",
        about: "url('/src/image/bg.png')",
        interview: "url('/src/image/me.avif')",
      },
      content: {
        outlineTex: "url('/src/image/Quote.png')",
      }
    },
  },
  plugins: [],
};

