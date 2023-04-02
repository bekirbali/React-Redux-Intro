import { ADD_TODO, CLEAR_TODO, TOGGLE_TODO } from "../types/todoTypes";

const initialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          {
            id: new Date().getTime(),
            text: payload,
            done: false,
          },
        ],
      };
    case CLEAR_TODO:
      return {
        todoList: [],
      };

    default:
      return state;
  }
};
