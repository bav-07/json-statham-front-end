/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "url('https://tailwindcss.com/_next/static/media/blog-post-form-dark@90.5b274bea.jpg')",
        'heroLite' : "url('https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png')"
      },
      colors: {
        'light-mode-text': "slate-300", 
      },
      animation: {
        text: 'text 4s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        }
      }
    },
  },
  plugins: [],
}
