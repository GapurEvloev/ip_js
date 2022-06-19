"use strict";

// 31 start
function first() {
  setTimeout(() => {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(lang);

  callback();
}

learnJS("JS", () => {
  console.log("callback");
});

function done() {
  console.log("I finished lesson 31");
}

learnJS("JS", done);

// 31 end


// 32 Объекты, деструктуризация объектов (ES6) start
const options = {
  name: "Test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red"
  },
  makeTest() {
    console.log(this. height);
  }
};
options.makeTest();

const {border, bg} = options.colors;

console.log(border, bg);
// console.log(options); 
// console.log(options.name); // => Test

// delete options.name;
// console.log(options);

// let counter = 0;
// for (const key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (const i in options[key]) {
//       console.log(`Nested object property ${i} has value ${options[key][i]}`);
//     }
//     counter++;
//   } else {
//     console.log(`Property ${key} has value ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);

console.log(Object.keys(options).length);
// 32 Объекты, деструктуризация объектов (ES6) end