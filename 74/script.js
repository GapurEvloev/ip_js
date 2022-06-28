'use strict';

// const box = document.querySelector('.box');

// let observer = new MutationObserver(mutationRecords => {
//   console.log(mutationRecords);
// });

// observer.observe(box, {
//   childList: true
// });

// observer.disconnect();

// 75 start
const num = new Number(25);
const num2 = Number(25);

console.log(num === 25); // => false
console.log(25 === num2); // => true

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello ${this.name}`);
  };
}

User.prototype.getName = function() {
  console.log(this.name);
};

const khas = new User("Khas", 12);
const rasul = new User("Rasul", 12);

console.log(khas); // =>  User {name: 'Khas', id: 12, human: true}
console.log(rasul); // => User {name: 'Rasul', id: 12, human: true}

khas.hello();
khas.getName();
rasul.hello();
rasul.getName();
// 75 end