// 'use strict';
//
// const box = document.querySelector('.box');
// const block = document.querySelector('.block');
//
// const newHeight = 0;
// const newWidth = 400;
//
// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
// }
//
// changeParams(box, newHeight, newWidth);
//
//
// // 54 start
// let userName = null;
// console.log(userName ?? "User");
//
// console.log(block);
// console.log(block?.textContent);
//
// const userData = {
//     name: "Sam",
//     age: null,
//     sayHi() {
//         console.log("Hi");
//     }
// };
// userData.sayHi();
// userData.sayBye?.();
// console.log(userData.skills?.js);
// // 54 end

// 55 start
const boxes = document.querySelectorAll(".box");
let boxesGet = document.getElementsByClassName("box");

// // boxesGet = Array.from(boxesGet);
//
// boxes[0].remove();
// boxesGet[0].remove();
//
// boxesGet = Array.from(boxesGet);
//
// console.log(boxes);
// console.log(boxesGet);

boxes.forEach(box => {
    if (box.matches(".this")) {
        console.log(box);
    }
});

console.log(boxes[0].closest(".wrapper"));
// 55 end
