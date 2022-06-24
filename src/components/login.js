import React, { useEffect } from "react";

import "./login.scss";

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
    reservations: state.reservations,
    servers: state.servers
  };
  LS.save(data);
});

export const Login = () => {
  const dispatch = useDispatch();

  const {
    setUser,
    setReservations,
    setDailyNotes,
    setServers
  } = bindActionCreators(actionCreators, dispatch);

  let loginGuest = () => {
    LS.init();
    setUser("guest");
    setReservations(LS.data.reservations);
    setDailyNotes(LS.data.dailynotes);
    setServers(LS.data.servers);
  };

  // force guest
  // loginGuest();

  return (
    <div id="login-page">
      <div id="app-name">RSRV</div>
      <button
        id="try-now-button"
        onClick={() => {
          loginGuest();
        }}
      >
        try now
      </button>

      {/* <LoginForm /> */}
      <a href="mailto:ronakmystery@gmail.com">
        <div id="about">
          Designed & Developed by <div>Ronak Mistry</div>
        </div>
        {/* <button id="sign-up-button">sign up</button> */}
      </a>
      <BannerImg id="login-banner-img" />
    </div>
  );
};
