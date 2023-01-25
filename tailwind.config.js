/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      deepBlack: '#333333',
      lightBlack: '#555555',
      deepGray: '#eeeeee',
      lightGray: '#fafafa',

      yellow: '#FFF59D',
      mustard: '#FFEAA7',

      backRgba: 'rgba(11,19,30,.37)',
    },
  },
  plugins: [],
};
