document.addEventListener('DOMContentLoaded', function () {
    const photos = [
        //'images/pondweed1.jpg',
        //'images/pondweed2.jpg',
        'images/clouds.jpg',
        'images/shadow.jpg'
        // Add more photo paths as needed
    ];

    function getRandomPhoto() {
        const randomIndex = Math.floor(Math.random() * photos.length);
        return photos[randomIndex];
    }

    function showRandomPhoto() {
        const randomPhoto = getRandomPhoto();
        const randomPhotoElement = document.getElementById('random-photo');
        randomPhotoElement.src = randomPhoto;
        randomPhotoElement.style.display = 'block'; // Ensure the photo is displayed
    }

    // Show random photo on initial load and when the home link is clicked
    document.getElementById('home-link').addEventListener('click', function () {
        showRandomPhoto();
        showSection('home');
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

            // Fade in the new section
            const contentSections = document.querySelectorAll('.content-section');
            contentSections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('fade-in');
            });
            document.querySelector('.right-column').classList.remove('blacked-out');
        });
    });

    const quoteLink = document.querySelector('.reveal-quote');
    quoteLink.addEventListener('click', function (event) {
        event.preventDefault();
        const quoteDisplay = document.getElementById('quote-display');
        quoteDisplay.style.display = 'block';
        quoteDisplay.classList.add('fade-in'); // Add fade-in class
        const rightColumn = document.querySelector('.right-column');
        rightColumn.classList.add('blacked-out');
        setTimeout(() => {
            quoteDisplay.style.display = 'none';
            rightColumn.classList.remove('blacked-out');
        }, 5000);
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

            // Hide the photo
            const photoContainer = document.getElementById('photo-container');
            photoContainer.style.display = 'none';
        });
    });

    // Initial random photo load
    showRandomPhoto();

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
});
