import React from "react";

import { TodaySummary } from "../components/today-summary";
import { ReservationForm } from "../components/reservation-form/reservation-form";

// import { Calendar } from "../components/calendar";
// import { DailyNote } from "../components/daily-note";
// import { Reservations } from "../components/reservations";
import { Account } from "../components/account";

export const Home = () => {
  return (
    <>
      <Account />
      <TodaySummary />
      <ReservationForm />
      {/* <Calendar /> */}
      {/* <DailyNote /> */}
      {/* <Reservations /> */}
    </>
  );
};
