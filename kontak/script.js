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

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    menuToggle.addEventListener('click', function() {
        // Toggle (menambah/menghapus) kelas 'open' pada menu
        mainNav.classList.toggle('open');
        
        // Mengubah status accessibility (opsional, tapi disarankan)
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Opsional: Mengubah Hamburger menjadi 'X' (jika Anda ingin melakukannya)
        // menuToggle.classList.toggle('is-active');
    });
});