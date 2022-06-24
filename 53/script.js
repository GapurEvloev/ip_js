// 'use strict';
//
// const box = document.querySelector('.box');
// const block = document.querySelector('.block');
//
// const newHeight = 0;
// const newWidth = 400;
//
// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
// }
//
// changeParams(box, newHeight, newWidth);
//
//
// // 54 start
// let userName = null;
// console.log(userName ?? "User");
//
// console.log(block);
// console.log(block?.textContent);
//
// const userData = {
//     name: "Sam",
//     age: null,
//     sayHi() {
//         console.log("Hi");
//     }
// };
// userData.sayHi();
// userData.sayBye?.();
// console.log(userData.skills?.js);
// // 54 end

// 55 start
// const boxes = document.querySelectorAll(".box");
// let boxesGet = document.getElementsByClassName("box");

// // boxesGet = Array.from(boxesGet);
//
// boxes[0].remove();
// boxesGet[0].remove();
//
// boxesGet = Array.from(boxesGet);
//
// console.log(boxes);
// console.log(boxesGet);

// boxes.forEach(box => {
//     if (box.matches(".this")) {
//         console.log(box);
//     }
// });
//
// console.log(boxes[0].closest(".wrapper"));
// 55 end


// // 57 start
// const user57 = {
//     name: "Alex",
//     surname: "Smith",
//     birthday: "20/04/1993",
//     showMyPublicData () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
//
// // writable
// // enumerable
// // configurable
//
// console.log(Object.getOwnPropertyDescriptor(user57, "name"));
//
// Object.defineProperty(user57, "name", {writable: false});
// Object.defineProperty(user57, "gender", {value: "male"});
// // Object.defineProperty(user57, "gender", {writable: true});
// user57.name = "safsasfd";
// user57.surname = "safsasfd";
// user57.gender = "female";
// console.log(Object.getOwnPropertyDescriptor(user57, "name"));
// console.log(user57);
//
// // 57 end

// // 58 start
// const user58 = {
//     name: "Alex",
//     surname: "Smith",
//     birthday: "20/04/1993",
//     showMyPublicData () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
//
// for (const key in user58) {
//     console.log(user58[key]);
// }
//
// // for (const key of user58) { // выдаст ошибку
// //     console.log(user58[key]);
// // }
// // 58 end

// // 59 start
// const user59 = {
//     name: "Alex",
//     surname: "Smith",
//     birthday: "20/04/1993",
//     showMyPublicData () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
//
// const shops = [
//     {rise: 500},
//     {oil: 200},
//     {bread: 50},
// ];
//
// const budget = [4000, 500, 1500, 2500];
//
// const mapData = new Map([
//     [{paper: 400}, 3000]
// ]);
//
// shops.forEach((shop, i) => {
//     mapData.set(shop, budget[i]);
// });
//
// // =======
// const goods = [];
// // for (const shop of mapData.keys()) {
// //     goods.push(Object.keys(shop)[0]);
// // }
// // console.log(goods);
// //
// // // =======
// // for (const price of mapData.values()) {
// //     console.log(price);
// // }
// //
// // // =======
// // for (const [shop, price] of mapData.entries()) {
// //     console.log(shop, price);
// // }
//
// mapData.forEach((value, key, mapData) => {
//     console.log(key, value);
// });
//
// // mapData.set(shops[0], 500)
// //     .set(shops[1], 1500)
// //     .set(shops[2], 2500);
//
// // console.log(mapData);
// // console.log(mapData.get(shops[0]));
// // console.log(mapData.has(shops[0]));
//
// // mapData.delete(key);
// // mapData.clear();
// // mapData.size;
//
// // 59 end


// // 60 start
// const arr60 = [1, 1, 1, 33, 33, 22, 44, 5, 11, 11, 333, 333, 32];
// const names60 = ["alex", "diana", "lisa", "lisa", "mari", "kim", "kim"];
//
// function unique(arr) {
//     return Array.from(new Set(arr));
// }
//
// console.log(unique(names60));
//
// const set60 = new Set(arr60);
// const setNames60 = new Set(names60);
//
// // set60.add("Ivan");
// // // set60.delete(value);
// // // set60.has(vale);
// // // set60.clear();
// // // set60.size;
// //
// // // =================
// // for (const value of set60) {
// //     console.log(value);
// // }
// // // =================
//
// // // =================
// // setNames60.forEach((value, valueAgain, set60) => {
// //     console.log(value, valueAgain);
// // });
// //
// // console.log(setNames60.values());
// // console.log(setNames60.keys());
// // console.log(setNames60.entries());
// // // =================
//
// // console.log(set60);
// // 60 end


// function amountOfPages(summary){
//     let result = '';
//     let n = 0;
//
//     for (let i = 1; i <= summary; i++) {
//         result += i;
//         if (result.length === summary) {
//             n = i;
//             break;
//         }
//     }
//     return n;
// }
//
// console.log(amountOfPages(15));


// function isPangram(string) {
//     let stringArr = Array.from(new Set(string.toLowerCase()));
//     stringArr = stringArr.filter(item => {
//         return item !== " ";
//     });
//
//     return (stringArr.length === 26);
// }
//
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

function deepCount2(a){
    let count = 0;
    if (a.length === 0) {
        return 0;
    }
    for (const key in a) {
        if(Array.isArray(a[key])) {
            count++;
            deepCount2(a[key]);
        }
        count++;
    }
    return count;
}

// Вариант с циклом
function deepCount(a){
    let count = a.length;
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            count += deepCount(a[i]);
        }
    }
    return count;
}

console.log(deepCount(["1", 5, "3", ["10"]]));
console.log(deepCount2(["1", 5, "3", ["10"]]));
// console.log(deepCount([1, 5, 3]));
// console.log(deepCount([1, 2, [3, 4, [5]]]));