"use strict";

// 82. JSON формат передачи данных, глубокое клонирование объектов start
const person = {
  name: "John",
  tel: '+223323423423',
  parents: {
    dad: "Sara",
    mon: "Davin"
  },
  clone() {
    return JSON.parse(JSON.stringify(this));
  }
};

const personClone = person.clone();
const personClone2 = person.clone();

// console.log(JSON.stringify(person));
// console.log(JSON.parse(JSON.stringify(person)));

console.log(personClone);
console.log(personClone === personClone2);
// 82. JSON формат передачи данных, глубокое клонирование объектов end