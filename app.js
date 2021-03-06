// Setup Date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// Setup Nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// Show Nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

// Close Nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
