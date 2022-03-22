'use strict';

// // 1)
// let x = 5; 
// alert( x++ ); // => 5


// // 2) Чему равно такое выражение: [ ] + false - null + true ?
// console.log([ ] + false - null + true); // => NaN

// // 3) Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// let y = 1; 
// let x = y = 2; 
// y = 33;
// alert(x);


// // 4) Чему равна сумма [ ] + 1 + 2?
// console.log([ ] + 1 + 2); // => '12'

// // 5) Что выведет этот код: alert( "1"[0] )?
// alert( "1"[0] ); // "1"

// // 6) Чему равно 2 && 1 && null && 0 && undefined
// console.log(2 && 1 && null && 0 && undefined); //null

// // 7) Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// console.log(!!( a && b ) === (a && b)); // => false

// // 8) Что выведет этот код: alert( null || 2 && 3 || 4 );
// alert( null || 2 && 3 || 4 ); // => 3
 
// // 9) a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b
// let a = [1, 2, 3]; let b = [1, 2, 3];
// console.log(a == b); // => false

// // 10) Что выведет этот код: alert( +"Infinity" ); ?
// console.log( (+"Infinity") ); // => Infinity type number

// // 11) Верно ли сравнение: "Ёжик" > "яблоко"?
// console.log("Ёжик" > "яблоко"); // => false
// console.log("Ёжик" > "ёжик"); // => false


// // 12) Чему равно 0 || &quot;&quot; || 2 || undefined || true || falsе
// console.log(0 || "" || 2 || undefined || true || false); // => 2
// console.log(0 || "" || 2 && undefined || true || false); // => true
