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

export const deleteReservation = (reservation) => {
  return {
    type: "deleteReservation",
    data: reservation
  };
};

export const updateReservation = (reservation) => {
  return {
    type: "updateReservation",
    data: reservation
  };
};

export const setReservation = (reservation) => {
  return {
    type: "setReservation",
    data: reservation
  };
};

export const setDailyNotes = (dailynotes) => {
  return {
    type: "setDailyNotes",
    data: dailynotes
  };
};

export const addDailyNote = (dailynote) => {
  return {
    type: "addDailyNote",
    data: dailynote
  };
};

export const setServers = (servers) => {
  return {
    type: "setServers",
    data: servers
  };
};

export const addServer = (server) => {
  return {
    type: "addServer",
    data: server
  };
};

export const deleteServer = (server) => {
  return {
    type: "deleteServer",
    data: server
  };
};
