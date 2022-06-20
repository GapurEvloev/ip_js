'use strict';

const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector(".heart");
const wrapper = document.querySelector(".wrapper");


// console.dir(box);
// console.log(box);
// console.log(btns);
// console.log(circles);
// console.log(hearts);

box.style.backgroundColor = "blue";
box.style.width = "500px";
box.style.cssText += "height: 300px; border: 3px solid red";

hearts.forEach(element => {
  element.style.backgroundColor = "violet";
});

const div = document.createElement("div");
// const text = document.createTextNode("bla bla bla");

div.classList.add("black");

// wrapper.append(div); // add first
// wrapper.prepend(div); // add last

// box.before(div);
// box.after(div);

// circles[1].remove();

circles[1].replaceWith(div);

div.innerHTML = "<h1>Hello world!</h1>";
div.textContent = "<h1>Hello world!</h1>";
div.innerText = "<h1>Hello world!</h1>";


div.insertAdjacentHTML("beforebegin", "<h1>Hello world!</h1>");
div.insertAdjacentHTML("afterbegin", "111");
div.insertAdjacentHTML("beforeend", "222");
div.insertAdjacentHTML("afterend", "333");