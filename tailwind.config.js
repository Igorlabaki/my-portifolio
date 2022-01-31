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
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
