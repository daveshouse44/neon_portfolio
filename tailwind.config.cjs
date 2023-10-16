/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        neon: ["Tilt Neon", "sans-serif"],
      },
      colors: {
        brand: "hsl(var(--color-brand) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
