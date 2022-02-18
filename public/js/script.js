let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

// console.log(slides);

document.getElementById('carousel-next').addEventListener("click", function(){
    moveToNextSlide();
});

document.getElementById('carousel-prev').addEventListener("click", function(){
    moveToPrevSlide();
});

//move the slides
function updateSlidePosition(){
    for (let slide of slides){
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    };
    slides[slidePosition].classList.add('carousel__item--visible');
};

function moveToNextSlide(){
    if(slidePosition === totalSlides -1){
        slidePosition = 0;
    } else{
        slidePosition++;
    };

    updateSlidePosition();
};

function moveToPrevSlide(){
    if(slidePosition === 0 ){
        slidePosition = totalSlides -1;
    } else{
        slidePosition--;
    };

    updateSlidePosition();
};