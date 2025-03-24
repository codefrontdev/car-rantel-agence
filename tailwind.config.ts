/** @format */

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        accent: "#A66D45",
        black: "#000",
        darkGray: "rgb(245 245 245)",
        lightGray: "#D1D1D3",

        dark: {
          primary: "#121214",
          accent: "#B68867",
          white: "#fff",
          lightGray: "#919192",
          MediumGray: "#4F4F51",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
