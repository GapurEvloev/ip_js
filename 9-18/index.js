"use strict";

// // a = 15; // error
// let number1 = 5;
// const leftBorderWidth = 1;

// // leftBorderWidth = 3; // error

// {
//   let result = 50;
// }

// // console.log(result); // error

// // 9 end ////////////////////////////////////////////////////////////////////////////////////

// // 10 start
// const carBodyWidth = 1000;
// const carBodyHeight = 2000;

// console.log(`Car width is ${carBodyWidth}, Car height is ${carBodyHeight}`);

// //
// ["bla", "bla2"].map(item => {
//   console.log(item);
// });

// // request
// let data;
// let response;

// ///
// let userName = "John";
// let userNumber = 25;
// userNumber = 24;

// // 10 end ////////////////////////////////////////////////////////////////////////////////////

// // 11. Классификация типов данных в JavaScript  start ////////////////////////////////////////
// // JavaScript data types
// // Primitive values
//   /**
//    * 1. number
//    * 2. string
//    * 3. boolean
//    * 4. null
//    * 5. undefined
//    * 6. BigIng
//    * 7. Symbol
//    */
// // 8. Objects
//   // objects
//     // {}
//   // special objects
//     /**
//      * arrays
//      * functions
//      * Data
//      * regexp
//      * errors
//      */

// // nums
// console.log(4/0); //Infinity
// console.log('string' * 2); //NaN

// // string
// const string = '';
// const string2 = "";
// const string3 = ``;

// // boolean
// // true;
// // false;

// // objects

// const obj = {
//   name: "John",
//   age: 32,
//   married: false,
//   siblings: [
//     {
//       name: "Jane",
//       age: 28,
//       married: true,
//     },
//     {
//       name: "Jack",
//       age: 25,
//       married: false
//     }
//   ]
// };

// let name1 = "name";

// console.log(obj.name); // => John
// console.log(obj["name"]); // => John
// console.log(obj[name1]); // => John
// // 11. end ///////////////////////////////////////////////////////////////////////////////////

// // 12. (д) Разница между объектами и массивами и неочевидные синтаксические возможности start //////////////////////
// const arr = [1, 2, 3];
// const obj = { a: 1, b: 2, c: 3 };

// obj["d"] = 4;
// console.log(obj["d"]);
// obj.e = 4;
// console.log(obj.e);

// // 12. (д) Разница между объектами и массивами и неочевидные синтаксические возможности end //////////////////////


// // 13. Простое общение с пользователем start //////////////////////////////////////////////////////////////////
// alert("Hello!");
// let result = confirm("Are you here?");

// const answer = prompt("How old are you?", "");
// console.log(typeof answer);
// console.log(typeof(answer));
// 13. Простое общение с пользователем end   //////////////////////////////////////////////////////////////////


// 15. Операторы в JS start   //////////////////////////////////////////////////////////////////
console.log("arr" + " - object"); // => arr - object
console.log(4 + " - object"); // => 4 - object
console.log("stroke" + 3); // => stroke3 
console.log(1 + "3"); // => 13 
console.log("1" + 3); // => 13 

console.log(+"stroke" + 3); // => NaN
console.log(+"1" + 3); // => 4 

let inc = 1;
console.log(inc++); // => 1
console.log(inc); // => 2
console.log(++inc); // => 3
let decr = 1;
console.log(decr--); // => 1
console.log(decr); // => 0
console.log(--decr); // => -1

console.log(5%2); // => 1
// 15. Операторы в JS end     //////////////////////////////////////////////////////////////////

