"use strict";

console.log("Запрос данных...");

const req = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Подготовка данных...");
    
    const products = {
      name: "TV",
      price: 2000
    };

    resolve(products);
  }, 2000);
});

req.then((value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      value.status = "available";
      
      resolve(value);
    }, 2000);
  });
}).then((data) => {
  data.modify = true;
  return data;
}).then((data) => {
  console.log("response:", data);
}).catch((err) => {
  console.error("Error:", err);
}).finally(() => {
  console.log("finally");
});


// const test = time => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), time);
//   });
// };

// // // test(1000).then(() => console.log("1000 ms"));
// // // test(2000).then(() => console.log("2000 ms"));
// // // test(4000).then(() => console.log("4000 ms"));

// // Promise.all([test(1000), test(3000)]).then(() => {
// //   console.log("All");
// // });

// Promise.race([test(1000), test(3000)]).then(() => {
//   console.log("All");
// });
