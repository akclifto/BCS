import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./router/routes";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

if (process.env.NODE_ENV !== "production") {
  console.log("We are in development mode!");
}

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
