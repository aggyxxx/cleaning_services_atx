/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"]
      },
      colors: {
        blossom: {
          50: "#fdf6f8",
          100: "#fbe9ef",
          200: "#f7d3df",
          300: "#f0abc5",
          400: "#e87ea6",
          500: "#de5c8d",
          600: "#c23672",
          700: "#a0295d",
          800: "#7d224b",
          900: "#611c3e"
        },
        lavender: {
          50: "#f7f5ff",
          100: "#f0ebff",
          200: "#e1d6ff",
          300: "#c6b2ff",
          400: "#a988ff",
          500: "#9166ff",
          600: "#7a42ff",
          700: "#642bdb",
          800: "#5123ac",
          900: "#3f1c83"
        },
        mint: {
          50: "#f2fcf9",
          100: "#d2f7ec",
          200: "#a6efd9",
          300: "#73e0c0",
          400: "#45cfa6",
          500: "#27b58d",
          600: "#1c8d6e",
          700: "#186f58",
          800: "#145646",
          900: "#0f4135"
        },
        cream: {
          50: "#fffcf6",
          100: "#fff6e3",
          200: "#fbe9c2",
          300: "#f6d499",
          400: "#efba6c",
          500: "#e7a14b",
          600: "#c57f30",
          700: "#9b6125",
          800: "#784b1f",
          900: "#5d3a1a"
        }
      },
      boxShadow: {
        glow: "0 20px 45px -20px rgba(221, 120, 170, 0.45)",
        pastel: "0 25px 50px -12px rgba(122, 66, 255, 0.25)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(244, 219, 237, 0.95), rgba(225, 214, 255, 0.8)), linear-gradient(135deg, rgba(233, 137, 197, 0.7), rgba(118, 213, 188, 0.7))",
        "card-glass":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5))"
      }
    }
  },
  plugins: []
};

module.exports = config;

