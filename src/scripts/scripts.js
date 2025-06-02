document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    var isMenuOpened = false;
    const navMenu = document.getElementById('headerlinks');
    
    hamburger.addEventListener('click', function() {
        if (isMenuOpened) {
            hamburger.innerHTML = '☰';
            isMenuOpened = false;
        } else {
            hamburger.innerHTML = 'X';
            isMenuOpened = true;
        }
        navMenu.classList.toggle('show');
    });
});
