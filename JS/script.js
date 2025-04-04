let menu = document.querySelector(".nav-links");
function toggleMenu() {
  menu.classList.toggle("active");

  // If menu is now active, add outside click listener
  if (menu.classList.contains("active")) {
    document.addEventListener("click", closeMenuOnClickOutside);
  }
}

// Function to close menu if clicked outside
function closeMenuOnClickOutside(event) {
  const button = document.querySelector(".button-menu");

  // Check if the click is NOT inside the menu or the hamburger button
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove("active");
    /* menu.classList.add("not-active"); */ //============================ I nedd to put a counter here!!!!!
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

// Optional: mobile touch support (in case of touch events)
document.addEventListener("touchstart", closeMenuOnClickOutside);
