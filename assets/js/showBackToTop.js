function showBackToTop() {
  const backToTop = document.querySelector(".skip-to-top");
  backToTop.style.display = "";

  if (scrollY > 800) {
    backToTop.style.display = "inline-block";
  }
}

export default showBackToTop;
