import React from "react";
import { useSelector } from "react-redux";

import {
  totalPeoplePerHour,
  totalConfirmedPeoplePerHour
} from "../functions/get-totals";

import "./day-summary.scss";

import { motion } from "framer-motion";

export const DaySummary = () => {
  const state = useSelector((state) => state);

  let dayReservations = () => {
    return state.reservations.filter(
      (reservation) => reservation.day === state.day
    );
  };

  let dayName = () => {
    return new Date(state.day).toLocaleString("default", { weekday: "long" });
  };

  let monthName = () => {
    return new Date(state.day).toLocaleString("default", { month: "long" });
  };

  dayReservations();

  return (
    <motion.div
      id="day-summary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {dayName()} {monthName()} {state.day}
      <div id="people-numbers">
        <i className="material-icons-round">people</i>{" "}
        <span>
          {totalConfirmedPeoplePerHour(dayReservations())}/
          {totalPeoplePerHour(dayReservations())}
        </span>
      </div>
    </motion.div>
  );
};
