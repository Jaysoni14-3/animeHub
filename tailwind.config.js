/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      marginLeft: "1rem",
      marginReft: "1rem",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        primaryColor: "#FF4500",
        secondaryColor: "#FFD700",
        accentColor: "#FF69B4",
        skyBlue: "#5AC8FA",
        textWhite: "#f4f4f4",
        textBlack: "#333333",
        bgBlack: "#0B0B0B",
        borderColor: "#886DB2",
      },
    },
  },
  plugins: [],
};

// #5608D2 --primary
// #0B0B0B --black
// #F4F4F4 --white
// #886DB2 --border
// #BD93FF --secondary
