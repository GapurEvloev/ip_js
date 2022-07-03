"use strict";

// 99 start
const persone = {
  name: "Alice",
  age: 19,

  get personeAge() {
    return this.age;
  },

  set personeAge(num) {
    this.age = num;
  }
};

persone.personeAge = 20;
console.log(persone.personeAge);
// 99 end