import { Inputs } from "../database/inputs";

import { ID } from "./id";

export function getReservationInputs(day) {
  let reservation = {};

  ["phone", "name", "email", "note", "time", "people"].forEach((x) => {
    reservation[x] = document.getElementById(`reservation-${x}`).value;
  });

  reservation["confirmed"] = document.getElementById(
    "reservation-confirmed"
  ).checked;

  reservation.day = day;

  reservation.id = ID();

  return reservation;
}
