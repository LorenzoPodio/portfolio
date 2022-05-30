module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        change: {
          '0%':{transform: 'translateY(50%)'},
          '50%':{transform: 'translateY(100%)'},
          '100%':{transform: 'translateY(0%)'}
        }
      },
      animation: {
        change: 'change 10s esay-in-out infinite'
      }
    },
  },
  plugins: [],
}
