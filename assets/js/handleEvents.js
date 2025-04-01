import { openMenu, openButton } from "./openMenu.js";
import showBackToTop from "./showBackToTop.js";

const handleEvents = () => {
  openButton.addEventListener("click", openMenu);
  addEventListener("scroll", showBackToTop);
};

export default handleEvents;
