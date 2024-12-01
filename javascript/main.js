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
  const navLinks = document.getElementById("nav-Links");
  const navLogo = document.getElementById("nav-logo");

  // Add the initial transition styles
  navbar.style.transition = "all 0.3s ease";
  navLinks.style.transition = "all .5s ease";

  // Function to check if the screen size is large
  const isLargeScreen = () => window.innerWidth >= 1024;

  // Function to handle scroll animation logic
  const handleScrollAnimation = () => {
    const scrollY = window.scrollY;

    if (scrollY > 650) {
      navbar.style.width = "100%";
      navbar.style.background = "linear-gradient(to right, #6b46c1, #3b82f6)";
      navbar.style.backdropFilter = "blur(10px)";
      navLinks.style.backgroundColor = "transparent";
      navLogo.style.backgroundColor = "transparent";
      navbar.style.boxShadow = "0px 10px 10px -5px rgba(255, 255, 255, 0.5)";
    } else {
      navbar.style.width = "78%";
      navbar.style.background = "transparent";
      navbar.style.backdropFilter = "none";
      navLinks.style.backgroundColor = "gray";
      navLogo.style.backgroundColor = "black";
      navbar.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)";

    }
  };

  if (isLargeScreen()) {
    window.addEventListener("scroll", handleScrollAnimation);
  }
  if (!isLargeScreen()) {
    navbar.style.background = "linear-gradient(to left, #6b46c1, #3b82f6)"
  }

  window.addEventListener("resize", () => {
    if (isLargeScreen()) {
      window.addEventListener("scroll", handleScrollAnimation);
    } else {
      window.removeEventListener("scroll", handleScrollAnimation);
    }
  });
});

