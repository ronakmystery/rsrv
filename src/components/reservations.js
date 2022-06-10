import React from "react";

import { useSelector } from "react-redux";

import { ReactComponent as NoReservations } from "../assets/no-reservations.svg";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../database/redux/actions";
import moment from "moment";

export const Reservations = () => {
  const dispatch = useDispatch();

  const { setReservation } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state) => state);

  let todaysReservations = state.reservations.filter(
    (reservation) => reservation.day === state.day
  );

  return (
    <div id="reservations">
      {todaysReservations.length !== 0 ? (
        <>
          {todaysReservations.map((reservation) => (
            <div
              key={reservation.id}
              onClick={() => {
                setReservation(reservation);
              }}
            >
              {reservation.name} {reservation.people}{" "}
              {moment(reservation.time, ["hh.mm"]).format("h:mm a")}
            </div>
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
