import React from "react";
import { useSelector } from "react-redux";

import {
  totalPeoplePerHour,
  totalConfirmedPeoplePerHour
} from "../functions/get-totals";

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
    <div id="today-summary">
      {dayName()} {monthName()} {state.day}
      <i className="material-icons-round">people</i>
      <span>
        {totalConfirmedPeoplePerHour(dayReservations())}/
        {totalPeoplePerHour(dayReservations())}
      </span>
    </div>
  );
};
