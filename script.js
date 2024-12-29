const animatedImg = document.getElementById("animated-img");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Adjust this multiplier to make the image move further to the right
  const moveDistance = scrollPosition * 1; // Increase this value for more movement

  // Apply the horizontal translation based on scroll position
  animatedImg.style.transform = `translateX(-50%) translateX(${moveDistance}px)`;
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

// Select the .service-container
const serviceContainer = document.querySelector(".service-container");

// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Add the visible class
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  },
  {
    threshold: 0.2, // Trigger when 20% of the element is visible
  }
);

// Observe the .service-container
observer.observe(serviceContainer);

// Dropdown button-----------------------------------------------

const openButton = document.querySelector(".icon-open");
const closeButton = document.querySelector(".icon-close");
const dropdown = document.querySelector(".dropdown");
const nav = document.querySelector("nav");
const welcome = document.querySelector(".welcome");

openButton.addEventListener("click", () => {
  dropdown.classList.add("show");
  nav.style.borderBottomLeftRadius = "0";
  nav.style.borderBottomRightRadius = "0";
  welcome.style.height = "83vh";
  openButton.style.display = "none";
  closeButton.style.display = "inline-block";
});

closeButton.addEventListener("click", () => {
  dropdown.classList.remove("show");
  nav.style.borderBottomLeftRadius = "50px";
  nav.style.borderBottomRightRadius = "50px";
  welcome.style.height = "78vh";
  closeButton.style.display = "none";
  openButton.style.display = "inline-block";
});

// Make break line in text on 540px width window-----------------------------------------------

function adjustText() {
  let sentence =
    "Dobrodošli u Auto Servis Hamzić, gde kvalitet i poverenje idu ruku pod ruku. <br /> <br /> Pružamo sveobuhvatne usluge održavanja i popravke kako bi vaš automobil bio pouzdan u svakoj situaciji.";
  let regularSenece =
    "Dobrodošli u Auto Servis Hamzić, gde kvalitet i poverenje idu ruku pod ruku. <br />Pružamo sveobuhvatne usluge održavanja i popravke kako bi vaš automobil bio pouzdan u svakoj situaciji.";

  if (window.innerWidth <= 540) {
    document.querySelector(".sub-title").innerHTML = sentence;
  } else {
    document.querySelector(".sub-title").innerHTML = regularSenece;
  }
}
window.addEventListener("resize", adjustText);
adjustText();
