/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#0f0f0f',
      'orange': '#d05424',
      'purple': '#3e2759',
      'gray-700': '#4a5568',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.bg-bragi-roxo': {
          backgroundImage: "url('../public/bg-roxo.jpg')",
        },
      }, {
        // define a camada personalizada aqui
        // use `components` para uma classe global personalizada
        // ou `utilities` para uma utilidade personalizada
        respectPrefix: false,
        respectImportant: false,
        layer: 'components',
      })
    }
  ],
}
