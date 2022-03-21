'use strict';

function hello() {
    console.log("Hello world!");
}
hello();

function hi() {
    console.log("Say hi");
}
hi();

const arr = [1, 222, 23, 4, 15, 6, 27, 8, 9];
const sorted = arr.sort((a, b) => a - b);

console.log(sorted);