import React, { useEffect, useState, useRef } from "react";

import { Login } from "../components/login";
import { Home } from "./home";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import "./main.scss";

import CanvasDraw from "react-canvas-draw";

export const Main = () => {
  const state = useSelector((state) => state);

  const canvas = useRef();

  return (
    <motion.div id="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {!state.user ? <Login /> : <Home />}

      {window.screen.width > 1000 && state.user && (
        <div id="ipad">
          <div id="draw">
            <CanvasDraw
              ref={canvas}
              hideGrid={true}
              canvasWidth={window.screen.width - 460}
              hideInterface={true}
              canvasHeight={window.screen.height - 40}
              brushRadius={1}
              enablePanAndZoom={true}
              lazyRadius={0}
            />
            <button
              className="erase"
              onClick={() => {
                if (window.confirm("Clear canvas?")) {
                  canvas.current.eraseAll();
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
