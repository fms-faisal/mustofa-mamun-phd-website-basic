module.exports = {
  content: [
    './src/**/*.{html,js}', // Scan all .html and .js files inside src and its subfolders
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};