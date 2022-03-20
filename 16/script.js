'use strict';

let num;

function showFirstMassage(text) {
    console.log(text);
    num = 20;
}

showFirstMassage("Hello");
console.log(num);

function calc(a, b) {
    return a + b;
}

console.log(calc(4, 3));


function ret() {
    let num = 50;
    return num;
}

let anNum = ret();
console.log(anNum);

let anNum2 = function() {
    let num = 60;
    return num;
};

console.log(anNum2());