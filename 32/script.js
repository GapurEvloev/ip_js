// console.log(document); // весь документ
// console.log(document.documentElement); // html
// console.log(document.head); // head
// console.log(document.body); // body

// console.log(document.childElementCount); //
// console.log(document.childNodes); //
// console.log(document.children); //
// console.log(document.head.childElementCount); //
// console.log(document.body.childElementCount); //
// console.log(document.documentElement.childElementCount); //
// console.log(document.body.childNodes); //
// console.log(document.body.children); //
// console.log(document.body.firstChild); //
// console.log(document.body.lastChild); //

// console.log(document.querySelector("#current").parentElement); //
// console.log(document.querySelector("#current").parentNode); //

// console.log(document.querySelector("#current").parentElement.parentElement); //
// console.log(document.querySelector("#current").parentNode.parentNode); //

console.log(document.querySelector("[data-current='3']").nextElementSibling); // li
console.log(document.querySelector("[data-current='3']").nextSibling); // #text
console.log(document.querySelector("[data-current='3']").previousElementSibling); // li
console.log(document.querySelector("[data-current='3']").previousSibling); // #text

console.log(document.querySelector(".wrapper").children);
console.log(document.querySelector(".first").children);
console.log(document.querySelector(".second").children);
console.log(document.querySelector(".third").children);