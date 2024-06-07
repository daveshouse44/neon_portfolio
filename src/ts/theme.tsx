// Light and dark theme functions
const themeToggles = document.querySelectorAll("[data-theme-toggle]");
const textSuggestions = document.querySelectorAll("[data-text-suggestion]");

const getTheme = () => {
  if (typeof localStorage !== "undefined") {
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || theme === "light") {
      return theme;
    }
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const setTheme = (theme: string) =>
  document.documentElement.setAttribute("data-theme", theme);

const toggleSuggestion = () => {
  const theme = getTheme();
  textSuggestions.forEach((suggestion) => {
    if (theme === "dark") {
      suggestion.classList.add("hidden");
    } else {
      suggestion.classList.remove("hidden");
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  setTheme(getTheme());
  toggleSuggestion();
});
document.addEventListener("astro:after-swap", () => {
  setTheme(getTheme());
  toggleSuggestion();
});

themeToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const nextTheme = getTheme() === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
    toggleSuggestion();
  });
});
