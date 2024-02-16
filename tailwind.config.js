/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'swiper1': "url('./src/Main/hero/images/header-1.jpg')",
        'swiper2': "url('./src/Main/hero/images/header-5.jpg')",
        'swiper3': "url('./src/Main/hero/images/header-6.jpg')",
        'bg-image': "url('./src/main/section3/images/video-screenshot-2.jpg')",
        'bg-image2': "url('./src/main/section10/images/Group 1.png')",
      }
    },
  },
  plugins: [],
})

