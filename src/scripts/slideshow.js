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

    function nextSlide() {
        images[currentImg].style.opacity = '0';
        if (currentImg == numberOfImages) {
            currentImg = 0;
        } else {
            currentImg++;
        }
        images[currentImg].style.opacity = '1';
    }

    function prevSlide() {
        images[currentImg].style.opacity = '0';
        if (currentImg == 0) {
            currentImg = numberOfImages;
        } else {
            currentImg--;
        }
        images[currentImg].style.opacity = '1';
    }

    arrowLeft.addEventListener('click', function() {
        prevSlide();
    });

    arrowRight.addEventListener('click', function() {
        nextSlide();
    });
});