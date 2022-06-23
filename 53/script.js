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

// 59 start
const user59 = {
    name: "Alex",
    surname: "Smith",
    birthday: "20/04/1993",
    showMyPublicData () {
        console.log(`${this.name} ${this.surname}`);
    }
};

const shops = [
    {rise: 500},
    {oil: 200},
    {bread: 50},
];

const budget = [4000, 500, 1500, 2500];

const mapData = new Map([
    [{paper: 400}, 3000]
]);

shops.forEach((shop, i) => {
    mapData.set(shop, budget[i]);
});

// =======
const goods = [];
// for (const shop of mapData.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);
//
// // =======
// for (const price of mapData.values()) {
//     console.log(price);
// }
//
// // =======
// for (const [shop, price] of mapData.entries()) {
//     console.log(shop, price);
// }

mapData.forEach((value, key, mapData) => {
    console.log(key, value);
});

// mapData.set(shops[0], 500)
//     .set(shops[1], 1500)
//     .set(shops[2], 2500);

// console.log(mapData);
// console.log(mapData.get(shops[0]));
// console.log(mapData.has(shops[0]));

// mapData.delete(key);
// mapData.clear();
// mapData.size;

// 59 end
