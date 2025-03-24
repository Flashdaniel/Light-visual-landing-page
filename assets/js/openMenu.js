import closeMenu from "./closeMenu.js";

const openButton = document.querySelector("[data-open]");

function openMenu() {
  const open = openButton.dataset.open;

  if (!open) return;

  // Add an overlay on the whole page
  const main = document.querySelector("main");
  main.classList.add("overlay");
  document.body.classList.add("scroll");

  // open menu
  const sideBarMenu = document.querySelector(".navbar_list");
  sideBarMenu.classList.add("animate");

  // close menu
  const closeButton = document.querySelector("[data-close]");
  closeButton.addEventListener("click", closeMenu, { once: true });

  const links = document.querySelectorAll(".navbar_link");
  [...links, document.querySelector(".button--mobile-mode")].forEach((link) => {
    link.addEventListener("click", closeMenu, { once: true });
  });

  document
    .querySelector(".overlay")
    .addEventListener("click", closeMenu, { once: true });
}

export { openMenu, openButton };
