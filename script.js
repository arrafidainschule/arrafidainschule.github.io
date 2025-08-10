// Hamburger Menü toggle
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Lightbox für Bildergalerie
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    if (!gallery) return; // Falls keine Galerie auf der Seite

    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement('img');
    lightbox.appendChild(lightboxImage);

    gallery.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImage.src = img.src;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
});
