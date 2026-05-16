/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        primary: "#3b82f6",
        gold: "#f59e0b",
      },
    },
  },
  plugins: [],
}
