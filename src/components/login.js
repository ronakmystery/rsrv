import React, { useState, useEffect } from "react";

import { ReactComponent as BannerImg } from "../assets/banner-img.svg";
import { LoginForm } from "./login-form";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../database/redux/actions";

export const Login = () => {
  const dispatch = useDispatch();

  const { setUser } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <div id="app-name">RSRV</div>
      <div id="app-slogan">Never lose a reservation again...</div>
      <button
        onClick={() => {
          dispatch(setUser("guest"));
        }}
      >
        try now
      </button>
      <LoginForm />
      <BannerImg />
    </>
  );
};
