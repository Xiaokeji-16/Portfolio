import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0a0a0b",
          card: "#131316",
          border: "#1f1f23",
          text: "#e8e8e8",
          muted: "#6b6b6b",
        },
        light: {
          bg: "#fafafa",
          card: "#ffffff",
          border: "#e5e5e5",
          text: "#1a1a1a",
          muted: "#6b6b6b",
        },
        accent: {
          DEFAULT: "#3b82f6",
          hover: "#60a5fa",
        },
        highlight: "#f97316",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;