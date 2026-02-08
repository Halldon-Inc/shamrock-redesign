import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shamrock: {
          50: "#e6f7ed",
          100: "#b3e8cc",
          200: "#80d9ab",
          300: "#4dca8a",
          400: "#26be72",
          500: "#009244",
          600: "#00833d",
          700: "#007035",
          800: "#005c2b",
          900: "#003d1c",
        },
        navy: {
          50: "#e6e6e9",
          100: "#b3b3ba",
          200: "#80808b",
          300: "#4d4d5c",
          400: "#26263d",
          500: "#000119",
          600: "#000116",
          700: "#000113",
          800: "#00010f",
          900: "#00000a",
        },
        cream: "#fafaf8",
        stone: {
          light: "#f5f5f0",
          DEFAULT: "#e8e6df",
          dark: "#d4d1c7",
        },
      },
      fontFamily: {
        sans: ["var(--font-raleway)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(0,1,25,0.85) 0%, rgba(0,146,68,0.7) 100%)",
        "section-gradient":
          "linear-gradient(180deg, #fafaf8 0%, #f5f5f0 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
