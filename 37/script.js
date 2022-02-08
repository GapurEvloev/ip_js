const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList);
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// btns[0].classList.add("red");
// btns[0].classList.remove("blue");
// btns[0].classList.toggle("blue"); // можно передавать 1
// btns[0].classList.add("violet", "green"); // можно передавать несколько

// btns[1].classList.add("red");

// if(btns[1].classList.contains('red')) {
//     console.log("red")
// }

btns[0].addEventListener('click', () => {
    // if(!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // }
    // else {
    //     btns[1].classList.remove('red');
    // }
    
    btns[1].classList.toggle('red');
})

// console.log(btns[0].className); // устарело

wrapper.addEventListener('click', (e) => {
    // if(e.target && e.target.tagName === "BUTTON") {
    //     console.log("Hello");
    // }
    if(e.target && e.target.matches("button.red")) {
        console.log("Hello");
    }
    // console.dir(e.target);
})

const btn = document.createElement("button");
btn.classList.add('red');
wrapper.append(btn);