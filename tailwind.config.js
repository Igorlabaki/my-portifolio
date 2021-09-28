module.exports = {
  purge: [],
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "column": "url('/imgs/3-column-preview-card-component.jpg')",
        "summary": "url('/imgs/order-summary.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
