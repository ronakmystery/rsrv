import { useEffect } from "react";
import { getReservationInputs } from "../../functions/reservation-obj";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../../database/redux/actions";

export const ModifyReservation = ({
  setShowForm,
  setReservation,
  server,
  setServer
}) => {
  const dispatch = useDispatch();

  const {
    addReservation,
    deleteReservation,
    updateReservation
  } = bindActionCreators(actionCreators, dispatch);

  const state = useSelector((state) => state);

  return (
    <div id="reservation-buttons">
      {!state.reservation ? (
        <button
          id="add-reservation"
          onClick={() => {
            let day = state.day;

            let reservation = getReservationInputs(day);
            reservation.server = server;

            addReservation(reservation);
            setShowForm(false);
            setServer({});
          }}
        >
          add
        </button>
      ) : (
        <>
          <button
            id="delete-reservation"
            onClick={() => {
              if (window.confirm("Delete this reservation?")) {
                deleteReservation(state.reservation);
                setShowForm(false);
                setReservation(null);
                setServer({});
              }
            }}
          >
            delete
          </button>
          <button
            id="update-reservation"
            onClick={() => {
              let id = state.reservation.id;
              let day = state.day;
              let position = state.reservation.position;
              updateReservation(
                getReservationInputs(day, id, server, position)
              );
              setShowForm(false);
              setReservation(null);
              setServer({});
            }}
          >
            update
          </button>
        </>
      )}
    </div>
  );
};
