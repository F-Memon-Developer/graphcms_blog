/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // looks inside pages folder
    './components/**/*.{js,ts,jsx,tsx}' // if you add a components folder later
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
