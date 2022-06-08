export const setUser = (user) => {
  return {
    type: "setUser",
    data: user
  };
};

export const setDay = (day) => {
  return {
    type: "setDay",
    data: day
  };
};

export const setReservations = (reservations) => {
  return {
    type: "setReservations",
    data: reservations
  };
};

export const addReservation = (reservation) => {
  return {
    type: "addReservation",
    data: reservation
  };
};

// export const setSetting1 = (setting) => {
//   return {
//     type: "setSetting1",
//     data: setting
//   };
// };
