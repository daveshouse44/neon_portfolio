document.addEventListener("astro:after-swap", () => {
  const navLinks = document.querySelectorAll("[data-nav-link]");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === window.location.pathname) {
      link.setAttribute("aria-current", "page");
    }
  });
});

document.addEventListener("astro:page-load", () => {
  const navBarMenu = document.getElementById("navbar-default") as HTMLElement;
  const navToggle = document.querySelector(
    "[data-collapse-toggle]",
  ) as HTMLElement;

  navToggle.addEventListener("click", () => {
    if (navBarMenu.classList.contains("max-h-0")) {
      navBarMenu.classList.remove("max-h-0", "opacity-0");
      navBarMenu.classList.add("max-h-screen", "opacity-100");
    } else {
      navBarMenu.classList.remove("max-h-screen", "opacity-100");
      navBarMenu.classList.add("max-h-0", "opacity-0");
    }
  });
});
