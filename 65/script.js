const btn = document.querySelector(".btn");
let intervalId, intIter = 0;

// function logger () {
//     if(intIter === 3) {
//         clearInterval(intervalId);
//     }
//     console.log("Hello logger!");
//     intIter++;
// }

// // const timerId = setTimeout(() => {
// //     console.log("Hello!");
// // }, 1000);

// btn.addEventListener("click", () => {
//     // const timerId2 = setTimeout(logger, 2000);
//     intervalId = setInterval(logger, 500);
// });

// let idInt = setTimeout(function log() {
//   console.log("Hello!")
//   idInt = setTimeout(log, 500);
// }, 500);

function myAnimation () {
  const elem = document.querySelector(".box");
  let pos = 0;

  const id = setInterval(frame, 10);

  function frame() {
    if(pos === 200) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
    }
  }
}

myAnimation ();