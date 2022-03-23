"use strict";

const btn = document.querySelector("#btn");
const btns = document.querySelectorAll("button");
const overlay = document.querySelector(".overlay");

// btn.onclick = () => console.log("onclick 1"); 
// btn.onclick = () => console.log("onclick 2"); 

// btn.addEventListener("click", () => {
//     console.log("Click btn");
// });

// btn.addEventListener("mouseenter", () => {
//     console.log("mouseenter btn");
// });

let i = 0;
const removeBtn = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    i++;
    if(i == 1) {
        btn.removeEventListener("click", removeBtn);
    }
};

btn.addEventListener("click", removeBtn);
overlay.addEventListener("click", removeBtn);

const link = document.querySelector('a');

link.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(e.target.textContent);
    console.log(e.target.href);
});

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.target); 
    }, {once: true});
});