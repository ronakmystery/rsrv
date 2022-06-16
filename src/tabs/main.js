import React from "react";

import { Login } from "../components/login";
import { Home } from "./home";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import "./main.scss";

export const Main = () => {
  const state = useSelector((state) => state);

  return (
    <motion.div id="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {!state.user ? <Login /> : <Home />}
    </motion.div>
  );
};
