"use strict";

const data = [
  {
    id: "box",
    tag: "div",
  },
  {
    id: "",
    tag: "nav",
  },
  {
    id: "circle",
    tag: "span",
  },
];

try {
  data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);

    if (!blockObj.id) {
      throw new SyntaxError(`Нет id под номером ${i + 1}`);
    }

    block.setAttribute("id", blockObj.id);
    document.body.append(block);
  });
} catch (error) {
    // console.error(error.name);
    // console.log(error.message);
    // console.log(error.stack);

    if(error.name === "SyntaxError") {
        console.log(error.message);
    } else {
        throw error;
    }
}
