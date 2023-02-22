/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'max-sm' : {'max': '639px'}
    },
    extend: {
      backgroundImage: {
        'hero' : "url('https://tailwindcss.com/_next/static/media/blog-post-form-dark@90.5b274bea.jpg')",
        'heroLite' : "url('https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png')"
      },
      colors: {
        'light-mode-text': "slate-300", 
      }
    },
  },
  plugins: [],
}
