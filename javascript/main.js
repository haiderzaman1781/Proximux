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


window.addEventListener("load", () => {

  const navbar = document.getElementById("main-nav");

  // Add the initial transition styles
  navbar.style.transition = "all 0.3s ease"; // Transition for width, background-color, and backdrop-filter

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 650) {
      navbar.style.width = "100%";
      navbar.style.background = "linear-gradient(to bottom, #6b46c1, #3b82f6);";
      navbar.style.backdropFilter = "blur(10px)";
    } else {
      navbar.style.width = "78%";
      navbar.style.background = "transparent";
      navbar.style.backdropFilter = "none";
    }
  });

});

