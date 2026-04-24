/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0891b2',
        'primary-dark': '#0e7490',
        'primary-light': '#22d3ee',
        gold: '#d97706',
        'gold-light': '#fbbf24',
        charcoal: '#1c1917',
        sand: '#fef3c7',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
