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

// 88. Exercises start
const films = [
  {
      name: 'Titanic',
      rating: 9
  },
  {
      name: 'Die hard 5',
      rating: 5
  },
  {
      name: 'Matrix',
      rating: 8
  },
  {
      name: 'Some bad film',
      rating: 4
  }
];

function showGoodFilms(arr) {
  return arr.filter(item => item.rating >= 8);
}

function showListOfFilms(arr) {
  return arr.map(item => item.name).join(", ");
}

function setFilmsIds(arr) {
  return arr.map((item, i) => {
    item.id = i;
    return item;
  });
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every(item => item.hasOwnProperty("id"));
}

// =================================================================================================

const funds = [
  {amount: -1400},
  {amount: 2400},
  {amount: -1000},
  {amount: 500},
  {amount: 10400},
  {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
  return data.filter(item => item.amount > 0).reduce((sum, current) => sum + current.amount, 0);
};

const getTotalIncomeAmount = (data) => {
  return data.some(item => item.amount < 0) ? data.reduce((sum, current) => sum + current.amount, 0) : getPositiveIncomeAmount(data);
};

// 88. Exercises end