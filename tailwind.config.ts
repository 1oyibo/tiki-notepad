import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-title)", "system-ui", "sans-serif"],
        default: ["var(--font-default)", "system-ui", "sans-serif"],
      },
      colors: {
        white: "var(--note-white)",
        stone: {
          50: "var(--note-stone-50)",
          100: "var(--note-stone-100)",
          200: "var(--note-stone-200)",
          300: "var(--note-stone-300)",
          400: "var(--note-stone-400)",
          500: "var(--note-stone-500)",
          600: "var(--note-stone-600)",
          700: "var(--note-stone-700)",
          800: "var(--note-stone-800)",
          900: "var(--note-stone-900)",
        },
      },
    },
  },
  plugins: [
    // Tailwind plugins
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
export default config;
