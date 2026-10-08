/* =====================================================
   NAVYUG PUBLIC SR. SEC. SCHOOL
   ACADEMICS PAGE JAVASCRIPT
===================================================== */


/* =====================================================
   PAGE LOADER
===================================================== */

window.addEventListener("load", () => {

    const loader =
        document.querySelector(".page-loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");


function handleNavbar() {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    handleNavbar
);

handleNavbar();



/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const mobileMenu =
    document.querySelector(".mobile-menu");

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


if (menuToggle && mobileMenu) {

    menuToggle.addEventListener(
        "click",
        () => {

            menuToggle.classList.toggle(
                "active"
            );

            mobileMenu.classList.toggle(
                "open"
            );

            document.body.classList.toggle(
                "menu-open"
            );

        }
    );

}


mobileLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            menuToggle.classList.remove(
                "active"
            );

            mobileMenu.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }
    );

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

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

/* =====================================================
   EXPANDABLE ACADEMIC LEVELS
===================================================== */

const expandableLevels =
    document.querySelectorAll(".expandable-level");


expandableLevels.forEach(card => {

    const trigger =
        card.querySelector(".level-trigger");

    const arrow =
        card.querySelector(".level-arrow");


    if (!trigger) return;


    trigger.addEventListener("click", () => {

        const wasOpen =
            card.classList.contains("active");


        /* Close all cards */

        expandableLevels.forEach(otherCard => {

            otherCard.classList.remove("active");

            const otherArrow =
                otherCard.querySelector(".level-arrow");

            if (otherArrow) {

                otherArrow.textContent = "+";

            }

        });


        /* Open clicked card */

        if (!wasOpen) {

            card.classList.add("active");

            if (arrow) {

                arrow.textContent = "−";

            }

        }

    });

});



/* =====================================================
   EXPANDABLE ASSESSMENT CARDS
===================================================== */

const expandableAssessments =
    document.querySelectorAll(
        ".expandable-assessment"
    );


expandableAssessments.forEach(card => {

    const trigger =
        card.querySelector(".assessment-trigger");

    const arrow =
        card.querySelector(".assessment-arrow");


    if (!trigger) return;


    trigger.addEventListener("click", () => {

        const wasOpen =
            card.classList.contains("active");


        /* Close all assessment cards */

        expandableAssessments.forEach(otherCard => {

            otherCard.classList.remove("active");

            const otherArrow =
                otherCard.querySelector(
                    ".assessment-arrow"
                );

            if (otherArrow) {

                otherArrow.textContent = "+";

            }

        });


        /* Open clicked card */

        if (!wasOpen) {

            card.classList.add("active");

            if (arrow) {

                arrow.textContent = "−";

            }

        }

    });

});

/* =====================================================
   IMAGE FALLBACK
===================================================== */

const images =
    document.querySelectorAll("img");


images.forEach(image => {

    image.addEventListener(
        "error",
        () => {

            image.style.opacity = "0";

            if (image.parentElement) {

                image.parentElement.classList.add(
                    "image-missing"
                );

            }

        }
    );

});