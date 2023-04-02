import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducer";

const rootReducer = combineReducers({
  counterReducer, //* key and value same so I don't need to specify key and value separately
  todo: todoReducer, //* but I can specify different names for each key and value like this
});

const store = createStore(rootReducer);

export default store;
