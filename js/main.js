/**
 * Main JavaScript for System Design A-Z Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Accessibility
            const expanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', expanded);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        menuToggle.setAttribute('aria-expanded', false);
                    }
                    
                    // Scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Update URL
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
    
    // Add active class to nav links based on current section
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop - 100 && 
                window.scrollY < sectionTop + sectionHeight - 100) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Initial call and scroll event listener
    setActiveNavLink();
    window.addEventListener('scroll', setActiveNavLink);
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .example-card, .path-step');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animate');
            }
        });
    };
    
    // Add animation class to CSS
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .example-card, .path-step {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .feature-card.animate, .example-card.animate, .path-step.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .feature-card:nth-child(2), .example-card:nth-child(2), .path-step:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .feature-card:nth-child(3), .example-card:nth-child(3), .path-step:nth-child(3) {
            transition-delay: 0.4s;
        }
        
        .feature-card:nth-child(4), .example-card:nth-child(4) {
            transition-delay: 0.6s;
        }
    `;
    document.head.appendChild(style);
    
    // Initial call and scroll event listener for animations
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
