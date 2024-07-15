var header = document.querySelector('.header-inner');
var isScrolling;
var isAtTop = true;

window.addEventListener('scroll', function() {
    clearTimeout(isScrolling);

    if (window.scrollY > 0 && isAtTop) {
        isAtTop = false;
        header.classList.add('hidden'); 
        setTimeout(function() {
            header.classList.remove('hidden'); 
            header.classList.add('scrolled');
        }, 500); 
    } else if (window.scrollY === 0) {
        isAtTop = true;
        header.classList.remove('hidden');
        header.classList.remove('scrolled');
    }

    isScrolling = setTimeout(function() {
        header.classList.remove('hidden'); 
    }, 500);
});

// Preloader
window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
});
