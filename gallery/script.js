
document.addEventListener("DOMContentLoaded", () => {
    // PAGE LOADER
    const loader = document.getElementById("page-loader");

    document.body.classList.add("loading");

    const hideLoader = () => {
        if (loader) {
            loader.classList.add("hidden");
        }
        document.body.classList.remove("loading");
    };

    window.addEventListener("load", hideLoader, { once: true });
    setTimeout(hideLoader, 1800);


    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        const closeMenu = () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

            menuToggle.querySelectorAll("span").forEach(bar => {
                bar.style.transform = "";
                bar.style.opacity = "";
            });
        };

        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            const bars = menuToggle.querySelectorAll("span");

            if (isOpen) {
                bars[0].style.transform = "translateY(7px) rotate(45deg)";
                bars[1].style.opacity = "0";
                bars[2].style.transform = "translateY(-7px) rotate(-45deg)";
            } else {
                bars.forEach(bar => {
                    bar.style.transform = "";
                    bar.style.opacity = "";
                });
            }
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", event => {
            if (
                navLinks.classList.contains("open") &&
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }
        });
    }


    // SCROLL REVEAL
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -25px 0px"
        });

        revealElements.forEach(element => revealObserver.observe(element));
    } else {
        revealElements.forEach(element => element.classList.add("visible"));
    }


    // IMAGE FALLBACK
    const galleryItems = Array.from(
        document.querySelectorAll(".gallery-item")
    );

    galleryItems.forEach(item => {
        const image = item.querySelector("img");

        if (!image) return;

        const markMissing = () => {
            item.classList.add("image-missing");
            item.setAttribute("aria-label", "Photo unavailable: " + item.dataset.title);
        };

        image.addEventListener("error", markMissing);

        if (image.complete && image.naturalWidth === 0) {
            markMissing();
        }

        image.addEventListener("load", () => {
            item.classList.remove("image-missing");
            item.setAttribute("aria-label", "View " + item.dataset.title + " photograph");
        });
    });


    // GALLERY FILTERS
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            filterButtons.forEach(filterButton => {
                const isActive = filterButton === button;

                filterButton.classList.toggle("active", isActive);
                filterButton.setAttribute("aria-pressed", String(isActive));
            });

            galleryItems.forEach(item => {
                const matches =
                    filter === "all" || item.dataset.category === filter;

                item.hidden = !matches;
            });
        });
    });


    // LIGHTBOX
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxCount = document.getElementById("lightboxCount");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");

    let visiblePhotos = [];
    let currentPhotoIndex = 0;
    let previouslyFocusedElement = null;

    const getAvailablePhotos = () => {
        return galleryItems.filter(item => {
            const image = item.querySelector("img");

            return (
                !item.hidden &&
                !item.classList.contains("image-missing") &&
                image &&
                image.naturalWidth > 0
            );
        });
    };

    const updateLightbox = () => {
        const item = visiblePhotos[currentPhotoIndex];

        if (!item) return;

        const image = item.querySelector("img");
        const fullImage = item.dataset.full || image.src;

        lightboxImage.src = fullImage;
        lightboxImage.alt = image.alt || item.dataset.title || "Gallery photograph";
        lightboxTitle.textContent = item.dataset.title || "School Gallery";
        lightboxCount.textContent =
            `${currentPhotoIndex + 1} / ${visiblePhotos.length}`;

        const multiplePhotos = visiblePhotos.length > 1;

        lightboxPrev.hidden = !multiplePhotos;
        lightboxNext.hidden = !multiplePhotos;
    };

    const openLightbox = item => {
        visiblePhotos = getAvailablePhotos();

        currentPhotoIndex = visiblePhotos.indexOf(item);

        if (currentPhotoIndex < 0) return;

        previouslyFocusedElement = document.activeElement;

        updateLightbox();

        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("lightbox-open");

        lightboxClose.focus();
    };

    const closeLightbox = () => {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.classList.remove("lightbox-open");

        lightboxImage.src = "";

        if (previouslyFocusedElement) {
            previouslyFocusedElement.focus();
        }
    };

    const showNextPhoto = () => {
        if (visiblePhotos.length < 2) return;

        currentPhotoIndex =
            (currentPhotoIndex + 1) % visiblePhotos.length;

        updateLightbox();
    };

    const showPreviousPhoto = () => {
        if (visiblePhotos.length < 2) return;

        currentPhotoIndex =
            (currentPhotoIndex - 1 + visiblePhotos.length) %
            visiblePhotos.length;

        updateLightbox();
    };

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            if (item.classList.contains("image-missing")) {
                return;
            }

            openLightbox(item);
        });
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightboxNext.addEventListener("click", showNextPhoto);
    lightboxPrev.addEventListener("click", showPreviousPhoto);

    // Close when clicking the dark background
    lightbox.addEventListener("click", event => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener("keydown", event => {
        if (!lightbox.classList.contains("open")) return;

        if (event.key === "Escape") {
            closeLightbox();
        } else if (event.key === "ArrowRight") {
            showNextPhoto();
        } else if (event.key === "ArrowLeft") {
            showPreviousPhoto();
        }
    });


    // FOOTER YEAR
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});