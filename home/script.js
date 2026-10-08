/* =====================================================
   NAVYUG PUBLIC SR. SEC. SCHOOL
   HOME PAGE JAVASCRIPT
===================================================== */


/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".page-loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});



/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

function handleNavbar() {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleNavbar);

handleNavbar();



/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

const mobileLinks = document.querySelectorAll(".mobile-menu a");


menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");

    mobileMenu.classList.toggle("open");

    document.body.classList.toggle("menu-open");

});


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");

        mobileMenu.classList.remove("open");

        document.body.classList.remove("menu-open");

    });

});



/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

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



/* =========================
   IMAGE FALLBACK
========================= */

const images = document.querySelectorAll("img");


images.forEach(image => {

    image.addEventListener("error", () => {

        image.style.opacity = "0";

        image.parentElement.classList.add("image-missing");

    });

});
/* =====================================================
   EXPANDABLE ACADEMIC CARDS
===================================================== */

const expandableCards = document.querySelectorAll(".expandable-card");


expandableCards.forEach(card => {

    const trigger = card.querySelector(".academic-trigger");
    const arrow = card.querySelector(".academic-arrow");


    trigger.addEventListener("click", () => {

        const isAlreadyOpen = card.classList.contains("active");


        /* Close every other card */

        expandableCards.forEach(otherCard => {

            otherCard.classList.remove("active");

            const otherArrow =
                otherCard.querySelector(".academic-arrow");

            if (otherArrow) {
                otherArrow.textContent = "+";
            }

        });


        /* Open clicked card */

        if (!isAlreadyOpen) {

            card.classList.add("active");

            arrow.textContent = "−";

        }

    });

});
/* =====================================================
   EXPANDABLE LEARNING / GROWTH / FUTURE CARDS
===================================================== */

const expandableHighlights =
    document.querySelectorAll(".expandable-highlight");

expandableHighlights.forEach(card => {

    const trigger =
        card.querySelector(".highlight-trigger");

    if (!trigger) return;

    trigger.addEventListener("click", () => {

        const wasOpen =
            card.classList.contains("active");


        /* Close every card first */

        expandableHighlights.forEach(otherCard => {
            otherCard.classList.remove("active");
        });


        /* Open clicked card if it wasn't already open */

        if (!wasOpen) {
            card.classList.add("active");
        }

    });

});