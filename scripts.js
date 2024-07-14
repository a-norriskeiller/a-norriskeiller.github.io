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
    }

    showRandomPhoto(); // Show random photo on initial load

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

            if (this.id === 'home-link') {
                location.reload();
                return;
            }

            const targetSection = document.getElementById(this.dataset.target);
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
                section.classList.remove('fade-in');
            });
            targetSection.style.display = 'block';
            targetSection.classList.add('fade-in');
        });
    });

    // Set up the click event for the home link
    document.getElementById('home-link').addEventListener('click', function () {
        showRandomPhoto(); // Show new random photo
    });
});
