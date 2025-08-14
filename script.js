// Hamburger-Menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// Hover-Effekt für Social-Icons
document.querySelectorAll('.social-icons img').forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.getAttribute('data-hover');

  img.addEventListener('mouseenter', () => {
    img.src = hoverSrc;
  });

  img.addEventListener('mouseleave', () => {
    img.src = originalSrc;
  });
});


