let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    const indicators = document.querySelectorAll('.indicator');
    if(index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    indicators.forEach((indicator,i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide +1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    startSlideShow();
    document.querySelector('.carousel').addEventListener('mouseenter',stopSlideShow);
    document.querySelector('.carousel').addEventListener('mouseleave',startSlideShow);
});

function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";  
    } else {
        menu.style.display = "block";
    }
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburguer');

    // Alterna a classe "show" para exibir/ocultar o menu
    menu.classList.toggle('show');
    
    // Alterna a classe "active" para animar o botão hambúrguer
    hamburger.classList.toggle('active');
}
