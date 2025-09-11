// Drag-to-scroll gallery functionality
const gallery = document.getElementById('gallery');
let isDown = false;
let startX;
let scrollLeft;

gallery.addEventListener('mousedown', (e) => {
  isDown = true;
  gallery.classList.add('active');
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mouseleave', () => {
  isDown = false;
  gallery.classList.remove('active');
});

gallery.addEventListener('mouseup', () => {
  isDown = false;
  gallery.classList.remove('active');
});

gallery.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed multiplier
  gallery.scrollLeft = scrollLeft - walk;
});

// Button click redirects to the next page
const loveButton = document.getElementById('loveButton');
if (loveButton) {
  loveButton.addEventListener('click', () => {
    window.location.href = 'next.html';
  });
}


