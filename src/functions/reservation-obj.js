import { Inputs } from "../database/inputs";

import { ID } from "./id";

export function getReservationInputs(day, id, server, position) {
  let reservation = {};

  ["phone", "name", "email", "note", "time"].forEach((x) => {
    reservation[x] = document.getElementById(`reservation-${x}`).value;
  });

  reservation["people"] = parseInt(
    document.getElementById("reservation-people").value
  );

  reservation["confirmed"] = document.getElementById(
    "reservation-confirmed"
  ).checked;

  reservation.day = day;

  if (server) {
    reservation.server = server;
  }

  if (id) {
    reservation.id = id;
  } else {
    reservation.id = ID();
  }

  if (position) {
    reservation.position = position;
  } else {
    reservation.position = {};
  }

  return reservation;
}
