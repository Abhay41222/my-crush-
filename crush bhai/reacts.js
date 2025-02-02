// Optional JS for any additional interactivity if needed
// For now, it just ensures the images fade in after the page loads.

window.onload = function() {
    const photos = document.querySelectorAll('.photo');
    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.style.opacity = 1;
            photo.style.transform = 'scale(1)';
        }, index * 500);  // Staggered effect for each photo
    });
};
