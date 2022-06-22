import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../../database/redux/actions";

import { useSelector } from "react-redux";

import "./account.scss";

import { motion } from "framer-motion";
import { Settings } from "./settings";

export const Account = () => {
  const state = useSelector((state) => state);

  const [topBar, setTopBar] = useState(false);

  const [settings, setSettings] = useState(false);

  const dispatch = useDispatch();
  const { setUser } = bindActionCreators(actionCreators, dispatch);

  let logo = `https://res.cloudinary.com/baudelaire/image/upload/w_100/v1587884625/reserve/${state.user}`;

  return (
    <div id="account">
      {!topBar && (
        <img
          alt="user-img"
          src={logo}
          id="user-img"
          onClick={() => {
            setTopBar(true);
          }}
        />
      )}

      {topBar && (
        <motion.div
          id="top-bar"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <button
            id="logout-button"
            onClick={() => {
              setUser(null);
            }}
          >
            logout
          </button>

          <i
            id="close-top-bar"
            onClick={() => {
              setTopBar(false);
            }}
            className="material-icons-round"
          >
            arrow_forward
          </i>

          <Settings
            settings={settings}
            setSettings={setSettings}
            state={state}
          />
        </motion.div>
      )}
    </div>
  );
};
