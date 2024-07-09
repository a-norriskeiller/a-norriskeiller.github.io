document.addEventListener('DOMContentLoaded', function () {
    const photos = [
        'images/clouds.jpg'
        'images/pondweed1.jpg',
        'images/pondweed2.jpg',
        'images/shadow.jpg',
        // Add more photo paths as needed
    ];

    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    document.getElementById('random-photo').src = randomPhoto;

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
                document.getElementById('photo-container').style.display = 'none';
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Quote reveal
    const revealQuoteLink = document.querySelector('.reveal-quote');
    const quoteContent = document.getElementById('quote-content');
    
    revealQuoteLink.addEventListener('click', function (event) {
        event.preventDefault();
        quoteContent.classList.toggle('visible');
    });
});
