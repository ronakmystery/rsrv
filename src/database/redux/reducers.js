import { createStore, combineReducers } from "redux";

const userReducer = (state = "test", action) => {
  switch (action.type) {
    case "setUser":
      return (state = action.data);
    default:
      return state;
  }
};

const setttingsReducer = (state = { style: null, setting1: false }, action) => {
  switch (action.type) {
    case "setStyle":
      return { ...state, style: action.data };
    case "setSetting1":
      return { ...state, setting1: !state.setting1 };
    default:
      return state;
  }
};

export const Reducers = combineReducers({
  user: userReducer,
  settings: setttingsReducer
});

export const store = createStore(Reducers);
