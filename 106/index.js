"use strict";

// 106. Ошибки. Как избежать “поломки” своего кода start
try {
  console.log("ok");
  console.log(a);
  console.log("result:");
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  // 
}

console.log("Still ok");
// 106. Ошибки. Как избежать “поломки” своего кода end =================================================================