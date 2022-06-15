import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { ReservationInputs } from "./reservation-inputs";
import { ModifyReservation } from "./modify-reservation";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../../database/redux/actions";

import "./reservation-form.scss";

export const ReservationForm = () => {
  const dispatch = useDispatch();

  const { setReservation } = bindActionCreators(actionCreators, dispatch);

  const [showForm, setShowForm] = useState(false);

  const reservation = useSelector((state) => state.reservation);

  useEffect(() => {
    if (reservation) {
      setShowForm(true);
    }
  }, [reservation]);

  return (
    <>
      {!showForm ? (
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
      ) : (
        <div id="reservation-form">
          <button
            id="close-reservation-form"
            onClick={() => {
              setShowForm(false);
              setReservation(null);
            }}
          >
            <i className="material-icons-round">minimize</i>
          </button>

          <ReservationInputs reservation={reservation} />
          <ModifyReservation
            setShowForm={setShowForm}
            setReservation={setReservation}
          />
        </div>
      )}
    </>
  );
};
