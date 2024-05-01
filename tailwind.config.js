/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#3C403A",
        green: "#3A7326"
      },
    },
  },
  plugins: [],
};
