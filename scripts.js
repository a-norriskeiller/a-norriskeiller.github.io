document.addEventListener('DOMContentLoaded', function () {
    const photos = [
        'images/pondweed1.jpg',
        'images/pondweed2.jpg',
        'images/clouds.jpg',
        'images/shadow.jpg'
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

    const toggleSectionLinks = document.querySelectorAll('.toggle-section');
    toggleSectionLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSection = document.getElementById(this.dataset.target);
            const photoContainer = document.getElementById('photo-container');
            photoContainer.style.display = 'none';
            document.querySelectorAll('.research-section').forEach(section => section.style.display = 'none');
            targetSection.style.display = 'block';
        });
    });

    // Reveal quote
    const quoteLink = document.querySelector('.reveal-quote');
    quoteLink.addEventListener('click', function (event) {
        event.preventDefault();
        const quoteDisplay = document.getElementById('quote-display');
        quoteDisplay.style.display = 'block';
        const rightColumn = document.querySelector('.right-column');
        rightColumn.classList.add('blacked-out');
        setTimeout(() => {
            quoteDisplay.style.display = 'none';
            rightColumn.classList.remove('blacked-out');
        }, 5000);
    });

    // Scroll to section with fade-in effect
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSection = document.getElementById(this.dataset.target);
            const photoContainer = document.getElementById('photo-container');
            photoContainer.style.display = 'none';
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
                section.classList.remove('fade-in');
            });
            targetSection.style.display = 'block';
            targetSection.classList.add('fade-in');
        });
    });
});
