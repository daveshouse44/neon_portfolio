// Neon color selectors
const neonContainer = document.querySelector(
  "[data-neon-container]",
) as HTMLElement;

const neonToggle = document.querySelector("[data-neon-toggle]") as HTMLElement;

const neonClose = document.querySelector("[data-neon-close]") as HTMLElement;

// Neon color listeners
neonToggle.addEventListener("click", () => {
  neonContainer.classList.toggle("invisible");
});

neonClose.addEventListener("click", () => {
  neonContainer.classList.toggle("invisible");
});

document.addEventListener("click", (e) => {
  if (
    !neonContainer.contains(e.target as Node) &&
    !neonToggle.contains(e.target as Node)
  ) {
    neonContainer.classList.add("invisible");
  }
});

// Neon color functions
const getColor = () => {
  if (typeof localStorage !== "undefined") {
    const color: string = localStorage.getItem("color") || "default";
    return color;
  } else {
    return "default";
  }
};

const setNeonColor = (color: string) => {
  document.documentElement.setAttribute("data-neon", color);
  const neonRadio = document.getElementById(`btn-${color}`) as HTMLInputElement;
  neonRadio.checked = true;

  const favicon = document.getElementById("favicon") as HTMLLinkElement;
  if (favicon) {
    favicon.href = `/favicon_${color}.svg`;
  }
};

window.addEventListener("DOMContentLoaded", () => setNeonColor(getColor()));
document.addEventListener("astro:after-swap", () => setNeonColor(getColor()));

const neonColors = document.querySelectorAll("[type='radio']");
neonColors.forEach((color) => {
  color.addEventListener("change", (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;
    localStorage.setItem(name, value);
    setNeonColor(value);
  });
});
