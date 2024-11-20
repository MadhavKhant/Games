/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '4xl': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)', // Custom shadow 4xl
        '5xl': '0 25px 30px -5px rgba(0, 0, 0, 0.35), 0 15px 15px -5px rgba(0, 0, 0, 0.25)', // Custom shadow 5xl
        '6xl': '0 30px 40px -10px rgba(0, 0, 0, 0.4), 0 20px 20px -10px rgba(0, 0, 0, 0.3)', // Custom shadow 6xl
        '7xl': '0 40px 50px -15px rgba(0, 0, 0, 0.5), 0 25px 25px -15px rgba(0, 0, 0, 0.35)', // Custom shadow 7xl
        '8xl': '0 50px 60px -20px rgba(0, 0, 0, 0.6), 0 30px 30px -20px rgba(0, 0, 0, 0.4)', // Custom shadow 8xl
      },
    },
  },
  plugins: [],
}