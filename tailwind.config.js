/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          950: "#03122e",
          900: "#061b44",
          800: "#0B3D8F",
          700: "#1557C0",
          600: "#2166d4",
          500: "#3B7DE8",
          400: "#6099ef",
          300: "#93baf6",
          100: "#deeafb",
          50:  "#f0f6ff",
        },
        charcoal: {
          950: "#080d1a",
          900: "#111827",
          800: "#1f2937",
          700: "#374151",
          600: "#4B5563",
          500: "#6B7280",
          400: "#9CA3AF",
          200: "#E5E7EB",
          100: "#F3F4F6",
          50:  "#F9FAFB",
        },
      },
      fontFamily: {
        display: ["'DM Serif Display'", "Georgia", "serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
