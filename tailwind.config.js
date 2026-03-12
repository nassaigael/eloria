module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bordeaux: {
          DEFAULT: '#7A0F1C',
          dark: '#5A0B14',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E6C76A',
        },
        champagne: '#F1E6D0',
        beige: '#E8DCC6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}