// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

// Keep each before/after divider in sync with its range input.
document.querySelectorAll('.image-comparison').forEach(function(comparison) {
    const slider = comparison.querySelector('.comparison-slider');

    slider.addEventListener('input', function() {
        comparison.style.setProperty('--position', slider.value + '%');
    });
});
