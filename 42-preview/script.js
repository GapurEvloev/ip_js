'use strict';

// document 
// windon
// screen

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const boxClientWidth = box.clientWidth;
const boxClientHeight = box.clientHeight;
const boxOffsetWidth = box.offsetWidth;
const boxOffsetHeight = box.offsetHeight;

const boxScrollWidth = box.scrollWidth;
const boxScrollHeight = box.scrollHeight;
const boxScrollOffsetWidth = box.scrollOffsetWidth;
const boxScrollOffsetHeight = box.scrollOffsetHeight;

console.log("boxClientWidth", boxClientWidth);
console.log("boxClientHeight", boxClientHeight);
console.log("boxOffsetWidth", boxOffsetWidth);
console.log("boxOffsetHeight", boxOffsetHeight);
console.log("boxScrollWidth", boxScrollWidth);
console.log("boxScrollHeight", boxScrollHeight);

btn.addEventListener("click", () => {
    box.style.height = box.scrollHeight + "px";
    // console.log(box.scrollTop = 0);
});

console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);
console.log(box.getBoundingClientRect().left);

const style = window.getComputedStyle(box);
console.log(style);
console.log(style.display);
console.log(style.width);
console.log(style.background);

console.log(document.documentElement.scrollTop); // работает 
// console.log(window.scrollTop); // не работает

console.log(window.scrollBy(0, 400));
console.log(window.scrollTo(0, 400));