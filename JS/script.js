//================== General functions ==============================

const menu = document.querySelector(".nav-links");
const hamburgerButton = document.querySelector(".button-menu");

function toggleMenu() {
  menu.classList.toggle("active");

  hamburgerButton.classList.toggle("active");
  /* hamburgerButton.style.position = "relative" */

  // If menu is now active, add outside click listener
  if (menu.classList.contains("active")) {
    document.addEventListener("click", closeMenuOnClickOutside);
  }
}

//Adds the animation of the removal of the navbar
function removeNavbar() {
  hamburgerButton.classList.remove("active");
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
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

// Optional: mobile touch support (in case of touch events)
document.addEventListener("touchstart", closeMenuOnClickOutside);

// Remove the navbar if the X button was clicked
const X = document.querySelector(".X");
X.addEventListener("click", () => {
  removeNavbar();
});
