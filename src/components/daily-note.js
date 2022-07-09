import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../database/redux/actions";

import "./daily-note.scss";

export const DailyNote = () => {
  const dispatch = useDispatch();

  const { addDailyNote } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state) => state);

  useEffect(() => {
    let dailynote = state.dailynotes[state.day];
    if (dailynote) {
      document.getElementById("daily-note").innerText = dailynote;
    } else {
      document.getElementById("daily-note").innerText = "Note...";
    }
  }, [state.day]);

  return (
    <div
      id="daily-note"
      contentEditable={true}
      onInput={(e) => {
        let dailynote = {};
        dailynote[state.day] = e.currentTarget.innerText;
        addDailyNote(dailynote);
      }}
    />
  );
};
