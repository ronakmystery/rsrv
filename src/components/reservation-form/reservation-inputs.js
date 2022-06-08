import { Inputs } from "../../database/inputs";

export const ReservationInputs = () => {
  return (
    <div id="reservation-inputs">
      {Inputs.map((x) => (
        <div key={x.input} className="input">
          <i className="material-icons-round">{x.icon}</i>
          <input
            id={x.input}
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
        <input type="time" id="time" defaultValue="12:00" required />
      </div>

      <div>
        <i className="material-icons-round">note</i>
        <textarea
          rows="3"
          maxLength="50"
          placeholder="note..."
          id="reservation-note"
        ></textarea>
      </div>

      <div className="input">
        <i className="material-icons-round">phone</i>
        <input id="phone" placeholder="phone" type="text" maxLength="10" />
      </div>

      <div className="input">
        <i className="material-icons-round">email</i>
        <input id="email" placeholder="email" type="email" maxLength="50" />
      </div>
    </div>
  );
};
