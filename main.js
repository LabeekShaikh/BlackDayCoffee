let lastScrollTop = 0; // Keep track of the last scroll position
const searchBox = document.querySelector('.search-box');

// Search icon click event
document.querySelector('.search-icon').onclick = () => {
    searchBox.classList.toggle('active');
};

// Menu icon click event
document.querySelector('#menu-icon').onclick = () => {
    searchBox.classList.remove('active');
};

// Scroll event listener
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        searchBox.classList.add('hidden'); // Apply lighter effect
        searchBox.style.top = '120%'; // Move it out of view
    } else {
        // Scroll up
        searchBox.classList.remove('hidden'); // Remove lighter effect
        searchBox.style.top = '100%'; // Bring it back
    }
    lastScrollTop = currentScroll; // Update last scroll position
});
