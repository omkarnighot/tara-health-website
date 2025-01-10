/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('frame1.svg')",
      },
      colors: {
        'beige': "#FDFCDF",
        'beige-2': "#FFFEEC",
        'green-1': "#32794F",
        'green-2': "#298029",
        'green-3': "#1A3E1F"
      }
    },
  },
  plugins: [],
}