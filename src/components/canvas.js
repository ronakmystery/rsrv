import { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";

import { convert24to12 } from "../functions/time";
import { getInitals } from "../functions/get-initals";

import "./canvas.scss";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../database/redux/actions";

export const Canvas = ({ state }) => {
  const dispatch = useDispatch();
  const { setReservation, updateReservation } = bindActionCreators(
    actionCreators,
    dispatch
  );

  let todaysReservations = state.reservations.filter(
    (reservation) => reservation.day === state.day
  );

  const constraintsRef = useRef(null);

  let updateReservationPosition = (e, reservation) => {
    reservation.position = {};
    reservation.position.x =
      e.currentTarget.getBoundingClientRect().x - 350 - 20;
    reservation.position.y = e.currentTarget.getBoundingClientRect().y - 20;

    updateReservation(reservation);
  };

  const [tally, setTally] = useState({});

  useEffect(() => {
    let x = {};
    todaysReservations.forEach((r) => {
      if (r.server?.id) {
        if (x[r.server.id]) {
          x[r.server.id] = {
            name: r.server.name,
            people: (x[r.server.id].people += r.people)
          };
        } else {
          x[r.server.id] = {
            name: r.server.name,
            people: r.people
          };
        }
      }
    });
    setTally(x);
  }, [state]);

  return (
    <div id="canvas">
      {
        <div id="canvas-reservations" ref={constraintsRef}>
          {todaysReservations.map((reservation, n) => (
            <motion.div
              drag
              dragMomentum={false}
              dragElastic={0}
              dragConstraints={constraintsRef}
              onTouchEnd={(e) => {
                updateReservationPosition(e, reservation);
              }}
              onMouseUp={(e) => {
                updateReservationPosition(e, reservation);
              }}
              initial={{
                opacity: 0,
                left: reservation.position?.x,
                top: reservation.position?.y
              }}
              animate={{ opacity: 1 }}
              key={reservation.id}
              className={`canvas-reservation ${
                reservation.confirmed ? "confirmed" : ""
              }
              ${
                state.reservation && reservation.id === state.reservation.id
                  ? "selected-reservation"
                  : ""
              }
              `}
              id={`canvas-${reservation.id}`}
              onClick={() => {
                setReservation(reservation);

                document.getElementById(`${reservation.id}`).scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center"
                });
              }}
            >
              <div>{convert24to12(reservation.time)}</div>
              <div className="reservation-name">{reservation.name} </div>
              <div> {reservation.people ? reservation.people : "?"}</div>
              {reservation.server?.name && (
                <div className="reservation-server">
                  {reservation.server.name.slice(0, 3)}
                </div>
              )}
              {reservation.note && (
                <i className="material-icons-round reservation-note">note</i>
              )}
            </motion.div>
          ))}
        </div>
      }

      <div id="server-tally">
        TALLY
        {Object.keys(tally).map((id) => (
          <div key={id} className="server">
            {tally[id].people ? tally[id].people : "?"} {tally[id].name}
          </div>
        ))}
      </div>
    </div>
  );
};
