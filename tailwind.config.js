/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F1A",
        card: "#111827",
        primary: "#2563EB",
        secondary: "#06B6D4",
        text: "#FFFFFF",
        muted: "#9CA3AF"
      }
    }
  },
  plugins: []
};
