import React, { useState } from "react";

import { ReservationInputs } from "./reservation-inputs";
import { ModifyReservation } from "./modify-reservation";

export const ReservationForm = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {showForm ? (
        <button>
          <i
            className="material-icons-round"
            onClick={() => {
              setShowForm(false);
            }}
          >
            add
          </i>
        </button>
      ) : (
        <div id="reservation-form">
          <button
            onClick={() => {
              setShowForm(true);
            }}
          >
            <i className="material-icons-round">minimize</i>
          </button>

          <ReservationInputs />
          <ModifyReservation />
        </div>
      )}
    </div>
  );
};
