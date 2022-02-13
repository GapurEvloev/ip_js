const btn = document.querySelector(".btn");

let timerId,
    timerId2,
    timerId3,
    intervalCounter = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    let id = setInterval(frame, 4);
    function frame() {
        if(pos === 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener("click", myAnimation);

// btn.addEventListener("click", () => {
//     timerId3 = setInterval(logger, 500)
// });
// timerId = setTimeout(function(text) {
//     console.log(text)
// }, 2000, "Hello");

// // timerId2 = setTimeout(logger, 3000);

// function logger() {
//     if(intervalCounter === 3) {
//         clearInterval(timerId3);
//     }
//     console.log("Text");
//     intervalCounter++;
// }

// clearInterval(timerId); // сбрасывает setTimeout

// let id = setTimeout(function log() {
//     console.log("Hello recursia");
//     id = setTimeout(log, 500);
// }, 500)