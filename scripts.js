//Animated logo to fade in upon scrolling
window.addEventListener('DOMContentLoaded', (event) => {
    // Fade in section on page load
    document.getElementById('Logo-banner').classList.add('fade-in');
});

window.addEventListener('scroll', () => {
    // Get the position of the section
    const sectionPosition = document.getElementById('Logo-banner').getBoundingClientRect().top;
    // Check if section is in view
    if (sectionPosition < window.innerHeight * 0.75) {
        // Fade in logo when section is in view
        document.querySelector('.animated-logo').classList.add('fade-in');
    }
});
//Image banner
window.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.image-banner');
    const images = banner.querySelectorAll('img');

    images.forEach(image => {
        const randomX = Math.random() * (banner.offsetWidth - image.offsetWidth);
        const randomY = Math.random() * (banner.offsetHeight - image.offsetHeight);

        image.style.left = `${randomX}px`;
        image.style.top = `${randomY}px`;
    });
});
