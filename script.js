const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeBtn = document.querySelector("#themeBtn");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

function reveal() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();
