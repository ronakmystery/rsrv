import React from "react";

// import { TodaySummary } from "../components/today-summary";
// import { Calendar } from "../components/calendar";
// import { DailyNote } from "../components/daily-note";
// import { Reservations } from "../components/reservations";
// import { Account } from "../components/account";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../database/redux/actions";

export const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { setUser, setStyle, setSetting1 } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <>
      Home
      <button
        onClick={() => {
          dispatch(
            setUser("admin"),
            setStyle("dark"),
            setSetting1(!state.settings.etSetting1)
          );
        }}
      >
        test
      </button>
      {/* <Account />
      <TodaySummary />
      <Calendar />
      <DailyNote />
      <Reservations /> */}
    </>
  );
};
