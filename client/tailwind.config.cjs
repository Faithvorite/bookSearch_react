/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      clipPath: {
        mycurve: "polygon(0 0, 15% 0, 40% 5%, 65% 0, 85% 0, 100% 5%, 100% 100%, 85% 95%, 65% 95%, 40% 100%, 15% 95%, 0 95%)",
        footercurve: "polygon(18% 0, 30% 2%, 43% 5%, 57% 6%, 75% 4%, 86% 1%, 90% 0, 100% 0, 100% 100%, 0 100%, 0 8%, 9% 4%)",
        roundedcurver:"polygon(31% 7%, 25% 7%, 18% 10%, 13% 13%, 8% 17%, 4% 23%, 3% 31%, 2% 40%, 3% 46%, 4% 51%, 7% 57%, 6% 63%, 4% 70%, 4% 79%, 7% 89%, 13% 92%, 23% 97%, 29% 97%, 36% 95%, 40% 94%, 47% 94%, 51% 96%, 60% 99%, 71% 99%, 79% 96%, 86% 92%, 91% 87%, 95% 83%, 100% 78%, 100% 69%, 99% 58%, 98% 47%, 97% 37%, 96% 28%, 91% 22%, 86% 19%, 85% 14%, 84% 8%, 77% 4%, 57% 0%, 44% 0%)"
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