"use strict";

// console.log(document);
// console.log("documentElement:", document.documentElement);
// console.log("documentURI:", document.documentURI);
// console.log("domain:", document.domain);
// console.log("body:", document.body);
// console.log("head:", document.head);
// console.log("baseURI:", document.baseURI);
// console.log("location:", document.location);

// body
// console.log("children:", document.body.children);
// console.log("childNodes:", document.body.childNodes);
// console.log("childElementCount:", document.body.childElementCount);

// console.log(document.body.firstChild); // => #text
// console.log(document.body.firstElementChild); // => script.js
// console.log(document.body.lastChild); // => script.js
// console.log(document.body.lastElementChild); // => script.js

// console.log(document);
// console.log(document.querySelector("#current").parentElement.parentElement);
// console.log(document.querySelector("#current").parentNode.parentNode);
// console.log(document.querySelector("[data-current='3']").nextElementSibling);
// console.log(document.querySelector("[data-current='3']").nextSibling);
console.log(document.querySelector(".second ul").childNodes);
console.log(document.querySelector(".second ul").children);

for (const iterator of document.querySelector(".second ul").children) {
  iterator.classList.add("li");
  console.log(iterator);
}