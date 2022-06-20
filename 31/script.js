"use strict";

// // 31 start
// function first() {
//   setTimeout(() => {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(lang);

//   callback();
// }

// learnJS("JS", () => {
//   console.log("callback");
// });

// function done() {
//   console.log("I finished lesson 31");
// }

// learnJS("JS", done);

// // 31 end

// // 32 Объекты, деструктуризация объектов (ES6) start
// const options = {
//   name: "Test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red"
//   },
//   makeTest() {
//     console.log(this. height);
//   }
// };
// options.makeTest();

// const {border, bg} = options.colors;

// console.log(border, bg);
// // console.log(options);
// // console.log(options.name); // => Test

// // delete options.name;
// // console.log(options);

// // let counter = 0;
// // for (const key in options) {
// //   if (typeof(options[key]) === 'object') {
// //     for (const i in options[key]) {
// //       console.log(`Nested object property ${i} has value ${options[key][i]}`);
// //     }
// //     counter++;
// //   } else {
// //     console.log(`Property ${key} has value ${options[key]}`);
// //     counter++;
// //   }
// // }
// // console.log(counter);

// console.log(Object.keys(options).length);
// // 32 Объекты, деструктуризация объектов (ES6) end

// 33 Массивы и псевдомассивы start
const arr = [1, 2, 3, 4, 5, 6];

// arr.pop();
// arr.push(7);

// for (const value of arr) {
//   console.log(value);
// }
// for (const key in arr) {
//   console.log(arr[key]);
// }

// arr.forEach((item, i, arr) => {
//   console.log(`${i}: ${item} into array ${arr}`);
// });

// const stringTest = prompt("", "");
// const products = stringTest.split(", ");
// console.log(products);
// products.sort(compareNum);
// console.log(products.join("\n"));

// function compareNum(a, b) {
//   return a - b;
// }

// 33 Массивы и псевдомассивы end

// 35 Передача по ссылке или по значению, Spread оператор (ES6-ES9) start
// let a = 5;
// let b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

const obj34 = {
  a: 5,
  b: 1,
};

const copyObj34 = obj34;
copyObj34.a = 10;
obj34.b = 20;
console.log(copyObj34, obj34); // => { a: 10, b: 20 } { a: 10, b: 20 }

//  
function copyObj(obj) {
  let objCopy = {};

  for (const key in obj) {
    objCopy[key] = obj[key];
  }

  return objCopy;
}

const numbers = {
  a: 1,
  b: 2,
  c: {
    ca: 1,
    cb: 2,
  },
};

const addObj = {
  ac: 100,
  bc: 200
};

const newNumbers = copyObj(numbers);
const newNumbers2 = Object.assign({}, numbers);
const newNumbers3 = Object.assign(numbers, addObj);

console.log(newNumbers === numbers);
newNumbers2.a = 100;
console.log(newNumbers);
console.log(newNumbers2);
console.log(newNumbers3);
console.log(newNumbers2 === newNumbers3);

// 
const oldArray = [1, 2, 3, 4, 5];
const newArray = oldArray.slice();

console.log(newArray == oldArray);


// spread
const video = ['yt', 'vimeo', 'rt', 'another'];
const hostings = [...video];
const blogs = ['medium', 'dzen', 'lj'];
const internet = [...video, ...hostings, ...blogs];

console.log(hostings);
console.log(hostings === video);
console.log(internet);

// 35 Передача по ссылке или по значению, Spread оператор (ES6-ES9) end


// практика после 35
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
        js: '20%',
        php: '10%'
      },
      exp: '1 month'
  },
  showAgeAndLangs(obj) {
    let {languages} = obj.skills;
    let {age} = obj;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(lang => {
      str += `${lang.toUpperCase()}`;
    });

    return str.trim();
  }
};

function showExperience(plan) {
  let {exp} = plan.skills;
  return exp;
}

function showProgrammingLangs(plan) {
  let {programmingLangs} = plan.skills;
  let result = '';

  for (const key in programmingLangs) {
    result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }

  return result;
}

console.log(showProgrammingLangs(personalPlanPeter));



// ///////////////////////////////////////////
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  if(arr.length === 0) {
    return `Семья пуста`;
  }
  // let str = '';
  // for (const key in arr) {
  //   str += `${arr[key]} `;
  // }

  // return `Семья состоит из: ${str}`;

  return `Семья состоит из: ${arr.join(" ")} `;
}
// str += 

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  arr.forEach(item => {
    console.log(item.toLowerCase())
  });
}

console.log(standardizeStrings(favoriteCities));


// ///////////////////////////////////////////


const someString = 'This is some strange string';

function reverse(str) {
  if(typeof str !== "string") {
    return "Ошибка!";
  }
  let tStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    tStr += str[i];
  }
  return tStr;
}


function reverse2(str) {
  return str.split("").reverse().join("");
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  if (arr.length === 0) {
    return "Нет доступных валют";
  }

  let tStr = "Доступные валюты:\n";
  arr.filter(curr => curr !== missingCurr).forEach(curr => {
    tStr += `${curr}\n`;
  });

  return tStr;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"));

// практика после 35 end
