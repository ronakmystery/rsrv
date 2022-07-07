import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { ReservationInputs } from "./reservation-inputs";
import { ModifyReservation } from "./modify-reservation";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../../database/redux/actions";

import "./reservation-form.scss";

import { motion } from "framer-motion";

export const ReservationForm = () => {
  const dispatch = useDispatch();

  const { setReservation } = bindActionCreators(actionCreators, dispatch);

  const [showForm, setShowForm] = useState(false);

  const [server, setServer] = useState({});

  const state = useSelector((state) => state);

  useEffect(() => {
    if (state.reservation) {
      setShowForm(true);
      setServer(state.reservation.server);
    } else {
      setShowForm(false);
      setServer({});
    }
  }, [state.reservation]);

  return (
    <>
      {!showForm ? (
        <div id="bottom-bar">
          <button id="open-reservation-button">
            <i
              className="material-icons-round"
              onClick={() => {
                setShowForm(true);
              }}
            >
              add
            </i>
          </button>
        </div>
      ) : (
        <motion.div
          id="reservation-form"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <button
            id="close-reservation-form"
            onClick={() => {
              setShowForm(false);
              setReservation(null);
              setServer({});
            }}
          >
            <i className="material-icons-round">arrow_downward</i>
          </button>

          <ReservationInputs
            reservation={state.reservation}
            server={server}
            setServer={setServer}
            servers={state.servers}
          />

          <ModifyReservation
            setShowForm={setShowForm}
            setReservation={setReservation}
            server={server}
            setServer={setServer}
          />
        </motion.div>
      )}
    </>
  );
};
