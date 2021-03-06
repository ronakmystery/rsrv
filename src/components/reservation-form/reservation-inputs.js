import React, { useEffect } from "react";
import { Inputs } from "../../database/inputs";

export const ReservationInputs = ({
  reservation,
  server,
  setServer,
  servers
}) => {
  useEffect(() => {
    if (reservation) {
      ["name", "people", "note", "time", "phone", "email"].forEach((x) => {
        document.getElementById(`reservation-${x}`).value = reservation[x];
      });
      document.getElementById("reservation-confirmed").checked =
        reservation.confirmed;
      setServer(reservation.server);
    }
  }, [reservation]);

  return (
    <>
      <div className="toggle">
        CONFIRMED
        <label>
          <input type="checkbox" id="reservation-confirmed" />
          <span />
        </label>
      </div>
      <div id="reservation-inputs">
        <div id="servers">
          {servers.map((s) => (
            <button
              className={`server ${
                s.id === server?.id ? "reservation-server" : ""
              }`}
              key={s.id}
              id={s.id}
              onClick={() => {
                if (server?.id === s.id) {
                  setServer({});
                } else {
                  setServer(s);
                }
              }}
            >
              {s.name}
            </button>
          ))}
        </div>

        {Inputs.map((x) => (
          <div key={x.input} className="input">
            <i className="material-icons-round">{x.icon}</i>
            <input
              id={`reservation-${x.input}`}
              placeholder={x.input}
              type={x.type}
              max={x.max}
              maxLength={x.limit}
              required={x.req}
            />
          </div>
        ))}

        <div className="input">
          <i className="material-icons-round">schedule</i>
          <input
            type="time"
            id="reservation-time"
            defaultValue="12:00"
            required
          />
        </div>

        <div className="input">
          <i className="material-icons-round">note</i>
          <textarea
            rows="3"
            maxLength="50"
            placeholder="Note..."
            id="reservation-note"
          ></textarea>
        </div>

        <div className="input">
          <i className="material-icons-round">phone</i>
          <input
            id="reservation-phone"
            placeholder="phone"
            type="text"
            maxLength="10"
          />
        </div>

        <div className="input">
          <i className="material-icons-round">email</i>
          <input
            id="reservation-email"
            placeholder="email"
            type="email"
            maxLength="50"
          />
        </div>
      </div>
    </>
  );
};
