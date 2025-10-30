/* ============================================
   DYNAMIC SECTION LOADER
   Loads HTML content from separate files
   ============================================ */

/**
 * Load external HTML content into sections
 */
async function loadSectionContent() {
    const sections = [
        { id: 'home', file: './Sections/home.html' },
        { id: 'about', file: './Sections/about.html' },
        { id: 'blog', file: './Sections/blog.html' },
        { id: 'contact', file: './Sections/contact.html' }
    ];

    for (const section of sections) {
        try {
            const response = await fetch(section.file);
            if (response.ok) {
                const html = await response.text();
                const container = document.getElementById(section.id);
                if (container) {
                    container.outerHTML = html;
                    console.log(`✓ Loaded ${section.id} section from ${section.file}`);
                }
            } else {
                console.warn(`⚠ Could not load ${section.file}`);
            }
        } catch (error) {
            console.error(`❌ Error loading ${section.file}:`, error);
        }
    }

    // After all sections are loaded, reinitialize interactive elements
    reinitializeElements();
}

/**
 * Reinitialize all interactive elements after content is loaded
 */
function reinitializeElements() {
    console.log('🔄 Reinitializing interactive elements...');

    // Reinitialize CTA buttons
    const ctaButton = document.getElementById('ctaButton');
    const ctaButtonMobile = document.getElementById('ctaButtonMobile');

    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                console.log('✓ CTA button clicked - scrolling to contact');
            }
        });
    }

    if (ctaButtonMobile) {
        ctaButtonMobile.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                console.log('✓ Mobile CTA button clicked - scrolling to contact');
            }
        });
    }

    // Reinitialize about cards
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        card.addEventListener('click', function() {
            console.log(`Card ${index + 1} clicked`);
        });

        // Scroll animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
    });

    // Reinitialize gallery items
    const playIcons = document.querySelectorAll('.play-icon');
    playIcons.forEach((icon, index) => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log(`✓ Play button ${index + 1} clicked`);
            alert(`🎥 Video ${index + 1} would play here`);
        });
    });

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            console.log(`Gallery item ${index + 1} clicked`);
        });
    });

    // Reinitialize contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('✓ Contact form submitted');
            alert('Thank you for your message! This is a demo form.');
        });
    }

    // Reinitialize scroll observer
    setupScrollObserver();

    console.log('✓ All elements reinitialized');
}

/**
 * Setup intersection observer for scroll animations
 */
function setupScrollObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach(card => observer.observe(card));

    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}

// Load sections when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Content Loaded - Loading sections...');
    loadSectionContent();
});