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

    const whiteBgButton = document.getElementById('background-color-white');
    const blueBgButton = document.getElementById('background-color-blue');
    const darkBgButton = document.getElementById('background-color-dark');
    const whiteSectionList = document.querySelectorAll('.section-white');
    const blueSectionList = document.querySelectorAll('.section-blue, .section-04');
    const footer = document.getElementById('footer');
    const quizList = document.querySelectorAll('.quiz *');

    whiteBgButton.addEventListener('click', function() {
        location.reload()
    })

    blueBgButton.addEventListener('click', function() {
        whiteSectionList.forEach(section => {
            section.style.setProperty('background-color', '#0f243f');
            section.querySelectorAll('*').forEach(element => {
                element.style.setProperty('color', 'white', 'important');
            });
        });

        blueSectionList.forEach(section => {
            section.style.setProperty('background-color', '#202f4f');
            section.style.setProperty('background-image', 'none', 'important');
            section.querySelectorAll('*').forEach(element => {
                element.style.setProperty('color', 'white', 'important');
            });
        });

        quizList.forEach(quiz => {
            quiz.style.setProperty('color', 'rgb(43, 43, 43)')
        });

        footer.style.setProperty('background-color', '#0f243f', 'important');
        footer.style.setProperty('color', 'white', 'important');
    })

    darkBgButton.addEventListener('click', function() {
         whiteSectionList.forEach(section => {
            section.style.setProperty('background-color', 'rgb(43, 43, 43)');
            section.querySelectorAll('*').forEach(element => {
                element.style.setProperty('color', 'white', 'important');
            });
        });

        blueSectionList.forEach(section => {
            section.style.setProperty('background-color', '#2e2c3b');
            section.style.setProperty('background-image', 'none', 'important');
            section.querySelectorAll('*').forEach(element => {
                element.style.setProperty('color', 'white', 'important');
            });
        });

        quizList.forEach(quiz => {
            quiz.style.setProperty('color', 'rgb(43, 43, 43)')
        });

        footer.style.setProperty('background-color', 'rgb(43, 43, 43)', 'important');
        footer.style.setProperty('color', 'white', 'important');
    })
});
