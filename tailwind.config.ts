import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          50: "#fceff0",
          100: "#6623d1",
          200: "",
          300: "",
          400: "",
          500: "",
          600: "",
          700: "",
          800: "",
          900: "#00070B",
        },
      },
      backgroundImage: {
        "general-pattern": "url('/asset/line.png')",
        "custom-green-gradient": "linear-gradient(to bottom, #7cd437, #2a913c)", 
      },
    },
  },
  plugins: [],
};
export default config;
