const imagesWrapper = document.querySelector('.carousel__images');
const images = document.querySelectorAll('.carousel__image');

const textWrapper = document.querySelector('.information__content');
const textItems = document.querySelectorAll('.information__item');


const totalItems = images.length;
let currentIndex = 0;




const updateCarousel = () => {
    // Image
    imagesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Text
    const containerWidth = textWrapper.offsetWidth / totalItems;
    textWrapper.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
};





const prevButtons = document.querySelectorAll('.carouselBtn__left');
const nextButtons = document.querySelectorAll('.carouselBtn__right');


prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });
});

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });
});






window.addEventListener('resize', updateCarousel);

updateCarousel(); // Init

