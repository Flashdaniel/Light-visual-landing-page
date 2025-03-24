function closeMenu({ target }) {
  // remove an overlay on the whole page
  const main = document.querySelector("main");
  main.classList.remove("overlay");
  document.body.classList.remove("scroll");

  // close menu
  const sideBarMenu = document.querySelector(".navbar_list");
  sideBarMenu.classList.remove("animate");
}

export default closeMenu;
