import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App message="Exercise a lot to learn ReactJs :)" />
  </BrowserRouter>,
  document.getElementById("app")
);
