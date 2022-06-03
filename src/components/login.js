import React, { useState, useEffect } from "react";

import { ReactComponent as BannerImg } from "../assets/banner-img.svg";
import { LoginForm } from "./login-form";

export const Login = () => {
  return (
    <>
      <div id="app-name">RSRV</div>
      <div id="app-slogan">Never lose a reservation again...</div>
      <button>try now</button>
      <LoginForm username />
      <BannerImg />
    </>
  );
};
