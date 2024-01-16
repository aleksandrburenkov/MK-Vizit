'use strict';

// =======================================================================================
$(document).ready(function () {
    $('.slide-one').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,

        dots: true,
        dotsEach: true,
        smartSpeed: 3000,
        autoplayTimeout: 5000,

        responsive: {
            320: {
                items: 1,
            },
            425: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1440: {
                items: 4,
            },
        },
    });
});
// ==========================================================================================
// =======================================================================================
$(document).ready(function () {
    $('.slide-two').owlCarousel({
        loop: true,

        nav: true,
        navText: [
            '<img src="assets/img/projects-slider/arrow-left.svg" alt="arrow-left">',
            '<img src="assets/img/projects-slider/arrow-right.svg" alt="arrow-righ">',
        ],
        //autoplay: true, //Автозапуск слайдера
        center: true,
        startPosition: 1,
        dots: false,
        smartSpeed: 2000,

        responsive: {
            320: {
                items: 1,
                margin: 10,
            },
            425: {
                items: 1,
                margin: 10,
            },
            768: {
                items: 1,
            },
            1024: {
                items: 1,
            },
            1440: {
                items: 1,
            },
        },
    });
});
// ==========================================================================================
// =======================================================================================
$(document).ready(function () {
    $('.slide-three').owlCarousel({
        loop: true,
        margin: 65,

        autoplay: true,
        center: true,

        dots: false,
        smartSpeed: 2000,
        autoplayTimeout: 5000,

        responsive: {
            320: {
                items: 1,
            },
            425: {
                items: 1,
                margin: 0,
            },
            768: {
                items: 2,
                margin: 10,
                center: false,
            },
            1024: {
                items: 3,
            },
            1440: {
                items: 3,
            },
        },
    });
});
// ==========================================================================================
// =======================================================================================
$(document).ready(function () {
    $('.slide-four').owlCarousel({
        loop: true,
        margin: 30,

        autoplay: true,
        center: true,
        startPosition: 1,
        dots: false,
        smartSpeed: 2000,
        autoplayTimeout: 5000,

        responsive: {
            320: {
                items: 1,
            },
            425: {
                items: 1,
                margin: 0,
            },
            768: {
                items: 2,
                center: false,
            },
            1024: {
                items: 3,
            },
            1440: {
                items: 3,
            },
        },
    });
});
// ==========================================================================================
