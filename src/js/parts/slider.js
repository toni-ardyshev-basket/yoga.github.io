function slider() {
    "use strict";


    let sliderIndex = 1,
        sliders = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dots = document.querySelectorAll('.dot'),
        sliderDots = document.querySelector('.slider-dots');
    getSliders(sliderIndex);

    function getSliders(n){
        if(n > sliders.length){
            sliderIndex = 1;
        }
        if(n < 1) {
            sliderIndex = sliderIndex.length;
        }

        sliders.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        sliders[sliderIndex - 1].style.display = 'block';
        dots[sliderIndex - 1].classList.add('dot-active');
    }

    function plusSliders(n){
        getSliders(sliderIndex += n)
    }
    setTimeout(function run() {
        plusSliders(1);
        setTimeout(run, 4000);
    }, 4000);

    function currentSlider(n){
        getSliders(sliderIndex = n)
    }

    prev.addEventListener('click', function () {
        plusSliders(-1)
    });
    next.addEventListener('click', function () {
        plusSliders(1)
    });

    sliderDots.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++){
            if(event.target.classList.contains('dot') && event.target == dots[i-1]){
                currentSlider(i);
            }
        }
    });
}

module.exports = slider;