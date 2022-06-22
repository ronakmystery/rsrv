import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { bindActionCreators, compose } from "redux";

import "./settings.scss";
import * as actionCreators from "../../database/redux/actions";
import { ID } from "../../functions/id";

export const Settings = ({ settings, setSettings, state }) => {
  const dispatch = useDispatch();
  const { addServer, deleteServer } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [server, setServer] = useState("");

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
                <button
                  id={s.id}
                  key={s.id}
                  onClick={() => {
                    if (window.confirm("Delete Server?")) {
                      deleteServer(s);
                    }
                  }}
                >
                  {s.name}
                </button>
              ))}

              <div id="add-server">
                <input
                  placeholder="server..."
                  value={server}
                  onChange={(e) => setServer(e.target.value)}
                ></input>
                <i
                  className="material-icons-round"
                  onClick={() => {
                    addServer({
                      id: ID(),
                      name: server
                    });
                    setServer("");
                  }}
                >
                  check
                </i>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
