import { INCREMENT, DECREMENT } from "../actions/type";

const myCounter = {
  counter: 0,
};
const CounterReducer = (state = myCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
export default CounterReducer;
