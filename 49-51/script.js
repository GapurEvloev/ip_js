window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");
  const overlay = document.querySelector(".overlay");

  box.addEventListener("touchstart", (e) => {
    e.stopPropagation();
    console.log(e.currentTarget);
    console.log(e.targetTouches);
    console.log(e.changedTouches);
  });
  // overlay.addEventListener("touchstart", (e) => {
  //   e.stopPropagation();
  //   console.log(e.currentTarget);
  // });

  box.addEventListener("touchmove", (e) => {
    e.stopPropagation();
    console.log("touchmove");
  });

  box.addEventListener("touchend", (e) => {
    e.stopPropagation();
    console.log("touchend");
    // console.log(e.touches);
  });
});