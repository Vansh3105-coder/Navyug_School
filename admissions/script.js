
/* =====================================================
   NAVYUG PUBLIC SR. SEC. SCHOOL
   ADMISSIONS PAGE JAVASCRIPT
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
   FAQ ACCORDION
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-question");

    if (!trigger) return;

    trigger.addEventListener("click", () => {
        const wasOpen = item.classList.contains("active");

        // Close every FAQ first.
        faqItems.forEach(otherItem => {
            otherItem.classList.remove("active");

            const otherTrigger =
                otherItem.querySelector(".faq-question");

            const otherIcon =
                otherItem.querySelector(".faq-icon");

            if (otherTrigger) {
                otherTrigger.setAttribute("aria-expanded", "false");
            }

            if (otherIcon) {
                otherIcon.textContent = "+";
            }
        });

        // Open the selected FAQ if it was previously closed.
        if (!wasOpen) {
            item.classList.add("active");
            trigger.setAttribute("aria-expanded", "true");

            const icon = item.querySelector(".faq-icon");

            if (icon) {
                icon.textContent = "−";
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