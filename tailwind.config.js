/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffd700', // أصفر Ampcore
        dark: '#23243a',    // رمادي غامق Ampcore
        light: '#fff',      // أبيض
        gray: {
          100: '#f7f7f7',
          200: '#eee',
          300: '#ccc',
          400: '#bbb',
          500: '#444',
        },
      },
      fontFamily: {
        cairo: ["Cairo", "Arial", "sans-serif"],
      },
      boxShadow: {
        'amp': '0 2px 16px #0001',
        'amp-gold': '0 2px 16px #ffd70022',
      },
      borderRadius: {
        'amp': '18px',
      },
    },
  },
  plugins: [],
}
