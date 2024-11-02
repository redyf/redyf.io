import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oxoBackground: "var(--oxo-background)",
        oxoForeground: "var(--oxo-foreground)",
        oxoBlue: "#81a2be",
        oxoRed: "#cc6666",
        oxoGreen: "#b5bd68",
        oxoYellow: "#f0c674",
        oxoCyan: "#8abeb7",
        oxoMagenta: "#b294bb",
      },
    },
  },
  plugins: [],
};
export default config;
