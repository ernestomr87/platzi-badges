import React from "react";
import ReactDom from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import App from "./components/App";

const container = document.getElementById("root");

// ReactDom.render(_qué_, _dónde_);
ReactDom.render(<App />, container);
