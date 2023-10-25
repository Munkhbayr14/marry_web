/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      fontFamily: {
        'Sans': ['Fira Code', 'monospace', 'Open Sans', 'sans-serif'],
        'font-1': ['Fira Code', 'monospace', 'Open Sans', 'sans-serif', 'Playpen Sans', 'cursive',],
        'font-2': ['Fira Code',' monospace',
 'M PLUS Rounded 1c', 'sans-serif',
 'Open Sans', 'sans-serif',
'Playpen Sans', 'cursive']

      
      }
    },
  },
  plugins: [],
}
