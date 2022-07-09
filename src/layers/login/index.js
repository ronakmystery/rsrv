import React from "react";

import "./login.scss";

import { ReactComponent as BannerImg } from "../../assets/banner-img.svg";
// import { LoginForm } from "./login-form";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../../database/redux/actions";

import { store } from "../../database/redux/reducers";

import { LS } from "../../functions/local-storage";

import { Features } from "./features";

import { motion } from "framer-motion";

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
    <motion.div
      id="login-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div id="app-name">
        RSRV<sub>BETA</sub>
      </div>
      <button
        id="try-now-button"
        onClick={() => {
          loginGuest();
        }}
      >
        try now
      </button>

      {/* <LoginForm /> */}

      <BannerImg id="login-banner-img" />

      <Features />

      <div id="about">
        Designed & Developed by
        <a href="mailto:ronakmystery@gmail.com">Ronak Mistry</a>
        <a href="https://github.com/ronakmystery/rsrv">
          <i className="material-icons-round github">code</i>
        </a>
      </div>
    </motion.div>
  );
};
