/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#020f1f', // Azul escuro - Usado como fundo principal ou para ênfase em textos.
            light: '#1a2a3f', // Azul mais claro - Bom para fundos de seções ou barras laterais.
            lighter: '#334466', // Azul ainda mais claro - Ideal para fundos de caixas ou componentes.
            dark: '#010b14', // Azul muito escuro - Usado para textos ou componentes em contraste alto.
          },
          accent: {
            DEFAULT: '#3399ff', // Azul acentuado - Utilizado para links e botões.
            light: '#66b2ff', // Azul acentuado mais claro - Ótimo para hover de links ou botões.
            dark: '#0066cc', // Azul acentuado mais escuro - Usado para bordas ou textos em botões.
          },
        },
      },
    },
    plugins: [],
};
