/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php", // Laravel Blade templates
    "./src/**/*.{js,jsx,ts,tsx}", // React components
    "./index.html", // Main HTML file
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      }
    },
  },
  plugins: [],
}