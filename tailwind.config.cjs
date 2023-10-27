/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
        tilt: ["Tilt Neon", "sans-serif"],
      },
      colors: {
        theme: "hsl(var(--color-theme) / <alpha-value>)",
        neon: "hsl(var(--color-neon) / <alpha-value>)",
        background: "hsl(var(--color-background) / <alpha-value>)",
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
      },
      textShadow: {
        glow: "0 0 10px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color), 0 0 30px var(--tw-shadow-color), 0 0 40px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
