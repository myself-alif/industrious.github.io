const navButton = document.querySelector(".nav-button");
const nav = document.querySelector("ul");
navButton.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  navButton.classList.toggle("btn-cross");
});
