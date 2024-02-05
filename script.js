document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a'); // Select all links within the menu



    hamburgerMenu.addEventListener('click', () => {
        menu.classList.toggle('open');
        hamburgerMenu.classList.toggle('open'); // Toggle the 'open' class
    });

    // Close the menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            hamburgerMenu.classList.remove('open'); // Remove the 'open' class
        });
    });
});