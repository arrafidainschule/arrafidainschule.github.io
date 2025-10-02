// Header
document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    fetch("structure/header.html")
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;
      })
      .catch(err => console.error("Header konnte nicht geladen werden:", err));
  }
});

// footer
document.addEventListener("DOMContentLoaded", () => {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch("structure/footer.html")
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;

        // Hover-Effekt erst nach dem Einfügen aktivieren
        footerPlaceholder.querySelectorAll('.social-icons img').forEach(img => {
          const originalSrc = img.src;
          const hoverSrc = img.getAttribute('data-hover');

          if (hoverSrc) {
            img.addEventListener('mouseenter', () => {
              img.src = hoverSrc;
            });

            img.addEventListener('mouseleave', () => {
              img.src = originalSrc;
            });
          }
        });
      })
      .catch(err => console.error("footer konnte nicht geladen werden:", err));
  }
});


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

// Neuste Hausaufgabe
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("latest-homework");

  fetch("pdfs/HA/latest_homework.json")
    .then(response => response.json())
    .then(data => {
      if (data.href) {
        container.innerHTML = `<p><a href="${data.href}" target="_blank">${data.label}</a></p>`;
      } else {
        container.innerHTML = `<p>${data.label}</p>`;
      }
    })
    .catch(err => {
      console.error("Fehler beim Laden der neuesten Hausaufgabe:", err);
      container.innerHTML = "<p>حدث خطأ أثناء تحميل الواجب البيتي.</p>";
    });
});
