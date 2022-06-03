import React from "react";

// import { TodaySummary } from "../components/today-summary";
// import { Calendar } from "../components/calendar";
// import { DailyNote } from "../components/daily-note";
// import { Reservations } from "../components/reservations";
// import { Account } from "../components/account";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../database/redux/actions";
// import { bindActionCreators } from "redux";

// import * as actionCreators from "../database/redux/actions";

export const Home = () => {
  let state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  // const { setUser } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      Home
      <button
        onClick={() => {
          dispatch(setUser("admin"));
        }}
      >
        test
      </button>
      {`current user is ${state.user}`}
      {/* <Account />
      <TodaySummary />
      <Calendar />
      <DailyNote />
      <Reservations /> */}
    </>
  );
};
