import { createStore, combineReducers } from "redux";

const userReducer = (state = "test", action) => {
  switch (action.type) {
    case "setUser":
      return (state = action.data);
    default:
      return state;
  }
};

export const Reducers = combineReducers({
  user: userReducer
});

export const store = createStore(Reducers);
