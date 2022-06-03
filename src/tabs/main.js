import React, { useState, useEffect } from "react";

import { Login } from "../components/login";
import { Home } from "./home";

import { useSelector } from "react-redux";

export const Main = () => {
  // const user = useSelector((state) => state.app.user);
  // console.log(user);

  return (
    <>
      {/* {`current user is ${user}`} */}
      {/* <Login /> */}
      <Home />
    </>
  );
};
