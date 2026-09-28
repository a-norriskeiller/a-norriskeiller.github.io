document.addEventListener("DOMContentLoaded", function () {
    const photos = [
        'images/clouds.jpg', 'images/clouds2.jpg', 'images/clouds3.jpg',
        'images/fields.jpg', 'images/ground.jpg', 'images/leaf.jpg',
        'images/leaves.jpg', 'images/pondweed1.jpg', 'images/rain.jpg',
        'images/rain2.jpg', 'images/shadow.jpg', 'images/shadow3.jpg',
        'images/sky.jpg', 'images/sky2.jpg', 'images/sky3.jpg',
        'images/tcr.jpg', 'images/thames.jpg', 'images/tiles.jpg',
        'images/tiles2.jpg', 'images/trees.jpg', 'images/wetlands.jpg'
        // Add more photo paths as needed
    ];

    const views = {
        photo: document.getElementById("photo-view"),
        research: document.getElementById("research-content"),
        quote: document.getElementById("quote-content")
    };
    const imgs = document.querySelectorAll("#photo-view .photo");
    let current = "photo";
    let frontImg = 0;
    let lastPhoto = null;

    // Crossfade to a view. CSS handles the fade; a new click simply
    // retargets it, so there are no timers to go stale.
    function showView(name) {
        if (name === current) return;
        views[current].classList.remove("is-active");
        views[name].classList.add("is-active");
        current = name;
    }

    // Load a random photo (never the same one twice in a row) into the
    // back image, then fade it in over the front one once it has loaded.
    function newPhoto() {
        let src;
        do { src = photos[Math.floor(Math.random() * photos.length)]; }
        while (photos.length > 1 && src === lastPhoto);
        lastPhoto = src;

        const back = imgs[1 - frontImg];
        const front = imgs[frontImg];
        back.onload = function () {
            back.style.zIndex = 1;
            front.style.zIndex = 0;
            back.classList.add("is-shown");
            front.classList.remove("is-shown");
            frontImg = 1 - frontImg;
        };
        back.src = src;
    }

    function on(id, handler) {
        document.getElementById(id).addEventListener("click", function (event) {
            event.preventDefault();
            handler();
        });
    }

    on("home-link-text", function () {
        newPhoto();
        showView("photo");
    });
    on("research-link", function () { showView("research"); });
    on("quote-link", function () { showView("quote"); });
    // The CV link just opens in a new tab and leaves this page alone.

    document.querySelectorAll(".abstract-toggle").forEach(function (button) {
        button.addEventListener("click", function () {
            const abstract = document.getElementById(button.getAttribute("aria-controls"));
            const open = abstract.classList.toggle("is-open");
            button.setAttribute("aria-expanded", open);
        });
    });

    newPhoto();
});
