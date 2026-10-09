
document.addEventListener("DOMContentLoaded", () => {
    // Page loader
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

    // Mobile navigation
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
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
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.querySelectorAll("span").forEach(bar => {
                    bar.style.transform = "";
                    bar.style.opacity = "";
                });
            });
        });

        document.addEventListener("click", event => {
            if (
                navLinks.classList.contains("open") &&
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.querySelectorAll("span").forEach(bar => {
                    bar.style.transform = "";
                    bar.style.opacity = "";
                });
            }
        });
    }

    // Scroll reveal: elements fade out again when scrolled away
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

    // Event category filters
    const filterButtons = document.querySelectorAll(".filter-btn");
    const eventCards = document.querySelectorAll(".event-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            filterButtons.forEach(item => {
                item.classList.remove("active");
                item.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            eventCards.forEach(card => {
                const matches =
                    filter === "all" || card.dataset.category === filter;

                card.classList.toggle("filtered-out", !matches);
            });
        });

        button.setAttribute(
            "aria-pressed",
            String(button.classList.contains("active"))
        );
    });

    // Footer year
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});