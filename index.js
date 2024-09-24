AOS.init();
const toggleSwitch = document.getElementById("toggle-switch");
const body = document.body;
const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");

// Initially hide the sun icon for light mode (since the default is light mode)
sunIcon.style.display = "none";

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Switch icons and mode colors
  if (body.classList.contains("dark")) {
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
  } else {
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.querySelector(".typingtext");
    const textArray = ["FrontEnd Developer!"];
    let charIndex = 0;
    let textIndex = 0;
    
    function type() {
      if (charIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Speed of typing
      } else {
        setTimeout(erase, 1000); // Wait before starting to erase
      }
    }

    function erase() {
      if (charIndex > 0) {
        typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Speed of erasing
      } else {
        setTimeout(type, 1000); // Wait before starting to type again
      }
    }

    type(); // Start the typing effect
  });

    // Get all menu items
    const menuItems = document.querySelectorAll('.menu-list .list');

    // Add a click event listener to each menu item
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        // Remove the active-list class from all menu items
        menuItems.forEach(i => i.classList.remove('active-list'));
  
        // Add the active-list class to the clicked menu item
        this.classList.add('active-list');
      });
    });

    function Menufuction() {
        const menu = document.querySelector('.menu-list');
        if (menu.style.display === 'flex') {
          menu.style.display = 'none';
        } else {
          menu.style.display = 'flex';
          menu.style.flexDirection = 'column'; /* Stack the menu items vertically */
          menu.style.gap = '10px';
          menu.style.alignItems = 'center';
        }
      }