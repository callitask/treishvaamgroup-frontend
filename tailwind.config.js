/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FFFFFF', // Pure white for the main background
        'surface': 'rgba(247, 250, 252, 0.75)', // A semi-transparent white for cards/surfaces
        'text-primary': '#1A202C', // A dark charcoal for headings and primary text
        'text-secondary': '#4A5568', // A softer gray for body text and descriptions
        'accent': '#2563EB', // A modern, sophisticated blue for buttons and highlights
        'accent-hover': '#1D4ED8', // A darker blue for hover states
        'border': '#E2E8F0', // A subtle light gray for borders and dividers
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['"Source Sans Pro"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}