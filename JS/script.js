const menu = document.querySelector(".nav-links");
const navBar = document.querySelector(".nav-bar");
const hamburgerButton = document.querySelector(".button-menu");
const navLinks = document.querySelector(".nav-links");

let isMenuOpen = false;

hamburgerButton.addEventListener("click", () => {
  if (!isMenuOpen) {
    openMenu();
    navLinks.prepend(hamburgerButton);
    hamburgerButton.classList.add("hamburger-fixed");
    hamburgerButton.classList.add("active");
  } else {
    closeMenu();
    navBar.append(hamburgerButton);
    hamburgerButton.classList.remove("hamburger-fixed");
    hamburgerButton.classList.remove("active");
  }

  isMenuOpen = !isMenuOpen;
});

function openMenu() {
  menu.classList.add("active");
  hamburgerButton.classList.add("active");
  document.addEventListener("click", closeMenuOnClickOutside);
  document.addEventListener("touchstart", closeMenuOnClickOutside);
}

function closeMenu() {
  hamburgerButton.classList.remove("active");
  menu.classList.remove("active");
  menu.classList.add("not-active");

  setTimeout(() => {
    menu.classList.remove("not-active");
  }, 200);

  document.removeEventListener("click", closeMenuOnClickOutside);
  document.removeEventListener("touchstart", closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(event) {
  if (!menu.contains(event.target) && !hamburgerButton.contains(event.target)) {
    closeMenu();
    navBar.append(hamburgerButton);
    hamburgerButton.classList.remove("hamburger-fixed");
    hamburgerButton.classList.remove("active");
    isMenuOpen = false;
  }
}
