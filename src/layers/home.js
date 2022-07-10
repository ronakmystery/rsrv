import React from "react";

import { DaySummary } from "../components/day-summary";
import { ReservationForm } from "../components/reservation-form";

import { ReservationCalendar } from "../components/calendar";
import { DailyNote } from "../components/daily-note";
import { Reservations } from "../components/reservations";
import { Account } from "../components/account";

import { motion } from "framer-motion";
export const Home = () => {
  return (
    <motion.div id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Account />
      <DaySummary />
      <ReservationCalendar />
      <DailyNote />
      <Reservations />
      <ReservationForm />
    </motion.div>
  );
};
