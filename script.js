let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); // Corrected selector

window.onscroll = () => {
  let top = window.scrollY;
  console.log('Scroll position:', top); // Debug: Check scroll position

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      console.log('Active section:', id); // Debug: Check which section is active
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(id)) {
          link.classList.add('active');
        }
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
