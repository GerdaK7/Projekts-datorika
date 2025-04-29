function toggleMenu() {
  const menu = document.getElementById('menu'); 
  const currentLeft = menu.style.left;

  if (currentLeft === '0px') {
    menu.style.left = '-250px'; // Hide the menu
  } else {
    menu.style.left = '0px'; // Show the menu
  }
}

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleMenu); // No parentheses here
  