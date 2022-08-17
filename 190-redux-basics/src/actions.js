export const actionDec = () => ({type: "DEC"});
export const actionInc = () => ({type: "INC"});
export const actionRnd = () => ({type: "RND", payload: Math.floor(Math.random() * 10)});
export const actionReset = () => ({type: "RESET"});
