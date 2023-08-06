/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:{
          50:"#f7f6ef",
          100:"#f3f2e8",
          200:"#f0efe1",
          300: '#eeedde',
        }
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        DataHexTheme: {
          primary: "#000000",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#fff",
        },
      },
     
    ],
  }
}