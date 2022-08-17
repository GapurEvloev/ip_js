import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from "redux";

const initialState = {
  value: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        value: state.value + 1
      };
    case "DEC":
      return {
        ...state,
        value: state.value - 1
      };
    case "RND":
      return {
        ...state,
        value: state.value  * action.payload
      };
    case "RESET":
      return {
        ...state,
        value: 0
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const update = () => {
  document.getElementById("counter").textContent = store.getState().value;
}

store.subscribe(update);

const action = (type) => ({type: type});
const actionRnd = (type, payload) => ({type: type, payload});

document.getElementById("inc").addEventListener("click", () => {
  store.dispatch(action("INC"));
});
document.getElementById("dec").addEventListener("click", () => {
  store.dispatch(action("DEC"))
});
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(actionRnd("RND", value));
});
document.getElementById("reset").addEventListener("click", () => {
  store.dispatch(action("RESET"))
});

// let state = reducer(initialState, {type: "INC"});
// state = reducer(state, {type: "INC"});
// state = reducer(state, {type: "INC"});
// state = reducer(state, {type: "INC"});
// console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>

    </>
  </React.StrictMode>
);
