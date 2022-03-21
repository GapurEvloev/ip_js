'use strict';

let string = "some";

let stringObj = new String(string);

console.log(typeof(string));
console.log(typeof(stringObj));
console.log(stringObj);

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("Hello!");
    }
};

const jake = Object.create(soldier); // создание прототипа

const john = {
    health: 100,
};

// john.__proto__ = soldier; // устаревший метод установки прототипа
Object.setPrototypeOf(john, soldier); // совремменный метод установки прототипа

console.log(john); // => { health: 100 }
console.log(john.armor); // => 100
john.sayHello(); // => Hello!
