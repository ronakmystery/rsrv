import { getReservationInputs } from "../../functions/reservation-obj";

export const ModifyReservation = () => {
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
            console.log(getReservationInputs());
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
