import { useEffect } from "react";
import { getReservationInputs } from "../../functions/reservation-obj";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../../database/redux/actions";

export const ModifyReservation = ({ setShowForm, setReservation }) => {
  const dispatch = useDispatch();

  const { addReservation, deleteReservation } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const state = useSelector((state) => state);

  useEffect(() => {
    if (state.reservation) {
      document.getElementById("reservation-confirmed").checked =
        state.reservation.confirmed;
    }
  }, [state.reservation]);

  return (
    <>
      <div className="toggle">
        CONFIRMED
        <label>
          <input type="checkbox" id="reservation-confirmed" />
          <span />
        </label>
      </div>

      {!state.reservation ? (
        <button
          id="add-reservation"
          onClick={() => {
            addReservation(getReservationInputs(state.day));
            setShowForm(false);
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
              }
            }}
          >
            delete
          </button>
          <button
            id="update-reservation"
            onClick={() => {
              deleteReservation(state.reservation);
              addReservation(getReservationInputs(state.day));
              setShowForm(false);
              setReservation(null);
            }}
          >
            update
          </button>
        </>
      )}
    </>
  );
};