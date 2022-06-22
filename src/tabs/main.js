import React, { useEffect, useState, useRef } from "react";

import { Login } from "../components/login";
import { Home } from "./home";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import "./main.scss";

import { Canvas } from "../components/canvas";

export const Main = () => {
  const state = useSelector((state) => state);

  return (
    <motion.div id="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {!state.user ? <Login /> : <Home />}

      {window.innerWidth > 1000 && state.user && <Canvas state={state} />}
    </motion.div>
  );
};
