'use strict';

// числа
let num = 42;

let num2 = 4.2;

console.log(4/0); // Infinity
console.log(-4/0); // -Infinity
console.log("first"/2); //NaN


// строки
const person = "Suleym";
const person2 = 'Suleym';
const person3 = `Suleym`;

// boolean
let bool1 = true;
let bool2 = false;

// null
console.log(something); //будет ошибка, тип данных null
console.log(null); //выведется null


// undefined
let und;
console.log(und); // => undefined

// objects
const object = {
    name: "Russel",
    age: 22,
    isMarried: false,
};

console.log(object.name);
console.log(object["name"]);