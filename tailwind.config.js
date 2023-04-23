/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-500': '#666666',
        'gray-800': '#888',
        'gray-900': '#222',
        'dark-gray': '#111111',
        primary: '#0070f3',
      },
    },
  },
  plugins: [],
};
