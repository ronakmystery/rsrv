import React from "react";

import { useSelector } from "react-redux";

import { ReactComponent as NoReservations } from "../../assets/no-reservations.svg";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../../database/redux/actions";

import { TimeSlots } from "./time-slots";

import "./reservations.scss";

import { motion } from "framer-motion";

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
        <TimeSlots
          setReservation={setReservation}
          todaysReservations={todaysReservations}
        />
      ) : (
        <motion.div
          id="no-reservations"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span>No reservations...</span>
          <NoReservations />
        </motion.div>
      )}
    </div>
  );
};
