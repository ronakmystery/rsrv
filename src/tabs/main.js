import React, { useEffect, useState, useRef } from "react";

import { Login } from "../components/login";
import { Home } from "./home";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import "./main.scss";

export const Main = () => {
  const state = useSelector((state) => state);

  return (
    <motion.div id="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {!state.user ? <Login /> : <Home />}

      {window.innerWidth > 1000 && state.user && (
        <div id="ipad">
          <div id="draw">
            <button
              className="erase"
              onClick={() => {
                if (window.confirm("Clear canvas?")) {
                }
              }}
            >
              <i className="material-icons-round">clear</i>
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};
