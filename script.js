document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const nav = document.querySelector('nav');
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Menu';
    toggleButton.classList.add('menu-toggle');
    document.querySelector('header').prepend(toggleButton);

    toggleButton.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

    // Search functionality (mock)
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    searchButton.addEventListener('click', function () {
        alert('Searching for: ' + searchInput.value);
    });

    // Shopping cart interaction (mock)
    const cartButton = document.querySelector('.account-info a:last-child');
    
    cartButton.addEventListener('click', function () {
        alert('Your cart is empty.');
    });

    // Responsive adjustments
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('open');
        }
    });

    // Image slider functionality
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 3000); // Change image every 3 seconds
});