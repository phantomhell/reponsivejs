// script.js

window.addEventListener('resize', function() {
    const logo = document.querySelector('.cs-logo img');
    if (window.innerWidth < 600) {
        logo.style.maxWidth = '150px';
    } else {
        logo.style.maxWidth = '200px';
    }
});
