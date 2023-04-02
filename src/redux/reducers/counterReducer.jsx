import { DECREASE, INCREASE, RESET } from "../types/counterTypes";
import { TOGGLE_TODO } from "../types/todoTypes";

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { counter: state.counter + 1 };
    case DECREASE:
      return { counter: state.counter - 1 };
    case RESET:
      return { counter: 0 };
    default:
      return state;
  }
};
