// JavaScript for toggling the navigation menu

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navigation = document.querySelector('.navigation');

    hamburgerMenu.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });
});
