const img = document.getElementById('interactive-img');

img.addEventListener('mouseover', () => {
  img.style.transform = 'scale(1.2)'; // Zoom in
});

img.addEventListener('mouseout', () => {
  img.style.transform = 'scale(1)';   // Zoom out
});