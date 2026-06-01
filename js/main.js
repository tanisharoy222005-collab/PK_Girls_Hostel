```javascript
/* ==========================================
   PK GIRLS HOSTEL
   MAIN JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       HERO IMAGE SLIDER
    ========================================== */

    const slides = document.querySelectorAll(".slide");

    let currentSlide = 0;

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    }

    if (slides.length > 0) {

        showSlide(0);

        setInterval(nextSlide, 5000);
    }

    /* ==========================================
       ROTATING HERO TEXT
    ========================================== */

    const dynamicText =
        document.getElementById("dynamic-text");

    const messages = [

        "24/7 Security",

        "Nutritious Daily Meals",

        "Comfortable Furnished Rooms",

        "Prime Ranchi Location",

        "Safe Environment For Students",

        "Affordable Accommodation",

        "Friendly Hostel Community"

    ];

    let messageIndex = 0;

    if (dynamicText) {

        dynamicText.textContent =
            messages[0];

        setInterval(() => {

            dynamicText.style.opacity = "0";

            setTimeout(() => {

                messageIndex++;

                if (
                    messageIndex >=
                    messages.length
                ) {
                    messageIndex = 0;
                }

                dynamicText.textContent =
                    messages[messageIndex];

                dynamicText.style.opacity = "1";

            }, 400);

        }, 2500);
    }

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const hamburger =
        document.querySelector(".hamburger");

    const navLinks =
        document.querySelector(".nav-links");

    if (hamburger && navLinks) {

        hamburger.addEventListener(
            "click",
            () => {

                navLinks.classList.toggle(
                    "mobile-active"
                );

                hamburger.classList.toggle(
                    "active"
                );

            }
        );

        document
            .querySelectorAll(".nav-links a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navLinks.classList.remove(
                            "mobile-active"
                        );

                        hamburger.classList.remove(
                            "active"
                        );
                    }
                );

            });
    }

    /* ==========================================
       STICKY NAVBAR EFFECT
    ========================================== */

    const header =
        document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );
        }
    });

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements =
        document.querySelectorAll(

            ".section, .room-card, .amenity-card, .review-card, .stat-card"

        );

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    revealElements.forEach(element => {

        element.classList.add(
            "hidden"
        );

        observer.observe(element);

    });

    /* ==========================================
       ACTIVE NAV LINK
    ========================================== */

    const sections =
        document.querySelectorAll("section");

    const navItems =
        document.querySelectorAll(
            ".nav-links a"
        );

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.clientHeight;

            if (
                pageYOffset >=
                sectionTop - 150
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );
            }

        });

        navItems.forEach(link => {

            link.classList.remove(
                "active-link"
            );

            const href =
                link.getAttribute(
                    "href"
                );

            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active-link"
                );
            }

        });

    });

    /* ==========================================
       REGISTRATION FORM
    ========================================== */

    const form =
        document.querySelector(
            ".registration-form"
        );

    if (form) {

        form.addEventListener(
            "submit",
            function () {

                const button =
                    this.querySelector(
                        "button"
                    );

                button.innerText =
                    "Submitting...";

            }
        );
    }

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (e) {

                    e.preventDefault();

                    const target =
                        document.querySelector(
                            this.getAttribute(
                                "href"
                            )
                        );

                    if (target) {

                        target.scrollIntoView({

                            behavior:
                                "smooth"

                        });
                    }
                }
            );

        });

    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    const counters =
        document.querySelectorAll(
            ".stat-card h3"
        );

    const speed = 100;

    counters.forEach(counter => {

        const updateCounter =
            () => {

                const target =
                    counter.innerText;

                const numeric =
                    parseInt(target);

                if (
                    isNaN(numeric)
                ) return;

                const count =
                    +counter.getAttribute(
                        "data-count"
                    ) || 0;

                const increment =
                    numeric / speed;

                if (
                    count < numeric
                ) {

                    const next =
                        Math.ceil(
                            count +
                            increment
                        );

                    counter.setAttribute(
                        "data-count",
                        next
                    );

                    counter.innerText =
                        next;

                    setTimeout(
                        updateCounter,
                        20
                    );

                } else {

                    counter.innerText =
                        numeric;
                }
            };

        updateCounter();

    });

});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop =
    document.createElement("button");

backToTop.innerHTML =
    "↑";

backToTop.classList.add(
    "back-to-top"
);

document.body.appendChild(
    backToTop
);

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 400
        ) {

            backToTop.style.opacity =
                "1";

            backToTop.style.visibility =
                "visible";

        } else {

            backToTop.style.opacity =
                "0";

            backToTop.style.visibility =
                "hidden";
        }

    }
);

backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior:
                "smooth"

        });

    }
);
```
