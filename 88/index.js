"use strict";

// 88. Методы перебора массивов start
// // Filter
// const names = ["alex", "alice", "ann", "john", "james", "rose", "robert"];

// const shortNames = names.filter(name => name.length < 5);

// console.log(shortNames);

// // map
// const answers = ["ALEX", "ALICE", "huaN", "RoodiE"];

// const lCAnswers = answers.map(answer => answer.toLowerCase());

// console.log(lCAnswers);

// // every/some
// const some = [4, "sdlf", "asdf"];

// console.log(some.some(item => typeof(item) === "number")); // true
// console.log(some.every(item => typeof(item) === "number")); // false

// // // reduce
// // const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// // const result = arr.reduce((sum, current) => sum + current);

// // console.log(result);

// const arrSrting = ["object", "string", "boolean", "number"];

// const resultString = arrSrting.reduce((sum, current) => `${sum}, ${current}`, "Types:");

// console.log(resultString);


// example
const object = {
  ien: "person",
  any: "person",
  dog: "animal",
  cat: "animal",
};

const objectEntries = Object.entries(object)
  .filter(item => item[1] === "person")
  .map(item => item[0]);

console.log(objectEntries);
// 88. Методы перебора массивов end