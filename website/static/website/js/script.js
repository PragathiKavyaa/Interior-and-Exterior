document.addEventListener("DOMContentLoaded", function () {

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mobileLinks =
        document.querySelectorAll(".mobile-menu a");


    /* ================================================
       MOBILE MENU
    ================================================= */

    mobileMenuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("open");

        const icon =
            mobileMenuButton.querySelector("i");

        if (mobileMenu.classList.contains("open")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    /* ================================================
       CLOSE MOBILE MENU
    ================================================= */

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("open");

            const icon =
                mobileMenuButton.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


    /* ================================================
       ACTIVE NAVIGATION
    ================================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");


    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    });


    /* ================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .project-card, .about-content"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });

});


document.addEventListener("DOMContentLoaded", function () {

    const enquireLinks = document.querySelectorAll(
        ".interior-card .enquire-link"
    );

    enquireLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const contactSection = document.querySelector("#contact");

            if (contactSection) {
                event.preventDefault();

                contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

});