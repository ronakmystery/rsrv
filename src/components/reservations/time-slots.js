import React, { useEffect, useState } from "react";
import moment from "moment";

import {
  totalPeoplePerHour,
  totalConfirmedPeoplePerHour
} from "../../functions/get-totals";

export const TimeSlots = ({ todaysReservations, setReservation }) => {
  const [timeSlots, setTimeSlots] = useState({});

  let convert24to12 = (time) => {
    return moment(time, ["hh.mm"]).format("h:mm a");
  };

  let convertToHour = (time) => {
    return moment(time, ["hh.mm"]).format("hA");
  };

  useEffect(() => {
    let timeSlots = {};

    let hours = [
      ...new Set(
        todaysReservations.map((reservation) => convertToHour(reservation.time))
      )
    ].sort((a, b) => (a > b ? 1 : -1));

    hours.forEach((hour) => {
      timeSlots[hour] = [
        ...todaysReservations.filter(
          (reservation) => convertToHour(reservation.time) === hour
        )
      ];
    });

    setTimeSlots(timeSlots);
  }, [todaysReservations]);

  return (
    <>
      {Object.keys(timeSlots).map((timeSlot) => (
        <div key={timeSlot}>
          {timeSlot}

          <span className="confirmed-total-people">
            <i className="material-icons-round">people</i>
            <span className="people-number">
              {totalConfirmedPeoplePerHour(timeSlots[timeSlot])}/
              {totalPeoplePerHour(timeSlots[timeSlot])}
            </span>
          </span>

          <div className="reservations">
            {timeSlots[timeSlot].map((reservation) => (
              <div
                key={reservation.id}
                onClick={() => {
                  setReservation(reservation);
                }}
              >
                {reservation.name} {reservation.people}{" "}
                {convert24to12(reservation.time)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
