/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'nutmeg': "hsl(14, 45%, 36%)",
        'dark-raspberry': "hsl(332, 51%, 32%)",
        'rose-white': "hsl(330, 100%, 98%)",
        'eggshell': "hsl(30, 54%, 90%)",
        'light-grey': "hsl(30, 18%, 87%)",
        'wenge-brown': "hsl(30, 10%, 34%)",
        'dark-charcoal': "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        primary1: ["Outfit", "sans-serif"],
        primary2: ["Young Serif", "sans-serif"],
      },
      maxWidth: {
        '2.5xl': '46rem',
      },
    },
  },
  plugins: [],
}

