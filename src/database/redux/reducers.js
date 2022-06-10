import { createStore, combineReducers } from "redux";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "setUser":
      return action.data;
    default:
      return state;
  }
};

const dayReducer = (state = null, action) => {
  switch (action.type) {
    case "setDay":
      return action.data;
    default:
      return state;
  }
};

const reservationReducer = (state = null, action) => {
  switch (action.type) {
    case "setReservation":
      return action.data;
    default:
      return state;
  }
};

const reservationsReducer = (state = [], action) => {
  switch (action.type) {
    case "setReservations":
      return action.data;

    case "addReservation":
      return [...state, action.data];

    case "deleteReservation":
      return state.filter((reservation) => reservation.id !== action.data.id);

    default:
      return state;
  }
};

const dailynotesReducer = (state = {}, action) => {
  switch (action.type) {
    case "setDailyNotes":
      return action.data;

    case "addDailyNote":
      return { ...state, ...action.data };

    default:
      return state;
  }
};

// const setttingsReducer = (state = { style: null, setting1: false }, action) => {
//   switch (action.type) {
//     case "setStyle":
//       return { ...state, style: action.data };
//     case "setSetting1":
//       return { ...state, setting1: !state.setting1 };
//     default:
//       return state;
//   }
// };

export const Reducers = combineReducers({
  user: userReducer,
  day: dayReducer,
  reservation: reservationReducer,
  reservations: reservationsReducer,
  dailynotes: dailynotesReducer
  // settings: setttingsReducer
});

export const store = createStore(Reducers);
