document.addEventListener('DOMContentLoaded', function () {
    const photos = [
        'images/clouds.jpg',
        'images/shadow.jpg',
        'images/pondweed1.jpg',
        'images/pondweed2.jpg'
        // Add more photo paths as needed
    ];

   const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    const randomPhotoElement = document.getElementById('random-photo');
    randomPhotoElement.src = randomPhoto;
    randomPhotoElement.alt = 'Random Photo';

    const abstractLinks = document.querySelectorAll('.abstract-link');
    
    abstractLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const abstractContent = this.parentElement.nextElementSibling;
            if (abstractContent.style.display === 'none' || abstractContent.style.display === '') {
                abstractContent.style.display = 'block';
            } else {
                abstractContent.style.display = 'none';
            }
        });
    });

    // Toggle research sections
    const toggleSectionLinks = document.querySelectorAll('.toggle-section');
    toggleSectionLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            const isVisible = targetElement.style.display === 'block';
            document.querySelectorAll('.research-section').forEach(section => {
                section.style.display = 'none';
            });
            if (!isVisible) {
                targetElement.style.display = 'block';
            }
        });
    });

    // Smooth scrolling
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Quote reveal
    const revealQuoteLink = document.querySelector('.reveal-quote');
    const quoteContent = document.getElementById('quote');
    const quoteDisplay = document.getElementById('quote-display');

    revealQuoteLink.addEventListener('click', function (event) {
        event.preventDefault();
        quoteDisplay.querySelector('p').textContent = quoteContent.textContent;
        document.querySelector('.right-column').classList.add('blacked-out');
        quoteDisplay.style.display = 'block';
    });

    quoteDisplay.addEventListener('click', function () {
        this.style.display = 'none';
        document.querySelector('.right-column').classList.remove('blacked-out');
    });
});
