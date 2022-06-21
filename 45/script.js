"use strict";

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// ======================
// let i = 0;
// const removeEl = (event) => {
//   console.log(event.target);
//   i++;
//   if (i === 1) {
//     btn.removeEventListener("mouseup", removeEl);
//   }
// };
// =======================

// =======================
const removeEl2 = (event) => {
  console.log(event.currentTarget);
  console.log(event.type);
};
// =======================

// btn.addEventListener("click", event => {
//   console.log("click");
// });

// btn.addEventListener("mouseenter", event => {
//   console.log("mouseenter");
// });

// btn.addEventListener("mouseup", removeEl);
btn.addEventListener("mouseup", removeEl2);
overlay.addEventListener("mouseup", removeEl2);