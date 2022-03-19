'use strict';

let number = 5;
const leftBorderWidth = 1;

// number = number*2; //можно менять 
// leftBorderWidth = leftBorderWidth*2; //нельзя менять 

const obj = {
    a: 33,
};

obj.a = 3322;

console.log(obj);


var name = "Gapur";
/* 
хостинг - всплытие переменных
*/

{
    let result = 50;
}
// console.log(result);//будет ошибка

