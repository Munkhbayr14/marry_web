/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sans': ['Fira Code', 'monospace', 'Open Sans', 'sans-serif'],
        'josefin': ['Josefin Sans', 'sans-serif'],
        'font-elegant': ['Montserrat', 'sans-serif'],
        'font-1': ['Fira Code', 'monospace', 'Open Sans', 'sans-serif', 'Playpen Sans', 'cursive' ],
        'font-2': ['Fira Code',' monospace', 'Caveat', 'M PLUS Rounded 1c', 'sans-serif', 'Open Sans', 'Playpen Sans', 'cursive']
      },
      // --- ЭНД АНИМЕЙШНЭЭ НЭМЖ БАЙНА ---
      keyframes: {
        music: {
          '0%, 100%': { height: '4px' },
          '50%': { height: '16px' },
        }
      },
      animation: {
        'music-bar': 'music 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}