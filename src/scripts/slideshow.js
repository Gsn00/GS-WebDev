document.addEventListener('DOMContentLoaded', function() {
    const images = [
        document.getElementById('slideshow-img-01'),
        document.getElementById('slideshow-img-02'),
        document.getElementById('slideshow-img-03')
    ]
    
    const arrowLeft = document.getElementById('slide-arrow-left');
    const arrowRight = document.getElementById('slide-arrow-right');

    let currentImg = 0;
    let numberOfImages = images.length - 1;

    images[0].style.opacity = '1';
});