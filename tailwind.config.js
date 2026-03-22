/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        komo: {
          bg: '#F4F7F2',
          text: '#2C3E2D',
          muted: '#7D917E',
          accent: '#5E8B62',
          gold: '#C4A24E',
          urgent: '#C07A5A',
          done: '#8BAF8B',
        },
      },
      borderRadius: {
        card: '20px',
      },
      boxShadow: {
        card: '0 10px 30px rgba(44, 62, 45, 0.08)',
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
