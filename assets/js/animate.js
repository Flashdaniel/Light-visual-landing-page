function animate() {
  const popin = document.querySelector("[data-pop-in]");
  const slideIn = document.querySelectorAll("[data-slide-in]");
  const slideUp = document.querySelectorAll("[data-slide-up]");

  const slides = [...slideIn, ...slideUp, popin];

  const clientHeight = document.documentElement.clientHeight;

  slides.forEach((slide) => {
    const { top } = slide.getBoundingClientRect();
    if (top < clientHeight) {
      slide.classList.add("slide");
    }
  });
}

export default animate;
