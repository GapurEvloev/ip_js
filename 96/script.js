'use strict';

// localStorage.setItem('user', 'gapur');
// console.log(localStorage.getItem('user'));
// localStorage.clear();
// console.log(localStorage.getItem('user'));


const checkbox = document.querySelector("#checkbox"),
      form = document.querySelector("form"),
      change = document.querySelector("#color");

if(localStorage.getItem("checkboxIsChecked") == "true") {
  checkbox.checked = true;
}
if (localStorage.getItem("bg") === "changed") {
  form.style.backgroundColor = "red";
}

checkbox.addEventListener("change", () => {
  localStorage.setItem("checkboxIsChecked", true);
});

change.addEventListener("click", (e) => {
  if (localStorage.getItem("bg") === "changed") {
    localStorage.removeItem("bg");
    form.style.backgroundColor = "white";
  } else {
    localStorage.setItem("bg", "changed");
    form.style.backgroundColor = "red";
  }
});

const persone = {
  name: "Alex",
  age: 20,
};

const serPersone = JSON.stringify(persone);
localStorage.setItem("Alex", serPersone);