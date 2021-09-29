module.exports = {
  purge: [],
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}','./src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        "darkBlue": "#14213D",
        "orange": "#FCA311",
        "darkGray": "#E5E5E5",
      },
      textColor: {
        "darkBlue": "#14213D",
        "orange": "#FCA311",
        "darkGray": "#E5E5E5",
      },
      borderColor: {
        "darkBlue": "#14213D",
        "orange": "#FCA311",
        "darkGray": "#E5E5E5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
