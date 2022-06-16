import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../database/redux/actions";

import { useSelector } from "react-redux";

import "./account.scss";

import { motion } from "framer-motion";

export const Account = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [settings, setSettings] = useState([false]);

  const { setUser } = bindActionCreators(actionCreators, dispatch);

  let logo = `https://res.cloudinary.com/baudelaire/image/upload/w_100/v1587884625/reserve/${state.user}`;

  return (
    <div id="account">
      <img
        alt="user-img"
        src={logo}
        id="user-img"
        onClick={() => {
          setSettings(!settings);
        }}
      />

      {!settings && (
        <motion.div
          id="settings"
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

          <button onClick={() => {}}>???</button>
        </motion.div>
      )}
    </div>
  );
};
