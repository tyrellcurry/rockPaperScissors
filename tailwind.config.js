/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // Neutral
      'dark-text': '#32374E',
      'score-text': '#2A46C0',
      'header-outline': '#606E85',
      'white': '#fff',
      'black': '#000',
      // Gradients
      'scissor-gradient-1': '#F2AB26',
      'scissor-gradient-2': '#ECA922',
      'paper-gradient-1': '#4865F4',
      'paper-gradient-2': '#5671F5',
      'rock-gradient-1': '#DC2E4E',
      'rock-gradient-2': '#DD405D',
      // Background
      'radial-gradient-1': '#1F3756',
      'radial-gradient-2': '#141539',
    },
    fontFamily: {
      'barlow': ['Barlow Semi Condensed', 'sans-serif'],
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    },
  },
  plugins: [],
}