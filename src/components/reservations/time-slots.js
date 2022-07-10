import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  totalPeoplePerHour,
  totalConfirmedPeoplePerHour
} from "../../functions/get-totals";

import { motion } from "framer-motion";

import { convert24to12 } from "../../functions/time";

// let sortReservationsByHour = (todaysReservations) => {
//   let timeSlots = {};

//   let hours = [
//     ...new Set(
//       todaysReservations.map((reservation) => convertToHour(reservation.time))
//     )
//   ].sort((a, b) => (a > b ? 1 : -1));

//   hours.forEach((hour) => {
//     timeSlots[hour] = [
//       ...todaysReservations.filter(
//         (reservation) => convertToHour(reservation.time) === hour
//       )
//     ].sort((a, b) => (a.time > b.time ? 1 : -1));
//   });
//   return timeSlots;
// };

let sortReservationsByTime = (todaysReservations) => {
  let timeSlots = {};

  todaysReservations.forEach((r) => {
    let timeSlot = convert24to12(r.time);
    if (timeSlots[timeSlot]) {
      timeSlots[timeSlot].push(r);
    } else {
      timeSlots[timeSlot] = [r];
    }
  });

  let sortedTimes = Object.keys(timeSlots).sort((a, b) => (a > b ? 1 : -1));
  let sortedTimeSlots = {};
  sortedTimes.forEach((t) => {
    sortedTimeSlots[t] = timeSlots[t];
  });

  return sortedTimeSlots;
};

export const TimeSlots = ({ todaysReservations, setReservation }) => {
  const [timeSlots, setTimeSlots] = useState({});
  const state = useSelector((state) => state);

  useEffect(() => {
    // setTimeSlots(sortReservationsByHour(todaysReservations));
    setTimeSlots(sortReservationsByTime(todaysReservations));
  }, [todaysReservations]);

  return (
    <div id="time-slots">
      {Object.keys(timeSlots).map((timeSlot) => (
        <div key={timeSlot} className="time-slot">
          {timeSlot}{" "}
          <span className="confirmed-total-people">
            <i className="material-icons-round">people</i>{" "}
            <span className="people-number">
              {totalConfirmedPeoplePerHour(timeSlots[timeSlot])}/
              {totalPeoplePerHour(timeSlots[timeSlot])}
            </span>
          </span>
          <div className="reservations">
            {timeSlots[timeSlot].map((reservation, n) => (
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: n * 0.1 }}
                key={reservation.id}
                className={`reservation ${
                  reservation.confirmed ? "confirmed" : ""
                }
                ${
                  state.reservation && reservation.id === state.reservation.id
                    ? "selected-reservation"
                    : ""
                }
                `}
                id={reservation.id}
                onClick={() => {
                  setReservation(reservation);
                }}
              >
                <div className="reservation-name">{reservation.name} </div>
                <span className="reservation-people">
                  {reservation.people ? reservation.people : "?"}
                </span>
                {reservation.note && (
                  <i className="material-icons-round note-notification">note</i>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
