//================== General functions ==============================

const menu = document.querySelector(".nav-links");
const hamburgerButton = document.querySelector(".button-menu");

//The hamburger button center
let timesClicked = 0;
hamburgerButton.addEventListener("click", () => {
  timesClicked++;
  menu.classList.add("active");
  hamburgerButton.classList.add("active");

  if (timesClicked >= 2) {
    hamburgerButton.classList.remove("active");
    timesClicked = 0;
    removeNavbar();
  }

  isFixed(hamburgerButton);
});

// The one which makes the hamburger button become fixed
function isFixed(button) {
  if (button.classList.contains("active")) {
    const rect = button.getBoundingClientRect(); // get current position

    button.style.position = "fixed";
    button.style.top = rect.top + "px";
    button.style.left = rect.left + "px";
    button.style.width = rect.width + "px";
    button.style.height = rect.height + "px";
  } else {
    button.style.position = "static";
    button.style.top = "";
    button.style.left = "";
    button.style.width = "";
    button.style.height = "";
  }
}

// The general function
function toggleMenu() {
  menu.classList.add("active");

  // If menu is now active, add outside click listener
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
  if (!menu.contains(event.target)) {
    removeNavbar();
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

// Optional: mobile touch support (in case of touch events)
document.addEventListener("touchstart", closeMenuOnClickOutside);
