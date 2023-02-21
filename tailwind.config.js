/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // wont work cause those font family are not installed
      fontFamily:{
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
      },
      // we wont be using this on general cases - just 4 ecommerce
      screens:{
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
      colors:{
        primary: '#ED3057',
        primary_shade:'#ba0d31',

      },
  
    },
  },
  plugins: [],
}