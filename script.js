/* ============================================
   TEACHER PORTFOLIO - SCRIPT.JS
   
   TABLE OF CONTENTS:
   1. DOM Elements
   2. Mobile Menu Functions
   3. Navigation & Scrolling
   4. Button Events
   5. Card Interactions
   6. Gallery Interactions
   7. Scroll Animations
   8. Utility Functions
   9. Initialization
   ============================================ */


/* ============================================
   1. DOM ELEMENTS
   ============================================ */
const ctaButton = document.getElementById('ctaButton');
const ctaButtonMobile = document.getElementById('ctaButtonMobile');
const navLinks = document.querySelectorAll('.nav-link');
const modalLinks = document.querySelectorAll('.modal-link');
const aboutCards = document.querySelectorAll('.about-card');
const playIcons = document.querySelectorAll('.play-icon');
const galleryItems = document.querySelectorAll('.gallery-item');
const hamburger = document.getElementById('hamburger');
const modalOverlay = document.getElementById('modalOverlay');
const modalDialog = document.getElementById('modalDialog');
const modalClose = document.getElementById('modalClose');
const logoLink = document.getElementById('logoLink');


/* ============================================
   2. MOBILE MENU FUNCTIONS
   ============================================ */

/**
 * Open Modal Menu
 */
function openModal() {
    if (modalOverlay && modalDialog && hamburger) {
        modalOverlay.classList.add('active');
        modalDialog.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('✓ Mobile menu opened');
    }
}

/**
 * Close Modal Menu
 */
function closeModal() {
    if (modalOverlay && modalDialog && hamburger) {
        modalOverlay.classList.remove('active');
        modalDialog.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
        console.log('✓ Mobile menu closed');
    }
}

/**
 * Hamburger click event - Toggle menu
 */
if (hamburger) {
    hamburger.addEventListener('click', function() {
        if (modalDialog.classList.contains('active')) {
            closeModal();
        } else {
            openModal();
        }
    });
}

/**
 * Modal overlay click event - Close menu
 */
if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

/**
 * Modal close button click event
 */
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

/**
 * Modal links click events - Navigate and close menu
 */
modalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            closeModal();
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300);
            console.log(`✓ Navigated to ${targetId} from mobile menu`);
        }
    });
});


/* ============================================
   3. NAVIGATION & SCROLLING
   ============================================ */

/**
 * Handle navigation link clicks
 * Smooth scroll to corresponding section
 */
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the href value (e.g., #home, #about, #blog)
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Scroll smoothly to the section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            console.log(`✓ Navigated to ${targetId}`);
        }
    });
});

/**
 * Logo click - Navigate to home
 */
if (logoLink) {
    logoLink.addEventListener('click', function(e) {
        e.preventDefault();
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            console.log('✓ Logo clicked - navigated to Home');
        }
    });
}

/**
 * Highlight active navigation link based on scroll position
 */
window.addEventListener('scroll', function() {
    let current = '';
    
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
            console.log(`Active section: ${current}`);
        }
    });
});


/* ============================================
   4. BUTTON EVENTS
   ============================================ */

/**
 * CTA Button - "Let's Connect" (Desktop)
 * Scrolls to contact section
 */
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        const contactSection = document.getElementById('contact');
        
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            console.log('✓ CTA button clicked - scrolling to contact');
        } else {
            alert('Contact section coming soon!');
        }
    });

    // Add hover effect
    ctaButton.addEventListener('mouseenter', function() {
        console.log('CTA button hovered');
    });
}

/**
 * CTA Button - "Let's Connect" (Mobile)
 * Scrolls to contact section
 */
if (ctaButtonMobile) {
    ctaButtonMobile.addEventListener('click', function() {
        const contactSection = document.getElementById('contact');
        
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            console.log('✓ Mobile CTA button clicked - scrolling to contact');
        } else {
            alert('Contact section coming soon!');
        }
    });
}


/* ============================================
   5. CARD INTERACTIONS
   ============================================ */

/**
 * About Cards - Hover effects
 */
aboutCards.forEach((card, index) => {
    // Hover effect
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });

    // Click effect
    card.addEventListener('click', function() {
        console.log(`Card ${index + 1} clicked`);
    });
});


/* ============================================
   6. GALLERY INTERACTIONS
   ============================================ */

/**
 * Gallery Items - Play button click handler
 */
playIcons.forEach((icon, index) => {
    icon.addEventListener('click', function(e) {
        e.stopPropagation();
        
        console.log(`✓ Play button ${index + 1} clicked`);
        
        // You can add video modal functionality here
        showAlert('🎥 Video Player', `Video ${index + 1} would play here`, 'info');
    });
});

/**
 * Gallery Items - Click to expand
 */
galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        console.log(`Gallery item ${index + 1} clicked`);
        // Could open lightbox or modal here
    });
});


/* ============================================
   7. SCROLL ANIMATIONS
   ============================================ */

/**
 * Intersection Observer for scroll animations
 * Animates elements when they come into view
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Optional: Stop observing after animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards for animation
aboutCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});


/* ============================================
   8. UTILITY FUNCTIONS
   ============================================ */

/**
 * Custom alert/notification function
 * @param {string} title - Alert title
 * @param {string} message - Alert message
 * @param {string} type - Alert type (info, success, warning, error)
 */
function showAlert(title, message, type = 'info') {
    // Simple alert implementation
    // You can replace this with a custom modal/toast
    alert(`${title}\n\n${message}`);
}

/**
 * Log app initialization
 */
function logInitialization() {
    console.log('%c╔════════════════════════════════════╗', 'color: #f59e0b; font-weight: bold;');
    console.log('%c║  TEACHER PORTFOLIO - LOADED ✓    ║', 'color: #f59e0b; font-weight: bold;');
    console.log('%c╚════════════════════════════════════╝', 'color: #f59e0b; font-weight: bold;');
    console.log('%cVersion: 1.0.0', 'color: #2563eb;');
    console.log('%cAuthor: Muhammad Asif', 'color: #2563eb;');
    console.log('%cReady for interactions!', 'color: #10b981;');
}

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element to check
 * @returns {boolean} - True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Add smooth scroll to all anchor links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}


/* ============================================
   9. INITIALIZATION - RUN ON PAGE LOAD
   ============================================ */

/**
 * Run all initialization functions when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Content Loaded');
    
    // Setup functions
    setupSmoothScroll();
    logInitialization();
    
    // Log number of elements
    console.log(`Found ${navLinks.length} navigation links`);
    console.log(`Found ${modalLinks.length} modal links`);
    console.log(`Found ${aboutCards.length} about cards`);
    console.log(`Found ${galleryItems.length} gallery items`);
});

/**
 * Run on window load (all resources loaded)
 */
window.addEventListener('load', function() {
    console.log('✓ All resources loaded');
    console.log('✓ Portfolio is fully interactive');
});

/**
 * Handle window resize
 */
window.addEventListener('resize', function() {
    console.log(`Window resized: ${window.innerWidth}x${window.innerHeight}`);
    
    // Close mobile menu if window is resized to desktop size
    if (window.innerWidth > 768 && modalDialog.classList.contains('active')) {
        closeModal();
        console.log('✓ Mobile menu closed due to resize');
    }
});

