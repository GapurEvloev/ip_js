"use strict";

// // 99 start
// const persone = {
//   name: "Alice",
//   age: 19,

//   get personeAge() {
//     return this.age;
//   },

//   set personeAge(num) {
//     this.age = num;
//   }
// };

// persone.personeAge = 20;
// console.log(persone.personeAge);
// // 99 end

// // 100 start =================================================================
// function User(name, age) {
//   this.name = name; 
//   let userAge = age;

//   this.say = function() {
//     console.log(`User name: ${this.name}; age: ${userAge}`);
//   };

//   this.getAge = () => {
//     return userAge;
//   };

//   this.setAge = (age) => {
//     if(typeof age === 'number' && age > 0 && age <= 110) {
//       userAge = age;
//     } else {
//       console.log("Invalid value");
//     }
//   };
// }

// const max = new User("Max", 30);

// console.log(max.name);
// console.log(max.getAge());

// max.name = "Alice";
// max.setAge(40);

// max.say();


class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  say() {
    console.log(`User name: ${this.name}; age: ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if(typeof age === 'number' && age > 0 && age <= 110) {
      this._age = age;
    } else {
      console.log("Invalid value");
    }
  };
}
// // 100 end =================================================================