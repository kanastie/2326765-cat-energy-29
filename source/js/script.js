// -- Мобильное меню

let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

// -- Слайдер

let slider = document.querySelector('.slider');
let before = slider.querySelector('.slider__img-wrapper--before');
let beforeImg = slider.querySelector('.slider__img-wrapper--before img');
let after = slider.querySelector('.slider__img-wrapper--after');
let devider = slider.querySelector('slider__delimiter');

const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  let width = slider.offsetWidth;
  beforeImg.style.width = `${width}px`;
});


const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));

  if (screen > 320 && screen < 768) {
    before.style.width = `${shift / 2}px`;
    devider.style.left = `${shift / 2}%`;
  } else {
    before.style.width = `${shift}px`;
    devider.style.left = `${shift}%`;
  }

  before.style.backgroundColor = 'transparent';
  after.style.backgroundColor = 'transparent';
};

const pauseEvents = (evt) => {
  evt.stopPropagation();
  evt.preventDefault();
  return false;
};

slider.addEventListener('mousedown', () => {
  isActive = true;
});

slider.addEventListener('mouseup', () => {
  isActive = false;
});

slider.addEventListener('mouseleave', () => {
  isActive = false;
});

slider.addEventListener('mousemove', (evt) => {
  if (!isActive) {
    return;
  }

  let x = evt.pageX;

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(evt);
});


slider.addEventListener('touchstart', () => {
  isActive = true;
});

slider.addEventListener('touchend', () => {
  isActive = false;
});

slider.addEventListener('touchend', () => {
  isActive = false;
});

slider.addEventListener('touchmove', (evt) => {
  if (!isActive) {
    return;
  }

  let x;

  for (let i = 0; i < evt.changeTouches.lenght; i++) {
    x = evt.changeTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(evt);
});
