// Function to toggle the visibility of the dropdown menu
function toggleMenu() {
  const navbar = document.querySelector('#navbar');
  navbar.classList.toggle('visible');
}

// Event listener for the menu icon
document.querySelector('#menu-icon').addEventListener('click', toggleMenu);

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('#navbar');

  if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
    navbar.classList.remove('visible');
  }
});
