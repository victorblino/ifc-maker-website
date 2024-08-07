// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#020f1f', // Azul escuro
          light: '#1d3247', // Azul intermediário
          lighter: '#334466', // Azul mais claro
        },
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: 'left top' },
          '50%': { backgroundPosition: 'right bottom' },
        },
      },
      animation: {
        'gradient-animation': 'gradient 30s ease infinite', // Ajuste a duração conforme necessário
      },
    },
  },
  plugins: [],
}
