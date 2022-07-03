'use strict';

// // localStorage.setItem('user', 'gapur');
// // console.log(localStorage.getItem('user'));
// // localStorage.clear();
// // console.log(localStorage.getItem('user'));


// const checkbox = document.querySelector("#checkbox"),
//       form = document.querySelector("form"),
//       change = document.querySelector("#color");

// if(localStorage.getItem("checkboxIsChecked") == "true") {
//   checkbox.checked = true;
// }
// if (localStorage.getItem("bg") === "changed") {
//   form.style.backgroundColor = "red";
// }

// checkbox.addEventListener("change", () => {
//   localStorage.setItem("checkboxIsChecked", true);
// });

// change.addEventListener("click", (e) => {
//   if (localStorage.getItem("bg") === "changed") {
//     localStorage.removeItem("bg");
//     form.style.backgroundColor = "white";
//   } else {
//     localStorage.setItem("bg", "changed");
//     form.style.backgroundColor = "red";
//   }
// });

// const persone = {
//   name: "Alex",
//   age: 20,
// };

// const serPersone = JSON.stringify(persone);
// localStorage.setItem("Alex", serPersone);
// 95 end

// 96 start
// new RegExp("pattern", "flags");
// /pattern/f
/** flags 
 * i - независимо от регистра 
 * g - global
 * m - multiline
 */

/** regexp classes
 * \d - digits цифры      ans.match(/\d/);
 * \w - words/characters  ans.match(/\w/);
 * \s - spaces пробелы    ans.match(/\s/);
 */

/** regexp обратные классы
 * \D - !digits/!цифры      ans.match(/\d/);
 * \W - !words/!characters  ans.match(/\w/);
 * \S - !spaces/!пробелы    ans.match(/\s/);
 */

// const ans = prompt("Your name ...");

const reg = /n/ig;

const str = "My name is R2D2";

console.log(str.match(/\w\d\w\d/i));
// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt("Please enter your password...");

// console.log(pass.replace(/./g, "*"));
// console.log(pass.replace(/\./g, "*"));

// console.log("12-54-30".replace(/-/g, ":"));



// 96 end