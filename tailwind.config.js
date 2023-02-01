/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "url('https://tailwindcss.com/_next/static/media/blog-post-form-dark@90.5b274bea.jpg')"
      }
    },
  },
  plugins: [],
}
