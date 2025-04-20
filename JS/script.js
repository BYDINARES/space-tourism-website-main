// ================== General functions ==============================

const menu = document.querySelector(".nav-links");
const hamburgerButton = document.querySelector(".button-menu");

let isMenuOpen = false;

hamburgerButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    openMenu();
  } else {
    closeMenu();
  }

  isFixed(hamburgerButton);
});

// Fix the hamburger button when active
function isFixed(button) {
  if (button.classList.contains("active")) {
    button.style.position = "fixed";
    button.style.left = "88%";
    button.style.top = "3%";
    button.style.width = "7%"; // set this explicitly
    button.style.height = "3.4%";
  } else {
    button.style.position = "static";
    button.style.top = "";
    button.style.left = "";
    button.style.width = "";
    button.style.height = "40%";
  }
}

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

  // Remove fixed style
  isFixed(hamburgerButton); // This will reset position
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
