// ================== General functions ==============================

const menu = document.querySelector(".nav-links");
const navBar = document.querySelector(".nav-bar");
const hamburgerButton = document.querySelector(".button-menu");
const navLinks = document.querySelector(".nav-links");

let isMenuOpen = false;

hamburgerButton.addEventListener("click", () => {
  isMenuOpen ? closeMenu() : openMenu();
  isMenuOpen = !isMenuOpen;

  if (!isMenuOpen) {
    navBar.append(hamburgerButton);
    hamburgerButton.classList.remove("hamburger-fixed");
  } else {
    hamburgerButton.classList.add("hamburger-fixed");
  }
});

function openMenu() {
  menu.classList.add("active");
  hamburgerButton.classList.add("active");
  document.addEventListener("click", closeMenuOnClickOutside);
  document.addEventListener("touchstart", closeMenuOnClickOutside);
}

function closeMenu() {
  hamburgerButton.classList.remove("active");
  hamburgerButton.classList.remove("hamburger-fixed");
  menu.classList.remove("active");
  menu.classList.add("not-active");

  // Remove fixed style
  /* isFixed(hamburgerButton); */
  isMenuOpen = false;

  setTimeout(() => {
    menu.classList.remove("not-active");
  }, 200);

  document.removeEventListener("click", closeMenuOnClickOutside);
  document.removeEventListener("touchstart", closeMenuOnClickOutside);
}

// Function to close menu if clicked outside
function closeMenuOnClickOutside(event) {
  if (!menu.contains(event.target) && !hamburgerButton.contains(event.target)) {
    closeMenu();
  }
}
