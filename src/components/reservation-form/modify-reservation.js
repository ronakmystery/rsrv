import { getReservationInputs } from "../../functions/reservation-obj";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../../database/redux/actions";

export const ModifyReservation = () => {
  const dispatch = useDispatch();

  const { addReservation } = bindActionCreators(actionCreators, dispatch);

  const state = useSelector((state) => state);

  return (
    <>
      <div className="toggle">
        CONFIRMED
        <label>
          <input type="checkbox" id="reservation-confirmed" />
          <span />
        </label>
      </div>

      {/* check for reservation */}
      {true ? (
        <button
          id="add-reservation"
          onClick={() => {
            addReservation(getReservationInputs(state.day));
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
                console.log("delete");
              }
            }}
          >
            delete
          </button>
          <button
            id="update-reservation"
            onClick={() => {
              console.log("update");
            }}
          >
            update
          </button>
        </>
      )}
    </>
  );
};
