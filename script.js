const hamburger = document.getElementById("hamburger");
const nav_list = document.getElementById("nav-list");

hamburger.addEventListener("click", () => {
  nav_list.classList.toggle("active");
});
