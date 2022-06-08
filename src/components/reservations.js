import React from "react";

import { useSelector } from "react-redux";

import { ReactComponent as NoReservations } from "../assets/no-reservations.svg";

export const Reservations = () => {
  const state = useSelector((state) => state);

  let todaysReservations = state.reservations.filter(
    (reservation) => reservation.day === state.day
  );

  console.log(state.reservations, todaysReservations, state.day);
  return (
    <div id="reservations">
      {todaysReservations.length !== 0 ? (
        <>
          {todaysReservations.map((reservation) => (
            <div key={reservation.id}>{reservation.name}</div>
          ))}
        </>
      ) : (
        <div id="no-reservations">
          <span>No reservations...</span>
          <NoReservations />
        </div>
      )}
    </div>
  );
};
