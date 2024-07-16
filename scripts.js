document.addEventListener('DOMContentLoaded', function () {
    const photos = [
        'images/clouds.jpg',
        'images/shadow.jpg'
        // Add more photo paths as needed
    ];

   document.addEventListener('DOMContentLoaded', function () {
    const photos = [
        'images/photo1.jpg',
        'images/photo2.jpg',
        'images/photo3.jpg',
        'images/photo4.jpg',
        'images/photo5.jpg'
    ];

    function getRandomPhoto() {
        const randomIndex = Math.floor(Math.random() * photos.length);
        return photos[randomIndex];
    }

    function showRandomPhoto() {
        const randomPhoto = getRandomPhoto();
        const randomPhotoElement = document.getElementById('random-photo');
        randomPhotoElement.src = randomPhoto;
        randomPhotoElement.style.display = 'block';
    }

    function hideRandomPhoto() {
        const randomPhotoElement = document.getElementById('random-photo');
        randomPhotoElement.style.display = 'none';
    }

    function hideQuote() {
        const quoteDisplay = document.getElementById('quote-display');
        quoteDisplay.style.display = 'none';
        const rightColumn = document.querySelector('.right-column');
        rightColumn.classList.remove('blacked-out');
    }

    function showSection(sectionId) {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    document.getElementById('home-link').addEventListener('click', function () {
        showRandomPhoto();
        showSection('home');
        hideQuote();
    });

    const abstractLinks = document.querySelectorAll('.abstract-link');
    abstractLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const abstractContent = this.parentElement.nextElementSibling;
            if (abstractContent.style.display === 'block') {
                abstractContent.style.display = 'none';
            } else {
                document.querySelectorAll('.abstract-content').forEach(content => content.style.display = 'none');
                abstractContent.style.display = 'block';
            }
        });
    });

    const toggleSectionLinks = document.querySelectorAll('.toggle-section');
    toggleSectionLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSection = document.getElementById(this.dataset.target);
            document.querySelectorAll('.research-section').forEach(section => section.style.display = 'none');
            targetSection.style.display = 'block';
            hideRandomPhoto();
            hideQuote();
        });
    });

    const quoteLink = document.querySelector('.reveal-quote');
    quoteLink.addEventListener('click', function (event) {
        event.preventDefault();
        const quoteDisplay = document.getElementById('quote-display');
        quoteDisplay.style.display = 'block';
        quoteDisplay.classList.add('fade-in');
        const rightColumn = document.querySelector('.right-column');
        rightColumn.classList.add('blacked-out');
        hideRandomPhoto();
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSection = document.getElementById(this.dataset.target);
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
                section.classList.remove('fade-in');
            });
            targetSection.style.display = 'block';
            targetSection.classList.add('fade-in');

            hideRandomPhoto();
            hideQuote();
        });
    });

    document.getElementById('cv-link').addEventListener('click', function () {
        showRandomPhoto();
        hideQuote();
    });

    showRandomPhoto();
});
