"use strict";

// const now = new Date();

// console.dir(now);
// console.log("getFullYear", now.getFullYear());
// console.log("getMonth", now.getMonth());
// console.log("getDate", now.getDate());
// console.dir("День недели", now.getDay());
// console.log("getHours", now.getHours());
// console.log("getUTCHours", now.getUTCHours());
// console.log("getMinutes", now.getMinutes());
// console.log("getSeconds", now.getSeconds());

// console.log("getTime", now.getTime());
// console.log("getTimezoneOffset", now.getTimezoneOffset());


let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(end - start);