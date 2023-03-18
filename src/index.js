import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataLayer from "./utils/DataLayer";
import reducer, { initialState } from "./utils/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);
