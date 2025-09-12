document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');

  if (gallery) {
    let isDown = false;
    let startX;
    let scrollLeft;
    const images = gallery.getElementsByTagName('img');

    // Hide all images initially
    function hideAllImages() {
      Array.from(images).forEach(img => {
        img.classList.remove('visible');
      });
    }

    hideAllImages();

    function showImagesInView() {
      const galleryRect = gallery.getBoundingClientRect();
      Array.from(images).forEach(img => {
        const imgRect = img.getBoundingClientRect();
        if (imgRect.left < galleryRect.right && imgRect.right > galleryRect.left) {
          img.classList.add('visible');
        } else {
          img.classList.remove('visible');
        }
      });
    }

    // Touch Events
    gallery.addEventListener('touchstart', (e) => {
      isDown = true;
      gallery.classList.add('dragging');
      startX = e.touches[0].pageX - gallery.offsetLeft;
      scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('touchend', () => {
      isDown = false;
      gallery.classList.remove('dragging');
      hideAllImages();
    });

    gallery.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - gallery.offsetLeft;
      const walk = (x - startX) * 2;
      gallery.scrollLeft = scrollLeft - walk;
      showImagesInView();
    });

    // Mouse Events
    gallery.addEventListener('mousedown', (e) => {
      isDown = true;
      gallery.classList.add('dragging');
      gallery.style.cursor = 'grabbing';
      startX = e.pageX - gallery.offsetLeft;
      scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mouseleave', () => {
      if (isDown) {
        isDown = false;
        gallery.classList.remove('dragging');
        gallery.style.cursor = 'grab';
        hideAllImages();
      }
    });

    gallery.addEventListener('mouseup', () => {
      isDown = false;
      gallery.classList.remove('dragging');
      gallery.style.cursor = 'grab';
      hideAllImages();
    });

    gallery.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - gallery.offsetLeft;
      const walk = (x - startX) * 2;
      gallery.scrollLeft = scrollLeft - walk;
      showImagesInView();
    });
  }
});

const loveButton = document.getElementById('loveButton');
if (loveButton) {
  loveButton.addEventListener('click', () => {
    window.location.href = 'aioooo.html';
  });
}
