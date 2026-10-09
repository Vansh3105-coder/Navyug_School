
/* =====================================================
   NAVYUG PUBLIC SR. SEC. SCHOOL
   FACILITIES PAGE JAVASCRIPT
===================================================== */


/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {
    const loader = document.querySelector(".page-loader");

    if (!loader) return;

    setTimeout(() => {
        loader.classList.add("hide");
    }, 500);
});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

function handleNavbar() {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", handleNavbar, {
    passive: true
});

handleNavbar();


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

function closeMobileMenu() {
    if (!menuToggle || !mobileMenu) return;

    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");
}

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.contains("open");

        if (isOpen) {
            closeMobileMenu();
        } else {
            menuToggle.classList.add("active");
            mobileMenu.classList.add("open");
            document.body.classList.add("menu-open");

            menuToggle.setAttribute("aria-expanded", "true");
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener("click", closeMobileMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1050) {
            closeMobileMenu();
        }
    });
}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(element => {
        element.classList.add("visible");
    });
}


/* =========================
   IMAGE FALLBACK
========================= */

const images = document.querySelectorAll("img");

images.forEach(image => {
    function handleImageError() {
        image.style.opacity = "0";

        if (image.parentElement) {
            image.parentElement.classList.add("image-missing");
        }
    }

    image.addEventListener("error", handleImageError);

    if (image.complete && image.naturalWidth === 0) {
        handleImageError();
    }
});


/* =========================
   EXPANDABLE FACILITY CARDS
========================= */

const facilityCards =
    document.querySelectorAll(".expandable-facility");

facilityCards.forEach(card => {
    const trigger = card.querySelector(".facility-trigger");
    const arrow = card.querySelector(".facility-arrow");

    if (!trigger) return;

    trigger.addEventListener("click", () => {
        const wasOpen = card.classList.contains("active");

        // Close all cards first.
        facilityCards.forEach(otherCard => {
            otherCard.classList.remove("active");

            const otherTrigger =
                otherCard.querySelector(".facility-trigger");

            const otherArrow =
                otherCard.querySelector(".facility-arrow");

            if (otherTrigger) {
                otherTrigger.setAttribute("aria-expanded", "false");
            }

            if (otherArrow) {
                otherArrow.textContent = "+";
            }
        });

        // Open the selected card if it was closed.
        if (!wasOpen) {
            card.classList.add("active");
            trigger.setAttribute("aria-expanded", "true");

            if (arrow) {
                arrow.textContent = "−";
            }
        }
    });
});


/* =========================
   CURRENT FOOTER YEAR
========================= */

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}