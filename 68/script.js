"use strict";

// const now = new Date();

// console.log(now.setHours(18, 40));
// console.log(now);

// console.log(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes()); // 2022
//         //  2022 5 26 23 5
// console.log(now.getDay()); // => 0 - Sunday
// console.log(now.getUTCHours()); // => 20 -- -3 hours from Moscow time

// console.log(now.getTimezoneOffset()); // => -180
// console.log(now.getTime()); // => 1656274680264 - milliseconds


// // console.log(now); // 2022-06-26T19:56:28.506Z
// //                   // year month day hours:minutes:seconds.milliseconds

// const now2 = new Date("2022-06-26"); // 2022-06-26T00:00:00.000Z
// const now3 = new Date(2022, 6, 26, 20); // 2022-07-26T17:00:00.000Z
// const now4 = new Date(1656274680264); // 2022-06-26T20:18:00.264Z
// console.log(now2);
// console.log(now3);
// console.log(now4);

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();

console.log(end - start);