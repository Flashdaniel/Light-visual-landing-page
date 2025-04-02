import animate from "./animate.js";
import { openMenu, openButton } from "./openMenu.js";
import showBackToTop from "./showBackToTop.js";

const handleEvents = () => {
  window.addEventListener("load", animate);
  window.addEventListener("scroll", animate);
  openButton.addEventListener("click", openMenu);
  addEventListener("scroll", showBackToTop);
};

export default handleEvents;
