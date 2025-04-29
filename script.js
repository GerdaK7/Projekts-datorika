  document.addEventListener('DOMContentLoaded', function() {
    // Define the toggleMenu function
    function toggleMenu(4) {
      const menu = document.getElementById('menu');
      // Check if the menu is visible
      if (menu.style.left === '0px') {
        // Hide the menu
        menu.style.left = '-250px';
      } else {
        // Show the menu
        menu.style.left = '0px';
      }
    }

    // Attach the toggleMenu function to the button
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', toggleMenu);
  });