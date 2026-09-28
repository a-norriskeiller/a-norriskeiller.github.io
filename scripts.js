document.addEventListener("DOMContentLoaded", function () {
    // Number of photos in the images folder, named image1.jpg ... imageN.jpg.
    // prepare_photos.py prints this number when it finishes.
    const PHOTO_COUNT = 31;

    const photos = [];
    for (let i = 1; i <= PHOTO_COUNT; i++) photos.push("images/image" + i + ".jpg");

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

    let loadToken = 0;

    // Load a random photo (never the same one twice in a row) and fade it in.
    // fromBlack: hide whatever photo was showing first, so the new one fades up
    // from the dark background instead of crossfading over the old one.
    function newPhoto(fromBlack) {
        if (!photos.length) return;
        let src;
        do { src = photos[Math.floor(Math.random() * photos.length)]; }
        while (photos.length > 1 && src === lastPhoto);

        if (fromBlack) {
            imgs.forEach(function (img) {
                img.style.transition = "none";
                img.classList.remove("is-shown");
                void img.offsetWidth;          // apply instantly, without a fade
                img.style.transition = "";
            });
        }

        const token = ++loadToken;             // ignore loads a newer click has superseded
        const back = imgs[1 - frontImg];
        const front = imgs[frontImg];

        function reveal() {
            if (token !== loadToken) return;
            lastPhoto = src;
            back.style.zIndex = 1;
            front.style.zIndex = 0;
            back.classList.add("is-shown");
            front.classList.remove("is-shown");
            frontImg = 1 - frontImg;
        }

        // An image that already holds this photo won't fire onload again
        if (back.getAttribute("src") === src && back.complete) {
            requestAnimationFrame(reveal);
        } else {
            back.onload = reveal;
            // If a photo is missing (e.g. PHOTO_COUNT is set too high), drop it
            // from the list and try another
            back.onerror = function () {
                const i = photos.indexOf(src);
                if (i !== -1) photos.splice(i, 1);
                if (token === loadToken) newPhoto(false);
            };
            back.src = src;
        }
    }

    function on(id, handler) {
        document.getElementById(id).addEventListener("click", function (event) {
            event.preventDefault();
            handler();
        });
    }

    on("home-link-text", function () {
        newPhoto(current !== "photo");         // from black if returning from another page
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
