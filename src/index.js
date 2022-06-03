import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./loader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
