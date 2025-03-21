/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skooliDark: '#262626',
        skooligreen1: {
          DEFAULT: "#52BD94", 
          19: "rgba(82, 189, 148, 0.19)", // 19% opacity version
        },
        skooligreen2: "#5FD8A8",
        labelGray: '#636363', 
        black63: "rgba(0, 0, 0, 0.63)",  // Black 63% opacity
        black56: "rgba(0, 0, 0, 0.56)",  // 
        black20: "rgba(0, 0, 0, 0.20)",
        black75: "rgba(0, 0, 0, 0.75)",
        black25: "rgba(0, 0, 0, 0.25)",
        timetablegray: '#B1B1B1'

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bodyMedium: ['YourFontName', 'sans-serif'],
        sansita: ["Sansita", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        titlesmall: ['YourFontName', 'sans-serif'],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ['Montserrat', 'sans-serif'],

      },
      boxShadow: {
        labelShadow: "0px 4px 4px 0px rgba(0,0,0,0.20)", 
      },
    
    },
  },
  plugins: [],
}

