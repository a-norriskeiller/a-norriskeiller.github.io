document.addEventListener("DOMContentLoaded", function () {
    const randomPhoto = document.getElementById("random-photo");
    const researchLink = document.getElementById("research-link");
    const cvLink = document.getElementById("cv-link");
    const quoteLink = document.getElementById("quote-link");
    const homeLinkText = document.getElementById("home-link-text");
    const researchContent = document.getElementById("research-content");
    const quoteContent = document.getElementById("quote-content");
    const rightPanel = document.getElementById("right-panel");

    const photos = [
        'images/clouds.jpg',
        'images/shadow.jpg'
        // Add more photo paths as needed
    ];

    function loadRandomPhoto() {
        const randomIndex = Math.floor(Math.random() * photos.length);
        randomPhoto.src = photos[randomIndex];
        randomPhoto.classList.remove("hidden");
    }

    function showResearchContent() {
        randomPhoto.classList.add("hidden");
        quoteContent.classList.add("hidden");
        researchContent.classList.remove("hidden");
    }

    function showQuoteContent() {
        randomPhoto.classList.add("hidden");
        researchContent.classList.add("hidden");
        quoteContent.classList.remove("hidden");
        quoteContent.classList.add("fade-in");
    }

    function hideQuoteContent() {
        quoteContent.classList.remove("fade-in");
        quoteContent.classList.add("fade-out");
        setTimeout(() => {
            quoteContent.classList.add("hidden");
            quoteContent.classList.remove("fade-out");
        }, 1000); // Adjusted timing for 1s fade-out
    }

    researchLink.addEventListener("click", function (event) {
        event.preventDefault();
        hideQuoteContent();
        setTimeout(showResearchContent, 1000); // Adjusted timing for 1s fade-out
    });

    cvLink.addEventListener("click", function (event) {
        loadRandomPhoto();
    });

    quoteLink.addEventListener("click", function (event) {
        event.preventDefault();
        hideQuoteContent();
        setTimeout(showQuoteContent, 1000); // Adjusted timing for 1s fade-out
    });

    homeLinkText.addEventListener("click", function (event) {
        event.preventDefault();
        loadRandomPhoto();
        researchContent.classList.add("hidden");
        quoteContent.classList.add("hidden");
    });

    loadRandomPhoto(); // Load a random photo on page load

    document.querySelectorAll('.subheading').forEach(subheading => {
        subheading.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelectorAll('.entry').forEach(entry => entry.classList.add('hidden'));
            document.getElementById(this.dataset.target).classList.remove('hidden');
        });
    });

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
});
