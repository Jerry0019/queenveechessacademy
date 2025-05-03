// Animate Gallery on Scroll
const gallerySection = document.querySelector('.gallery');
const galleryGrid = document.querySelector('.gallery-grid');

const animateGallery = () => {
    const galleryPosition = gallerySection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Trigger point for animation

    if (galleryPosition < screenPosition) {
        galleryGrid.classList.add('visible');
    }
};

window.addEventListener('scroll', animateGallery);

// Sticky Header on Scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
// Manual Slider for About Section
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    // Calculate the transform value to move the slides
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;

    // Update active class for slides
    slideElements.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            // Restart the zoom-in animation (only on desktop)
            if (window.innerWidth > 768) {
                slide.style.animation = 'none'; // Reset animation
                void slide.offsetWidth; // Trigger reflow
                slide.style.animation = 'zoomIn 8s linear forwards'; // Restart animation
            }
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideElements.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideElements.length) % slideElements.length;
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});