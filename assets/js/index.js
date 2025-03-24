import { openMenu, openButton } from "./openMenu.js";
import showBackToTop from "./showBackToTop.js";

openButton.addEventListener("click", openMenu);
addEventListener("scroll", showBackToTop);
