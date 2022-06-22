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

const serversReducer = (state = [], action) => {
  switch (action.type) {
    case "setServers":
      return action.data;

    case "addServer":
      return [...state, action.data];

    case "deleteServer":
      return state.filter((server) => server.id !== action.data.id);
    default:
      return state;
  }
};

const reservationReducer = (state = null, action) => {
  switch (action.type) {
    case "setReservation":
      if (action.data == null) {
        return null;
      } else if (state?.id === action.data.id) {
        return null;
      } else {
        return action.data;
      }

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

    case "updateReservation":
      state = state.filter((reservation) => reservation.id !== action.data.id);
      return [...state, action.data];

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

export const Reducers = combineReducers({
  user: userReducer,
  day: dayReducer,
  reservation: reservationReducer,
  reservations: reservationsReducer,
  dailynotes: dailynotesReducer,
  servers: serversReducer
});

export const store = createStore(Reducers);
