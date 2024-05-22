let currentSlide = 0;

function showNextSlide() {
  const slides = document.querySelectorAll(".testimonial-slide");
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".testimonial-slide");
  slides[currentSlide].classList.add("active");
  setInterval(showNextSlide, 6000);
});
