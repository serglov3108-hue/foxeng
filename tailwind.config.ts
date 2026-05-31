import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6B00",
          foreground: "#FFFFFF",
          hover: "#E66000",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FF914D",
          foreground: "#000000",
        },
        background: "#F8F9FA",
        card: "#FFFFFF",
        border: "#E5E7EB",
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
