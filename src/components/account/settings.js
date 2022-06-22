import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./settings.scss";

export const Settings = ({ settings, setSettings, state }) => {
  console.log(state);
  return (
    <>
      {!settings && (
        <button
          onClick={() => {
            setSettings(true);
          }}
        >
          settings
        </button>
      )}

      <AnimatePresence></AnimatePresence>

      <AnimatePresence>
        {settings && (
          <motion.div
            id="settings"
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <i
              id="close-settings"
              onClick={() => {
                setSettings(false);
              }}
              className="material-icons-round"
            >
              arrow_backward
            </i>

            <div id="servers-setting">
              {state.servers.map((s) => (
                <button id={s} key={s}>
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
