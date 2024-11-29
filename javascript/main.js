const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


const navLinks = document.querySelectorAll(".nav-links");

navLinks.forEach(link => {
  // Add event listener for mouse enter
  link.addEventListener("mouseenter", () => {
    link.classList.add("active");
  });

  // Add event listener for mouse leave
  link.addEventListener("mouseleave", () => {
    link.classList.remove("active");
  });
});
