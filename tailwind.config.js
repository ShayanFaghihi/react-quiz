/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      wheat : '#e1ca96',
      midnightGreen : '#114b5f',
      white: '#fff'
    },
    fontFamily: {
      crimson: ['Crimson Text', 'serif']
    },
    extend: {},
  },
  plugins: [],
};
