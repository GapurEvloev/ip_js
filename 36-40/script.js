"use strict";

let str = "some";
let strObj = new String(str);

const soldier = {
  health: 100,
  armor: 100,
  sayHello() {
    console.log("Hi");
  },
};

const john = {
  health: 100,
};

const jack = Object.create(soldier);

// john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier);
console.log(john.armor); // => 100
john.sayHello(); // => Hi

console.log(jack.armor); // => 100
jack.sayHello(); // => Hi

// /////////////////////////////////////////////
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5, //50
    },
    {
      width: 15,
      length: 7, //105
    },
    {
      width: 20,
      length: 5, //100
    },
    {
      width: 8,
      length: 10, //80
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let v = 0;
  data.shops.forEach((shop) => {
    let { width, length } = shop;
    v += width * length * data.height;
  });

  if (v < data.budget / data.moneyPer1m3) {
    return "Бюджета достаточно";
  }
  return "Бюджета недостаточно";
}

isBudgetEnough(shoppingMallData);
// /////////////////////////////////////////////

// /////////////////////////////////////////////

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Sam'];

// function sortStudentsByGroups(arr) {
//   let allTeams = [];
//   let newTeam = [];
//   let res = []
//   const newArr = arr.sort()
//   for (let i = 0; i < arr.length; i++) {
//     newTeam.push(newArr[i]);
//     res.push(arr[i])
//     if (newTeam.length === 3) {
//       allTeams.push(newTeam);
//       newTeam = [];
//       res = []
//     }
//   }
//   if (newTeam.length > 0) {
//     allTeams.push(`Оставшиеся студенты: ${res.join(", ")}`);
//   } else {
//     allTeams.push("Оставшиеся студенты: -");
//   }
//   return allTeams
// }

// console.log(sortStudentsByGroups(students));

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Takesi2",
];

function sortStudentsByGroups(arr) {
  if (arr.length < 1) {
    return "Ошибка!";
  }
  const sortArr = [...arr].sort();
  let tArr = [];
  for (let i = 0; i < sortArr.length; i += 3) {
    let forArr = sortArr.slice(i, i + 3);

    if (forArr.length === 3) {
      tArr.push(forArr);
    } else if (forArr.length > 0 && forArr.length < 3) {
      tArr.push(`Оставшиеся студенты: ${forArr.join(", ")}`);
    }
  }

  if (sortArr.length % 3 === 0) {
    tArr.push(`Оставшиеся студенты: -`);
  }

  return tArr;
}

sortStudentsByGroups(students);
// /////////////////////////////////////////////

// 39 Динамическая типизация в JS start
console.log(typeof String(null));
console.log(String(null));
console.log(String(4));
console.log(4);

// to Number
/**
 * undefined => NaN
 * null	=> 0
 * true / false	=> 1 / 0
 *
 * Строка => Пробельные символы по краям обрезаются.
 *           Далее, если остаётся пустая строка, то 0,
 *           иначе из непустой строки "считывается" число, при ошибке результат NaN.
 *
 *
 */

// to boolean
/**
 * 0 => false
 * null => false
 * undefined => false
 * NaN => false
 *
 * 1.../-1... => true
 * "0" => true
 * objects => true
 */

console.log(true + false); // 1
console.log(12 / "6"); // 2
console.log("number" + 15 + 3); // 'number153'
console.log(15 + 3 + "number"); // '18number'
console.log([1] > null); // true
console.log("foo" + +"bar"); // 'fooNaN'
console.log("true" == true); // false
console.log(false == "false"); // false
console.log(null == ""); // false
console.log(!!"false" == !!"true"); // true
console.log(["x"] == "x"); // true
console.log([] + null + 1); // 'null1'
console.log([1, 2, 3] == [1, 2, 3]); // false
console.log({} + [] + {} + [1]); // '0[object Object]1'
console.log(!+[] + [] + ![]); // 'truefalse'
console.log(new Date(0) - 0); // 0
console.log(new Date(0) + 0); // 'Thu Jan 01 1970 02:00:00(EET)0'

console.log(-22);
console.log(-22);
// 39 Динамическая типизация в JS end

// 40 start
let user = "John";

function sayHi() {
  console.log("Hi, " + user);
}

user = "Pete";

sayHi(); // что будет показано: "John" или "Pete"?

function makeWorker() {
  let user2 = "Pete";

  return function () {
    console.log(user2);
  };
}

let user2 = "John";

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)

function createCounter() {
  let counter = 0;

  const myFunction = function () {
    counter += 1;
    return counter;
  };

  return myFunction;
}

const increment = createCounter();

const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

// const result = getSum(5, 6);
// console.log(result);
// function getSum(a, b) {
//   return a + b;
// }

function foo(a, b) {
  const [first] = a;
  const { eng } = b;

  return `${first} ${eng}`;
}

const result = foo(["Hello", "Привет"], { ru: "Мир", eng: "World" });
console.log(result);
// 40 end

// 41
const restorantData = {
  menu: [
    {
      name: "Salad Caesar",
      price: "14$",
    },
    {
      name: "Pizza Diavola",
      price: "9$",
    },
    {
      name: "Beefsteak",
      price: "17$",
    },
    {
      name: "Napoleon",
      price: "7$",
    },
  ],
  waitors: [
    { name: "Alice", age: 22 },
    { name: "John", age: 24 },
  ],
  averageLunchPrice: "20$",
  openNow: true,
};

function isOpen(prop) {
  let answer = "";
  prop ? (answer = "Открыто") : (answer = "Закрыто");

  return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if ((+fDish.price.slice(0, -1)) + (+sDish.price.slice(0, -1)) < average.slice(0, -1)) {
    return "Цена ниже средней";
  } else {
    return "Цена выше средней";
  }
}

console.log(
  isAverageLunchPriceTrue(
    restorantData.menu[0],
    restorantData.menu[1],
    restorantData.averageLunchPrice,
  ),
);

function transferWaitors(data) {
  const copy = Object.assign({}, data);

  copy.waitors = [{ name: "Mike", age: 32 }];
  return copy;
}

transferWaitors(restorantData);
// 41
