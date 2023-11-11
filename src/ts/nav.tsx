const navLinks = document.querySelectorAll("[data-nav-link]");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === window.location.pathname) {
    link.setAttribute("aria-current", "page");
  }
});

const navBarMenu = document.getElementById("navbar-default") as HTMLElement;

const navToggle = document.querySelector(
  "[data-collapse-toggle]",
) as HTMLElement;

navToggle.addEventListener("click", () => {
  navBarMenu.classList.toggle("hidden");
});
