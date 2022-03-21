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

const numbers2 = {...numbers};

numbers.a = 100;
console.log(numbers);
console.log(numbers2);

numbers.c.x = 20;
console.log(numbers);
console.log(numbers2);

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

const oldArray = ['a', 'b', 'c', 'd'];
const newArray = oldArray.slice();
newArray.push("dd");
console.log(oldArray);
console.log(newArray);

const video = ["youtube", "vimeo", "twitch"],
      blogs = ["livejournal", "medium", "devto"],
      internet = [...video, ...blogs, "twitter", "facebook"];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const nums = [1, 2, 3];

log(...nums);

const array = ["a", "b", "c"];
const newArray2 = [...array];