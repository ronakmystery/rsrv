import React from "react";
import { Main } from "./layers/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
