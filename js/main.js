/* ===============================
   main.js - Complete Script
   =============================== */

/* -------------------------------
   DOM Elements
--------------------------------*/
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const backToTop = document.querySelector(".back-to-top");

const heroTitle = document.querySelector(".hero-title");
const heroSubtitle = document.querySelector(".hero-subtitle");
const heroSection = document.querySelector(".hero");

/* -------------------------------
   Hero Slider Data
--------------------------------*/
const heroSlides = [
  {
    title: "Build Modern Experiences",
    subtitle: "Clean. Fast. Responsive Web Design."
  },
  {
    title: "Design That Speaks",
    subtitle: "User-first interfaces that convert."
  },
  {
    title: "Performance Matters",
    subtitle: "Optimized websites for real-world impact."
  }
];

let currentSlide = 0;

/* -------------------------------
   Hero Slider Function
--------------------------------*/
function updateHeroSlide() {
  if (!heroTitle || !heroSubtitle) return;

  heroTitle.style.opacity = 0;
  heroSubtitle.style.opacity = 0;

  setTimeout(() => {
    heroTitle.textContent = heroSlides[currentSlide].title;
    heroSubtitle.textContent = heroSlides[currentSlide].subtitle;

    heroTitle.style.opacity = 1;
    heroSubtitle.style.opacity = 1;
  }, 300);

  currentSlide = (currentSlide + 1) % heroSlides.length;
}

/* Auto slide every 4 seconds */
setInterval(updateHeroSlide, 4000);

/* -------------------------------
   Sticky Navbar on Scroll
--------------------------------*/
function handleStickyNavbar() {
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/* -------------------------------
   Active Navbar Highlight
--------------------------------*/
function updateActiveNav() {
  let scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    if (!section.id) return;

    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

/* -------------------------------
   Mobile Menu Toggle
--------------------------------*/
function toggleMobileMenu() {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

/* Close menu on link click */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

/* -------------------------------
   Scroll Animations (Fade-in)
--------------------------------*/
function revealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

/* -------------------------------
   Back to Top Button
--------------------------------*/
function handleBackToTop() {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

backToTop?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* -------------------------------
   Event Listeners
--------------------------------*/
window.addEventListener("scroll", () => {
  handleStickyNavbar();
  updateActiveNav();
  revealOnScroll();
  handleBackToTop();
});

hamburger?.addEventListener("click", toggleMobileMenu);

/* -------------------------------
   Initial Trigger
--------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  updateHeroSlide();
  revealOnScroll();
});
