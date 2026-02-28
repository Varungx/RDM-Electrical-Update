/* Main JS for RDM Electrical */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons (already handled in individual files, but good to have)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply scroll reveal to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });

    // Form submission handling (Global)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            // For demo purposes, we're just logging the data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submission received:', data);
            
            // Success logic is handled by Alpine.js in contact.html
        });
    });

    // Header scroll background
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    });
});
