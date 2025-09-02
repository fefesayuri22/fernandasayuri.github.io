let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function changeSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

// Mudar imagem a cada 3 segundos
setInterval(changeSlide, 3000);