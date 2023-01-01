/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['"Poppins"'],
      },
      gridTemplateColumns: {
        '20': 'repeat(5, minmax(85px, 1fr))',
        '21': 'repeat(5, minmax(120px, 1fr))',
        'lg': 'repeat(15, minmax(240px, 1fr))',
        'lg2': 'repeat(5, minmax(120px, 1fr))',
        'lg3': 'repeat(6, minmax(162px, 1fr))',
        'lg3.1': 'repeat(5, minmax(162px, 1fr))',
        'lg4': 'repeat(2, minmax(140px, 1fr))',
        'lg4.2': 'repeat(4, minmax(160px, 1fr))',
        'lg4.3': 'repeat(6, minmax(200px, 1fr))',
      },
      gridAutoColumns: {
        '2fr': 'minmax(140px, 1fr)',
      },
      screens: {
        'tablet': '540px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
