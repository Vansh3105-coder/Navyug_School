/* =====================================================
   NAVYUG PUBLIC SR. SEC. SCHOOL
   CIRCULARS PAGE JAVASCRIPT
===================================================== */


/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".page-loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

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


window.addEventListener("scroll", handleNavbar);

handleNavbar();



/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const mobileMenu =
    document.querySelector(".mobile-menu");

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");

        mobileMenu.classList.toggle("open");

        document.body.classList.toggle("menu-open");

    });

}


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (menuToggle) {

            menuToggle.classList.remove("active");

        }

        if (mobileMenu) {

            mobileMenu.classList.remove("open");

        }

        document.body.classList.remove("menu-open");

    });

});



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                } else {

                    entry.target.classList.remove("visible");

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
   EXPANDABLE CIRCULARS
========================= */

const expandableCirculars =
    document.querySelectorAll(".expandable-circular");


expandableCirculars.forEach(card => {

    const trigger =
        card.querySelector(".circular-trigger");


    if (!trigger) return;


    trigger.addEventListener("click", () => {

        const wasOpen =
            card.classList.contains("active");


        /* CLOSE ALL OTHER CIRCULARS */

        expandableCirculars.forEach(otherCard => {

            otherCard.classList.remove("active");

        });


        /* OPEN CLICKED CIRCULAR */

        if (!wasOpen) {

            card.classList.add("active");

        }

    });

});