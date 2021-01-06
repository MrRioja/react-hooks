import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import State from "./hooks/useState/useState";
import Effect from "./hooks/useState/useEffect";

ReactDOM.render(
  <React.StrictMode>
    <State />
    <Effect />
  </React.StrictMode>,
  document.getElementById("root")
);
