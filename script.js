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

// Neueste Hausaufgabe laden und anzeigen
fetch('pdfs/latest.json')
  .then(response => response.json())
  .then(data => {
    const latestDiv = document.getElementById('latest-homework');
    if (!latestDiv) return; // Falls kein Platzhalter existiert

    if (data && data.url && data.label) {
      latestDiv.innerHTML = `<p><a href="${data.url}" target="_blank">${data.label}</a></p>`;
    } else {
      latestDiv.innerHTML = "<p>لا يوجد واجب بيتي حالياً.</p>";
    }
  })
  .catch(err => {
    const latestDiv = document.getElementById('latest-homework');
    if (latestDiv) {
      latestDiv.innerHTML = "<p>حدث خطأ أثناء تحميل الواجب.</p>";
    }
    console.error(err);
  });
