import { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";

import { convert24to12 } from "../functions/time";

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
                reservation.position = {};
                reservation.position.x =
                  e.currentTarget.getBoundingClientRect().x - 350;
                reservation.position.y = e.currentTarget.getBoundingClientRect().y;

                updateReservation(reservation);
              }}
              initial={{
                opacity: 0,
                left: reservation.position.x,
                top: reservation.position.y
              }}
              animate={{ opacity: 1 }}
              transition={{ delay: n * 0.1 }}
              key={reservation.id}
              className={`canvas-reservation ${
                reservation.confirmed ? "confirmed" : ""
              }`}
              id={`canvas-${reservation.id}`}
              onClick={() => {
                setReservation(reservation);
              }}
            >
              <span className="time">{convert24to12(reservation.time)}</span>{" "}
              {reservation.name} {reservation.people}
              {reservation.note && (
                <i className="material-icons-round note-notification">note</i>
              )}
            </motion.div>
          ))}
        </div>
      }
    </div>
  );
};
