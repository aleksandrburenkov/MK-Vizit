'use strict';
const navBtn = document.querySelector('.header__toggle');

const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.header');
const modals = document.querySelector('.header__modal-menu');

const scrollHeader = document.querySelector('.header__container');
let scrollHeaderH = document.querySelector('.header__container ').clientHeight;
const topContainer = document.querySelector('.top-container');
const headerLogo = document.querySelector('.header__logo');

const headerMenu = document.querySelector('.header__menu');
const headerToggle = document.querySelector('.header__toggle ');
const bottomContainerFixed = document.querySelector('._bottom-container-fixed');

const headerLogoFised = document.querySelector('.header__logo-fixed').classList;

// ================PROGECT CARD================================================================
navBtn.onclick = function () {
    nav.classList.toggle('header__mobile');
    menuIcon.classList.toggle('menu-icon-active');
    modals.classList.toggle('_modal-active');
    headerMenu.classList.toggle('none');
    document.body.classList.toggle('no-scroll');
    if (
        scrollY > 150 &&
        scrollHeader.classList.contains('bottom-container-bg')
    ) {
        scrollHeader.classList.remove('bottom-container-bg');
    } else {
        scrollHeader.classList.add('bottom-container-bg');
    }

    if (scrollY < 150) {
        scrollHeader.classList.remove('bottom-container-bg');
    }
};

//=================================TAB SERVISES============================================
let tab = function () {
    const tabNav = document.querySelectorAll('.tabs-nav__item');
    const tabContent = document.querySelectorAll('.tabs-content__item');
    let tabName;

    tabNav.forEach((item) => {
        item.addEventListener('click', selectTabNav);
    });
    function selectTabNav() {
        tabNav.forEach((item) => {
            item.classList.remove('is-active');
        });

        this.classList.add('is-active');

        tabName = this.getAttribute('data-tab-name');

        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach((item) => {
            item.classList.contains(tabName)
                ? item.classList.add('is-active')
                : item.classList.remove('is-active');
        });
    }
};
tab();
//=================================TAB SERVISES============================================
//=================================FIXED HEADER============================================

window.addEventListener('scroll', function (e) {
    if (scrollY > 150) {
        scrollHeader.classList.add('_bottom-container-fixed');
        topContainer.style.display = 'none';
        topContainer.style.pointerEvents = 'none';
        headerLogoFised.add('header__logo-fixed-all');
        scrollHeader.classList.add('bottom-container-bg');
        headerLogo.style.display = 'none';
        headerLogo.style.pointerEvents = 'none';
    } else {
        scrollHeader.classList.remove('_bottom-container-fixed');
        topContainer.style.display = '';
        topContainer.style.pointerEvents = 'all';
        headerLogoFised.remove('header__logo-fixed-all');
        headerLogo.style.display = 'block';
        headerLogo.style.pointerEvents = 'all';
        scrollHeader.classList.remove('bottom-container-bg');
    }
});

//=================================MODAL-ORDER============================================
const btnOrder = document.querySelector('.page-order-calculation-block__btn');
const modalsOrder = document.querySelector('.modal-order');
const modalsClose = document.querySelector('.modal-close-wrapper');
const modalsBtn = document.querySelectorAll('._modal-open');
const modales = document.querySelectorAll('.modal-order');

function openModal(elem) {
    elem.classList.add('_modal-active');
    document.body.classList.add('no-scroll');
}

function closeModal(e) {
    if (
        e.target.classList.contains('modal-close-wrapper') ||
        e.target.classList.contains('modal-close') ||
        e.target.classList.contains('modal-bg')
    ) {
        e.target.closest('.modal-order').classList.remove('_modal-active');
        document.body.classList.remove('no-scroll');
    }
}
modalsBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let data = e.target.dataset.modalOpen;

        modales.forEach((modal) => {
            if (modal.dataset.modal == data) {
                openModal(modal);
            }
        });
    });
});

modales.forEach((modal) => {
    modal.addEventListener('click', (e) => closeModal(e));
});
