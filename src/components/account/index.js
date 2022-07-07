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

  return (
    <div id="account">
      {!topBar && (
        <i
          className="material-icons-round"
          alt="user-img"
          id="user-img"
          onClick={() => {
            setTopBar(true);
          }}
        >
          manage_accounts
        </i>
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
            arrow_backward
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
