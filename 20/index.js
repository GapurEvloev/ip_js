"use strict";

// 20 - условия start //////////////////////////////////////////////////
let num = 50;

switch (num) {
  case 49:
    console.log("Wrong!");
    break;
  case 100:
    console.log("Wrong!");
    break;
  case 51:
    console.log("Exactly!");
    break;
  default:
    console.log("Soory, maybe next time...");
}
// 20 - условия end //////////////////////////////////////////////////

// 21 - Логические операторы start //////////////////////////////////////////////////
const burgers = 10;
const fries = 0;

console.log(!(burgers && fries));

/**
 * 0 // => false
 * '' // => false
 * null // => false
 * undefined // => false
 * NaN // => false
 */

//
const burgers2 = 3;
const fries2 = 1;
const cola = 0;

console.log(burgers2 === 3 && cola && fries2); // => 0
console.log(fries2 && burgers2 === 3); // => true
console.log(burgers2 && fries2); // => 1
console.log(fries2 && burgers2); // => 3

if (burgers2 === 4 && fries2) {
  console.log("Super!");
} else {
  console.log("We leave.");
}

//
const burgers3 = 3;
const fries3 = 1;
const cola3 = 0;

console.log(burgers3 || cola3 || burgers3 === 0); // => 3
console.log(burgers3 === 0 || cola3 || fries3); // => 1
console.log(burgers3 === 3 || cola3 || fries3); // => true
console.log(burgers3 || cola3 || fries3); // => 3

// Что выведет в консоль код?
console.log(NaN || 2 || undefined); // => 2

console.log(NaN && 2 && undefined); // => NaN

console.log(1 && 2 && 3); // => 3

console.log((!1 && 2) || !3); // => false

console.log(25 || (null && !3)); // => 25

console.log(NaN || null || !3 || undefined || 5); // => 5

console.log(NaN || (null && !3 && undefined) || 5); // => 5

console.log((5 === 5 && 3 > 1) || 5); // => true

// Выполняется ли условие?
// answer: yes
const hamburger4 = 3;
const fries4 = 3;
const cola4 = 0;
const nuggets4 = 2;

if ((hamburger4 === 3 && cola4) || (fries4 === 3 && nuggets4)) {
  console.log("Done!");
}

// Выполняется ли условие?
// answer: yes
let hamburger5; //undefined
const fries5 = NaN;
const cola5 = 0;
const nuggets5 = 2;

if (hamburger5 || cola5 || fries5 === 3 || nuggets5) {
  console.log("Done!");
}

// Выполняется ли условие?
// answer: no
let hamburger6;
const fries6 = NaN;
const cola6 = 0;
const nuggets6 = 2;

if ((hamburger6 && cola6) || (fries6 === 3 && nuggets6)) {
  console.log("Done!");
}

// 21 - Логические операторы end //////////////////////////////////////////////////

// 22 - Циклы start //////////////////////////////////////////////////
let asterix = "";
for (let i = 1; i <= 6; i++) {
  for (let j = 0; j < i; j++) {
    asterix += "*";
  }
  asterix += "\n";
}
console.log(asterix);

first: for (let i = 1; i <= 6; i++) {
  console.log(`First ${i}`);

  for (let j = 0; j < 3; j++) {
    console.log(`Second ${j}`);

    for (let k = 0; k < 3; k++) {
      if (k === 2) {
        continue first;
      }
      console.log(`Third ${k}`);
    }
  }
}
// 22 - Циклы end //////////////////////////////////////////////////


// Место для первой задачи
function firstTask() {
  // Пишем решение вот тут
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
}

// Место для второй задачи
function secondTask() {
  // Пишем решение вот тут
  for (let i = 20; i >= 10; i--) {
    if (i === 13) {
      break;
    }
    console.log(i);
  }
}

// Место для третьей задачи
function thirdTask() {
  // Пишем решение вот тут
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// Место для четвертой задачи
function fourthTask() {
  // Пишем решение вот тут
  let i = 2;
  while (i <= 16) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    i++;
  }
}

// Место для пятой задачи

function fifthTask() {
  const arrayOfNumbers = [];

  // Пишем решение вот тут
  for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[arrayOfNumbers.length] = i;
  }

  // Не трогаем
  return arrayOfNumbers;
}




//(*) Продвинутые задания на использование циклов и условий ///////////////////////////////////////////////////////
// Место для первой задачи
function firstTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  // Пишем решение вот тут
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }
  
  // Не трогаем
  return result;
}

// Место для второй задачи
function secondTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];

  for (let i = 0; i < data.length; i++) {
    if(typeof(data[i]) === 'number') {
      data[i] = data[i] * 2;
    } else if (typeof(data[i]) === 'string') {
      data[i] = `${data[i]} - done`;
    }
  }
  
  // Не трогаем
  return data;
}

// Место для третьей задачи
function thirdTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

  for (let i = data.length - 1; i >= 0; i--) {
    result[result.length] = data[i];
  }
  
  console.log(result);
  // Не трогаем
  return result;
}


// (**) Задача на формирование фигуры
const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

/*

     *     
    ***   
   *****
  *******
 *********
***********

*/