import React, { useState, useEffect } from "react";

import { Login } from "../components/login";
import { Home } from "./home";

import { useSelector } from "react-redux";

export const Main = () => {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <>
      {`current user is ${state.user}`}
      {/* <Login /> */}
      <Home />
    </>
  );
};