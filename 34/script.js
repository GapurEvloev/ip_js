// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    box.addEventListener("touchcancel", (e) => {
        e.preventDefault();

        console.log("start");
    });
});