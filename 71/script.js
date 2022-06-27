"use strict";

// 71 Параметры документа, окна и работа с ними start
/**
 * document
 * window
 * screen
 */

// console.dir(document);
// console.dir(window);
// console.dir(screen);

const box = document.querySelector('.box');
const boxClientWidth = box.clientWidth;
const boxClientHeight = box.clientHeight;
const boxOffsetWidth = box.offsetWidth;
const boxOffsetHeight = box.offsetHeight;
const boxOScrollHeight = box.scrollHeight;

console.log(boxClientWidth, boxClientHeight);
console.log(boxOffsetWidth, boxOffsetHeight);
console.log(boxOScrollHeight);

// 71 Параметры документа, окна и работа с ними end


document.querySelector(".wrapper button").addEventListener("click", () => {
  // box.style.height = boxOScrollHeight + "px";
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const boxStyle = window.getComputedStyle(box);

console.log(boxStyle);
console.log(boxStyle.display); // => block


console.log(document.documentElement.scrollTop);
window.scrollBy(0, 400); // от текущей позиции
window.scrollTo(0, 400); // от начала страницы  