module.exports = {
  // content: [
  //   './src/**/*.{html,js}', // Scan all .html and .js files inside src and its subfolders
  // ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'wave-text': 'waveText 3s linear infinite',
      },
      keyframes: {
        waveText: {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '100% 0' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};