//================== General functions ==============================

const menu = document.querySelector(".nav-links");
const hamburgerButton = document.querySelector(".button-menu");

// The one which makes the hamburger button become fixed
function isFixed(button) {
  if (button.classList.contains("active")) {
    button.style.position = "fixed";
  } else {
    button.style.position = "static";
  }
}

// The general function
function toggleMenu() {
  menu.classList.toggle("active");
  hamburgerButton.classList.toggle("active");

  isFixed(hamburgerButton);

  // If menu is now active, add outside click listener
  if (menu.classList.contains("active")) {
    document.addEventListener("click", closeMenuOnClickOutside);
  } else if (
    !menu.classList.contains("active") ||
    !hamburgerButton.classList.contains("active")
  ) {
    removeNavbar();
  }
}

//Adds the animation of the removal of the navbar
function removeNavbar() {
  menu.classList.remove("active");
  menu.classList.add("not-active");
  setTimeout(() => {
    menu.classList.remove("not-active");
  }, 200);
}

// Function to close menu if clicked outside
function closeMenuOnClickOutside(event) {
  // Check if the click is NOT inside the menu or the hamburger button
  if (!menu.contains(event.target) && !hamburgerButton.contains(event.target)) {
    removeNavbar();
    hamburgerButton.classList.remove("active");
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

// Optional: mobile touch support (in case of touch events)
document.addEventListener("touchstart", closeMenuOnClickOutside);
