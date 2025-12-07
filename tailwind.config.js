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
        sage: {
          50: "#f6f7f6",
          100: "#e8ebe8",
          200: "#d1d9d1",
          300: "#a8b8a8",
          400: "#7a947a",
          500: "#5d7a5d",
          600: "#4a634a",
          700: "#3d503d",
          800: "#334233",
          900: "#2b362b"
        },
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917"
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a"
        }
      },
      boxShadow: {
        glow: "0 20px 45px -20px rgba(93, 122, 93, 0.15)",
        pastel: "0 25px 50px -12px rgba(93, 122, 93, 0.12)",
        soft: "0 2px 8px rgba(0, 0, 0, 0.04)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(250, 250, 249, 0.98), rgba(246, 247, 246, 0.95)), linear-gradient(135deg, rgba(232, 235, 232, 0.3), rgba(241, 245, 249, 0.2))",
        "card-glass":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))"
      }
    }
  },
  plugins: []
};

module.exports = config;

