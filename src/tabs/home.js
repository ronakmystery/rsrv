import React from "react";

import { DaySummary } from "../components/day-summary";
import { ReservationForm } from "../components/reservation-form/reservation-form";

import { ReservationCalendar } from "../components/calendar";
import { DailyNote } from "../components/daily-note";
import { Reservations } from "../components/reservations/reservations";
import { Account } from "../components/account/account";

export const Home = () => {
  return (
    <div id="home">
      <Account />
      <DaySummary />
      <ReservationCalendar />
      <DailyNote />
      <Reservations />
      <ReservationForm />
    </div>
  );
};
