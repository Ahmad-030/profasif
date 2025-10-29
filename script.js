/* ============================================
   TEACHER PORTFOLIO - SCRIPT.JS
   
   TABLE OF CONTENTS:
   1. DOM Elements
   2. Navigation & Scrolling
   3. Button Events
   4. Card Interactions
   5. Gallery Interactions
   6. Scroll Animations
   7. Utility Functions
   8. Initialization
   ============================================ */


/* ============================================
   1. DOM ELEMENTS
   ============================================ */
const ctaButton = document.getElementById('ctaButton');
const navLinks = document.querySelectorAll('.nav-link');
const aboutCards = document.querySelectorAll('.about-card');
const playIcons = document.querySelectorAll('.play-icon');
const galleryItems = document.querySelectorAll('.gallery-item');


/* ============================================
   2. NAVIGATION & SCROLLING
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
   3. BUTTON EVENTS
   ============================================ */

/**
 * CTA Button - "Let's Talk"
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


/* ============================================
   4. CARD INTERACTIONS
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
   5. GALLERY INTERACTIONS
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
   6. SCROLL ANIMATIONS
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
   7. UTILITY FUNCTIONS
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
    console.log('%cAuthor: Rock William', 'color: #2563eb;');
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
   8. INITIALIZATION - RUN ON PAGE LOAD
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
});


/* ============================================
   KEYBOARD SHORTCUTS (Optional)
   ============================================ */

/**
 * Add keyboard navigation support
 */
document.addEventListener('keydown', function(e) {
    // Press 'H' to go to Home
    if (e.key === 'h' || e.key === 'H') {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        console.log('Keyboard: Jumped to Home');
    }
    
    // Press 'A' to go to About
    if (e.key === 'a' || e.key === 'A') {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        console.log('Keyboard: Jumped to About');
    }
});


/* ============================================
   ERROR HANDLING
   ============================================ */

/**
 * Handle any errors gracefully
 */
window.addEventListener('error', function(e) {
    console.error('❌ Error occurred:', e.error);
});