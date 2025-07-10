// JavaScript for toggling the navigation menu

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navigation = document.querySelector('.navigation');

    hamburgerMenu.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = targetId === 'accueil' ? document.body : document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetId === 'accueil' ? 0 : targetElement.offsetTop - 110; // Adjust for header height
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 800;
                let startTime = null;

                const animation = currentTime => {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = ease(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                };

                const ease = (t, b, c, d) => {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                };

                requestAnimationFrame(animation);
            }
        });
    });

    // Add smooth scrolling for "Découvrez Nos Cours" button
    const discoverButton = document.querySelector('.discover-courses');
    if (discoverButton) {
        discoverButton.addEventListener('click', event => {
            event.preventDefault();
            const targetElement = document.getElementById('cours');

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 110; // Adjust for header height
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 800;
                let startTime = null;

                const animation = currentTime => {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = ease(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                };

                const ease = (t, b, c, d) => {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                };

                requestAnimationFrame(animation);
            }
        });
    }
});
