import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../database/redux/actions";

import { useSelector } from "react-redux";

export const Account = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [settings, setSettings] = useState([false]);

  const { setUser } = bindActionCreators(actionCreators, dispatch);

  let logo = `https://res.cloudinary.com/baudelaire/image/upload/w_100/v1587884625/reserve/${state.user}`;

  return (
    <div id="account">
      <img
        alt="logo"
        src={logo}
        className="logo"
        onClick={() => {
          setSettings(!settings);
        }}
      />

      {!settings && (
        <div id="settings">
          settings
          <button
            className="logout-button"
            onClick={() => {
              setUser(null);
            }}
          >
            logout
          </button>
        </div>
      )}
    </div>
  );
};
