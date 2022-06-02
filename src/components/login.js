import React from "react";
import { ReactComponent as BannerImg } from "../assets/banner-img.svg";

export const Login = () => {
  return (
    <>
      <div className="app-name">RSRV</div>
      <div className="app-slogan">Never lose a reservation again...</div>
      <button className="guest-mode-button">try now</button>
      <BannerImg />
    </>
  );
};
