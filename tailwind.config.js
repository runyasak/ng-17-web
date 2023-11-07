/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#fe33cc",
          "base-100": "#141414",
          'base-content': '#FFFFFF',
          '--rounded-btn': '6px'
        },
      },
    ],
  },
  theme: {
    extend: {
      screens: {
        xl: '1200px',
        '2xl': '1456px',
      },
      colors: {
        secondary: "rgba(255, 255, 255, 0.7)",
        grayscale: {
          900: 'rgba(255, 255, 255, 0.04)'
        }
      },
      animation: {
        imagemove: 'imagemove 5s linear infinite'
      },
      keyframes: {
        imagemove: {
          "0%": {
            transform: 'translateX(0)'
          },
          "100%": {
            transform: 'translateX(-100%)'
          }
        }
      }
    },
  },
  plugins: [require("daisyui")],
}

