'use strict';

// =======================================================================================
$(document).ready(function () {
    $('.slide-one').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 20, //Отступ от картино если выводите больше 1
        nav: false, //Отключил навигацию
        // autoplay: true, //Автозапуск слайдера
        // center: true,
        //startPosition: 1,
        dots: true,
        dotsEach: true,
        smartSpeed: 3000, //Время движения слайда
        autoplayTimeout: 5000, //Время смены слайда

        responsive: {
            //Адаптация в зависимости от разрешения экрана
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
        loop: true, //Зацикливаем слайдер
        //margin: 30, //Отступ от картино если выводите больше 1
        nav: true, //Отключил навигацию
        navText: [
            '<img src="assets/img/projects-slider/arrow-left.svg" alt="arrow-left">',
            '<img src="assets/img/projects-slider/arrow-right.svg" alt="arrow-righ">',
        ],
        //autoplay: true, //Автозапуск слайдера
        center: true,
        startPosition: 1,
        dots: false,
        smartSpeed: 2000, //Время движения слайда
        //autoplayTimeout: 5000, //Время смены слайда
        //autoHeight: true,
        responsive: {
            //Адаптация в зависимости от разрешения экрана
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
        loop: true, //Зацикливаем слайдер
        margin: 65, //Отступ от картино если выводите больше 1

        autoplay: true, //Автозапуск слайдера
        center: true,
        //startPosition: 1,
        dots: false,
        smartSpeed: 2000, //Время движения слайда
        autoplayTimeout: 5000, //Время смены слайда

        responsive: {
            //Адаптация в зависимости от разрешения экрана
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
        loop: true, //Зацикливаем слайдер
        margin: 30, //Отступ от картино если выводите больше 1

        autoplay: true, //Автозапуск слайдера
        center: true,
        startPosition: 1,
        dots: false,
        smartSpeed: 2000, //Время движения слайда
        autoplayTimeout: 5000, //Время смены слайда

        responsive: {
            //Адаптация в зависимости от разрешения экрана
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
