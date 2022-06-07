import { Inputs } from "../database/inputs";

export function getReservationInputs() {
  let reservation = {};
  Inputs.forEach((x) => {
    reservation[x.input] = document.getElementById(x.input).value;
  });
  reservation["note"] = document.getElementById("reservation-note").value;

  ["phone", "email"].forEach((x) => {
    reservation[x] = document.getElementById(x).value;
  });

  reservation.people = parseInt(reservation.people);

  return reservation;
}
