import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../database/redux/actions";

export const ReservationCalendar = () => {
  const dispatch = useDispatch();
  const { setDay } = bindActionCreators(actionCreators, dispatch);

  const [value, onChange] = useState(new Date());

  useEffect(() => {
    setDay(value);
  }, [value]);

  return (
    <div id="calendar">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};
