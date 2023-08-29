import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mont: ["var(--font-mont)"],
        opensans: ["var(--font-open)"],
      },
      colors: {
        blue: {
          dark: "#0C244B",
          navy: "#092E6B",
        },
        pink: {
          dark: "#FF63A4",
          light: "#FDACCE",
        },
      },
    },
  },
  plugins: [],
};
export default config;
