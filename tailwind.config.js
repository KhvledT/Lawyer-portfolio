/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#1a2332',
        'primary-gold': '#d4af37',
        'accent-blue': '#2c5aa0',
        'light-gray': '#f8f9fa',
        'medium-gray': '#6c757d',
        'dark-gray': '#343a40',
      },
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'light': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'heavy': '0 8px 30px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
