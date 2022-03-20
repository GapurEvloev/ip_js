'use strict';

let str = "text";
const arr = [1, 2, 3, 4];

// console.log(str.length);
// console.log(arr.length);
// console.log(str[2]);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.includes("x"));
console.log(str);

const fruit = "Fruit";

console.log(fruit.indexOf("it"));
console.log(fruit.includes("it"));


// const logg = "Hello world!";
// console.log(logg.slice(6));
// console.log(logg.slice(0,5));
// console.log(logg.substring(0, 5));
// console.log(logg.substr(0, 5));


// // Math.random()
// // Math.round(Math.random);
// console.log(parseInt("12.2px"));
// console.log(parseFloat("12.233px"));


// ===============
let name1 = "John";

function sayHi() {
    console.log("Hi, " + name1);
}

name1 = "Pete";
sayHi();

// // ===============

// function makeWorker() {
//     let name = "Pete";
  
//     return function() {
//       console.log(name);
//     };
//   }
  
// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work(); 