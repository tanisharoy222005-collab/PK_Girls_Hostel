// ===========================
// HERO IMAGE SLIDER
// ===========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 5000);

// ===========================
// HERO MOVING TEXT
// ===========================

const dynamicText =
document.getElementById("dynamic-text");

const phrases = [

    "24/7 Security",
    "Healthy Home-Style Meals",
    "Comfortable Rooms",
    "WiFi & Power Backup",
    "Safe For Students",
    "Prime Ranchi Location"

];

let phraseIndex = 0;

setInterval(() => {

    phraseIndex++;

    if (phraseIndex >= phrases.length) {

        phraseIndex = 0;
    }

    dynamicText.textContent =
    phrases[phraseIndex];

}, 2500);

// ===========================
// STICKY NAVBAR
// ===========================

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");
    }

});

// ===========================
// MOBILE MENU
// ===========================

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");

});

// ===========================
// SCROLL ANIMATION
// ===========================

const observer =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(
".section,.room-card,.menu-card,.amenity-card,.stat-card"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ===========================
// BACK TO TOP BUTTON
// ===========================

const backToTop =
document.createElement("button");

backToTop.innerHTML =
"↑";

backToTop.className =
"back-to-top";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";

    } else {

        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
