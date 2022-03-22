'use strict';

let box = document.getElementById("box");
let btns = document.getElementsByTagName("button");
let circles = document.getElementsByClassName('circle');
let hearts = document.querySelectorAll('.heart');
let heart = document.querySelector('.heart');
const wrapper = document.querySelector(".wrapper");

console.dir(box);

box.style.backgroundColor = "green";
box.style.width = "500px";
box.style.cssText = "background-color:green;border:3px solid red; height:500px;width:500px";
circles[1].style.background = "red";
btns[0].style.borderRadius = "50%";

for(let i = 0; i < btns.length; i++) {
    btns[i].style.background = "purple";
}

hearts.forEach(item => {
    item.style.background = "aqua";
});

const div = document.createElement("div");
const text = document.createTextNode("I was here");

div.classList.add("black");
// wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);

// heart.before(div);
// heart.after(div);
// btns[btns.length - 1].remove();
// btns[btns.length - 1].remove();
// hearts[0].replaceWith(circles[0]);

wrapper.insertBefore(div, hearts[1]);
wrapper.removeChild(hearts[1]);
wrapper.replaceChild(circles[0], hearts[hearts.length - 1]);

div.innerHTML = "<h3>Hello world</h3>";
// div.textContent = "Hello world";

div.insertAdjacentHTML("beforebegin", "<h3>Hello there</h3>");
div.insertAdjacentHTML("afterbegin", "<h3>Hello there</h3>");
div.insertAdjacentHTML("beforeend", "<h3>Hello there</h3>");
div.insertAdjacentHTML("afterend", "<h3>Hello there</h3>");