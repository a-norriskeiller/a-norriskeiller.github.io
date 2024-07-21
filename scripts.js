document.addEventListener("DOMContentLoaded", function () {
    const randomPhoto = document.getElementById("random-photo");
    const researchLink = document.getElementById("research-link");
    const cvLink = document.getElementById("cv-link");
    const quoteLink = document.getElementById("quote-link");
    const researchContent = document.getElementById("research-content");
    const quoteContent = document.getElementById("quote-content");
    const rightPanel = document.getElementById("right-panel");

    const photos = [
        'images/clouds.jpg',
        'images/shadow.jpg'
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
    }

    researchLink.addEventListener("click", function (event) {
        event.preventDefault();
        showResearchContent();
    });

    cvLink.addEventListener("click", function (event) {
        loadRandomPhoto();
    });

    quoteLink.addEventListener("click", function (event) {
        event.preventDefault();
        showQuoteContent();
    });

    loadRandomPhoto(); // Load a random photo on page load
});
