'use strict';

const box = document.querySelector(".box"),
      btn = document.querySelector("button");

const width = box.clientWidth;
const height = box.clientHeight;

const offsetWidth = box.offsetWidth;
const offsetHeight = box.offsetHeight;

const scrollHeight = box.scrollHeight;
const scrollWidth = box.scrollWidth;

// console.log(offsetWidth, offsetHeight, scrollHeight, scrollWidth)

btn.addEventListener('click', () => {
    box.style.height = scrollHeight + "px";
    // console.log(box.scrollTop)
    console.log(box.getBoundingClientRect())
    console.log(document.documentElement.scrollTop);
});

const style = window.getComputedStyle(box, ":after");

// console.log(style.width);
console.log(document.documentElement.scrollTop);

window.scrollBy(0, 400) // проскроллить относительрно текущей позиции на 400 
window.scrollTo(0, 400) // относильно верха страницы