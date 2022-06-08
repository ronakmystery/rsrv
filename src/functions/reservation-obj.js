import { Inputs } from "../database/inputs";

import { ID } from "./id";

export function getReservationInputs(day) {
  let reservation = {};
  Inputs.forEach((x) => {
    reservation[x.input] = document.getElementById(x.input).value;
  });
  reservation["note"] = document.getElementById("reservation-note").value;

  ["phone", "email"].forEach((x) => {
    reservation[x] = document.getElementById(x).value;
  });

  reservation["confirmed"] = document.getElementById(
    "reservation-confirmed"
  ).checked;
  reservation["time"] = document.getElementById("time").value;

  reservation.people = parseInt(reservation.people);

  reservation.day = day;

  reservation.id = ID();

  return reservation;
}
