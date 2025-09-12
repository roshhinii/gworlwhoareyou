document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');

  if (gallery) {
    let isDown = false;
    let startX;
    let scrollLeft;
    const images = gallery.getElementsByTagName('img');

    // Hide all images initially
    Array.from(images).forEach(img => {
      img.classList.remove('visible');
    });

    function isElementInViewport(el, container) {
      const rect = el.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const buffer = containerRect.width * 0.2; // 20% of container width as buffer

      return (
        rect.left <= containerRect.right + buffer &&
        rect.right >= containerRect.left - buffer
      );
    }

    function checkVisibleImages() {
      Array.from(images).forEach((img, index) => {
        if (isElementInViewport(img, gallery)) {
          setTimeout(() => {
            img.classList.add('visible');
          }, index * 100); // Staggered delay based on image position
        }
      });
    }

    // Initial visibility check after a short delay
    setTimeout(checkVisibleImages, 300);

    // Mouse/Touch drag handling
    gallery.addEventListener('mousedown', (e) => {
      isDown = true;
      gallery.style.cursor = 'grabbing';
      startX = e.pageX - gallery.offsetLeft;
      scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mouseleave', () => {
      isDown = false;
      gallery.style.cursor = 'grab';
    });

    gallery.addEventListener('mouseup', () => {
      isDown = false;
      gallery.style.cursor = 'grab';
    });

    gallery.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - gallery.offsetLeft;
      const walk = (x - startX) * 2;
      gallery.scrollLeft = scrollLeft - walk;
      requestAnimationFrame(checkVisibleImages);
    });

    // Smooth scroll handling
    let scrollTimer = null;
    gallery.addEventListener('scroll', () => {
      if (scrollTimer !== null) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = setTimeout(() => {
        checkVisibleImages();
      }, 50);
    }, { passive: true });

    // Handle window resize
    window.addEventListener('resize', checkVisibleImages, { passive: true });
  }
});

const loveButton = document.getElementById('loveButton');
if (loveButton) {
  loveButton.addEventListener('click', () => {
    window.location.href = 'aioooo.html';
  });
}
