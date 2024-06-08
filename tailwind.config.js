/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'card-mobile': '79.5px',
        'card-icon-lg': '50px',
        'card-lg': '115px',
        '78px': '78px',
        '644px': '644px'
      },
      fontSize: {
        '32px': '32px',
      },
      borderWidth: {
        '2.5px': '2.5px', // Define um tamanho de borda personalizado de 3 pixels
        '5px': '5px', // Define um tamanho de borda personalizado de 5 pixels
      },
      colors: {
        customBlue: '#0761E2',
        customInput: '#585858'
      },
      screens: {
        'xs': '400px', // ou qualquer valor que você preferir
        '1xl': '1800px'
      },
    },
  },
  plugins: [],
}

