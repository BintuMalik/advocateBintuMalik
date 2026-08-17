/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A5F",
          light: "#2C4F7C",
          dark: "#152B47",
        },
        accent: {
          DEFAULT: "#B08D57",
          light: "#C4A472",
          dark: "#96753F",
        },
        background: "#F8F9FB",
        body: "#2B2B2B",
        muted: "#6B7280",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
