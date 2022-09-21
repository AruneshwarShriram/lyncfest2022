/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'poppins': ['Poppins', 'sans-serif'] 
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
}
