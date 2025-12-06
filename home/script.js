// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketikan hamburger menu di klik
document.querySelector("#Hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Diluar side bar
const Hamburger = document.querySelector("#Hamburger-menu");

document.addEventListener("click", function (e) {
  if (!Hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});