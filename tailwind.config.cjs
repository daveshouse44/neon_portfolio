/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Albert Sans Variable",
          "Albert Sans",
          ...defaultTheme.fontFamily.sans,
        ],
        neon: ["Tilt Neon", "sans-serif"],
      },
      colors: {
        brand: {
          base: "hsl(var(--color-brand) / <alpha-value>)",
          100: "hsl(var(--color-brand-100) / <alpha-value>)",
          200: "hsl(var(--color-brand-200) / <alpha-value>)",
          400: "hsl(var(--color-brand-400) / <alpha-value>)",
          500: "hsl(var(--color-brand-500) / <alpha-value>)",
          600: "hsl(var(--color-brand-600) / <alpha-value>)",
          800: "hsl(var(--color-brand-800) / <alpha-value>)",
          900: "hsl(var(--color-brand-900) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
