import React from "react";

import { ReactComponent as BannerImg } from "../assets/banner-img.svg";
import { LoginForm } from "./login-form";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../database/redux/actions";

import { SampleReservations } from "../database/sample";

export const Login = () => {
  const dispatch = useDispatch();

  const { setUser, setReservations } = bindActionCreators(
    actionCreators,
    dispatch
  );

  //force guest
  setUser("guest");
  setReservations(SampleReservations);
  //

  return (
    <div id="login">
      <div id="app-name">RSRV</div>
      <div id="app-slogan">Never lose a reservation again...</div>
      <button
        onClick={() => {
          setUser("guest");
          setReservations(SampleReservations);
        }}
      >
        try now
      </button>
      <LoginForm />
      <BannerImg />
    </div>
  );
};
