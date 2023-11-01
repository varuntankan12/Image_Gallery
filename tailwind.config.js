/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      height: {
        '215': '100px',
      },
      width: {
        '320': '100px',
      },
      colors: {
        'color-1-light': '#ffffff',
        'color-2-light': '#fafafa',
        'color-3-light': '#333333',
        'color-1-dark': '#232323',
        'color-2-dark': '#4f4f4f',
        'color-3-dark': '#f1f1f1',
        'color-4-dark': '#141414'
      },
    },
  },
  plugins: [],
}

