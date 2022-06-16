import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../database/redux/actions";

import "react-calendar/dist/Calendar.css";
import "./calendar.scss";

import { motion } from "framer-motion";

export const ReservationCalendar = () => {
  const dispatch = useDispatch();
  const { setDay } = bindActionCreators(actionCreators, dispatch);

  const [value, onChange] = useState(new Date());

  useEffect(() => {
    setDay(value.toLocaleDateString());
  }, [value]);

  return (
    <motion.div
      id="calendar"
      initial={{ scale: 0.75, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Calendar onChange={onChange} value={value} />
    </motion.div>
  );
};
