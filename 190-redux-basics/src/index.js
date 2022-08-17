import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, bindActionCreators} from "redux";

import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const update = () => document.getElementById("counter").textContent = getState().value;
subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

const {actionDec, actionInc, actionRnd, actionReset} = bindActionCreators(actions, dispatch);

// const incDispatch = bindActionCreators(actionInc, dispatch);
// const rndDispatch = bindActionCreators(actionRnd, dispatch);
// const resetDispatch = bindActionCreators(actionReset, dispatch);

document.getElementById("dec").addEventListener("click", actionDec);
document.getElementById("inc").addEventListener("click", actionInc);
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  actionRnd(value);
});
document.getElementById("reset").addEventListener("click", actionReset);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>

    </>
  </React.StrictMode>
);
