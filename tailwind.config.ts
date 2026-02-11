import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#2A514C",
          light: "#355F58",
          rose: "#B67452",
          sand: "#CA8661",
        },
      },
    },
  },
  plugins: [],
};

export default config;
