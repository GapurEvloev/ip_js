'use strict';

let a = 5, 
    b;

    b = a;
a = a + 5;

b = b + 5;

console.log("a:", a);
console.log("b:", b);

const obj = { 
    a: 5, 
    b: 1
};

const copy = obj;
copy.a = 10;

console.log(obj);
console.log(copy);

function copyF(mainObj) {
    let copyObj = {};
    for(let key in mainObj) {
        copyObj[key] = mainObj[key];
    }

    return copyObj;
}

let numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyF(numbers);
newNumbers.a = 100;
newNumbers.c.x = 20;
console.log(newNumbers);
console.log(numbers);

const addObj = {
    d: 12,
    e: 33,
};

console.log(Object.assign(numbers, addObj));
const addClone = Object.assign({}, addObj);