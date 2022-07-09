import React from "react";

import { Login } from "./login";
import { Home } from "./home";

import { useSelector } from "react-redux";

import "./main.scss";

import { Canvas } from "../components/canvas";

export const Main = () => {
  const state = useSelector((state) => state);

  return (
    <div id="main">
      {!state.user ? <Login /> : <Home />}

      {window.innerWidth > 1000 && state.user && <Canvas state={state} />}
    </div>
  );
};
