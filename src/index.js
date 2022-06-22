import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";

import { Provider } from "react-redux";
import { store } from "./database/redux/reducers";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// store.subscribe(() => {
//   console.log(store.getState());
// });

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
