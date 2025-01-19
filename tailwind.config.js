/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        biege: {
          100: '#f5f5dc',
        },
        ivory: {
          100: '#fffff0',
        },
        customGray: '#f2f1f0'
      }
    },
  },
  plugins: [],
};
