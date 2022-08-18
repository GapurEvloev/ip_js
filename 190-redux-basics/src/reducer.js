
const initialState = {
  counter: 2
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DEC":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "RND":
      return {
        ...state,
        counter: state.counter  * action.payload
      };
    case "RESET":
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }
};

export default reducer;