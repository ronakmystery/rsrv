import { Inputs } from "../database/inputs";

import { ID } from "./id";

export function getReservationInputs(day, previous) {
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

  if (previous) {
    reservation.id = previous.id;
  } else {
    reservation.id = ID();
  }

  if (previous) {
    reservation.position = previous.position;
  } else {
    reservation.position = {};
  }

  return reservation;
}
