const btns = document.querySelectorAll("button");

console.log(btns[0].classList);
console.log(btns[0].classList.length);
console.log(btns[0].classList.item(0));
console.log(btns[1].classList.add("red"));
console.log(btns[0].classList.remove("blue"));
console.log(btns[0].classList.toggle("blue"));

if(btns[1].classList.contains('red')) {
    console.log("red");
}

btns[0].addEventListener("click", () => {
    // if (!btns[1].classList.contains("red")) {
    //     btns[1].classList.add("red");
    // } else {
    //     btns[1].classList.remove("red");
    // }
    btns[1].classList.toggle("red");
});

document.querySelector(".btn-block").addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "BUTTON") {
        // console.log("Hello");
    }
    if (e.target && e.target.classList.contains("red")) {
        console.log("Red");
    }
    if (e.target && e.target.matches("button.blue")) {
        console.log("blue");
    }
});