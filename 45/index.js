"use strict";

// const num = new Number(3); // устарело
// const func = new Function(3); // устарело

// console.log(num); // => [Number: 3]
// console.log(func); // [Function: anonymous]

// функции-конструкторы
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} exited`);
};

const sali = new User("Sali", 44);
const russel = new User("Russel", 28);

sali.hello();
russel.hello();
russel.exit();

console.log(sali);
console.log(russel);