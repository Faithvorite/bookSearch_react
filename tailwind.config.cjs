/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      clipPath: {
        mycurve: "polygon(0 0, 15% 0, 40% 5%, 65% 0, 85% 0, 100% 5%, 100% 100%, 85% 95%, 70% 95%, 40% 100%, 15% 95%, 0 95%)",
    },
      backgroundImage: {
        'bridge': "url('https://i.imgur.com/CoQnIbZ.png')",
      },
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
        logo: ['Unbounded', 'cursive'],
        base: ['Arimo', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
    require('tailwind-clip-path'),
],
};