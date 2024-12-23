const animatedImg = document.getElementById("animated-img");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Adjust this multiplier to make the image move further to the right
  const moveDistance = scrollPosition * 2; // Increase this value for more movement

  // Apply the horizontal translation based on scroll position
  animatedImg.style.transform = `translateX(-50%) translateX(${moveDistance}px)`;
});
