import React, { useEffect } from "react";

import { ReactComponent as BannerImg } from "../assets/banner-img.svg";
import { LoginForm } from "./login-form";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../database/redux/actions";

import { store } from "../database/redux/reducers";

import { LS } from "../functions/local-storage";

store.subscribe(() => {
  let state = store.getState();
  let data = {
    dailynotes: state.dailynotes,
    reservations: state.reservations
  };
  LS.save(data);
});

export const Login = () => {
  const dispatch = useDispatch();

  const { setUser, setReservations, setDailyNotes } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div id="login">
      <div id="app-name">RSRV</div>
      <div id="app-slogan">Never lose a reservation again...</div>
      <button
        onClick={() => {
          LS.init();

          setUser("guest");
          setReservations(LS.data.reservations);
          setDailyNotes(LS.data.dailynotes);
        }}
      >
        try now
      </button>
      <a href="mailto:ronakmystery@gmail.com">
        <button className="email">sign up</button>
      </a>
      <LoginForm />
      <BannerImg />
    </div>
  );
};
