const gallery = document.getElementById('gallery');

if (gallery) {
  let isDown = false;
  let startX;
  let scrollLeft;
  const images = gallery.getElementsByTagName('img');

  // Initialize images as hidden
  Array.from(images).forEach(img => {
    img.classList.remove('visible');
  });

  // Function to check which images are in view
  function checkVisibleImages() {
    const galleryRect = gallery.getBoundingClientRect();
    Array.from(images).forEach(img => {
      const imgRect = img.getBoundingClientRect();
      if (imgRect.left < galleryRect.right && imgRect.right > galleryRect.left) {
        img.classList.add('visible');
      }
    });
  }

  // Initial check for visible images
  setTimeout(checkVisibleImages, 100);

  gallery.addEventListener('mousedown', (e) => {
    isDown = true;
    gallery.classList.add('active');
    gallery.style.cursor = 'grabbing';
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
  });

  gallery.addEventListener('mouseleave', () => {
    isDown = false;
    gallery.classList.remove('active');
    gallery.style.cursor = 'grab';
  });

  gallery.addEventListener('mouseup', () => {
    isDown = false;
    gallery.classList.remove('active');
    gallery.style.cursor = 'grab';
  });

  gallery.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed multiplier
    gallery.scrollLeft = scrollLeft - walk;
    checkVisibleImages();
  }, { passive: false });

  // Add scroll event listener to reveal images during normal scrolling
  let scrollTimeout;
  gallery.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkVisibleImages, 50);
  }, { passive: true });
}

const loveButton = document.getElementById('loveButton');
if (loveButton) {
  loveButton.addEventListener('click', () => {
    window.location.href = 'aioooo.html';
  });
}
