import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import State from "./hooks/useState/useState";
import Effect from "./hooks/useEffect/useEffect";
import Context from "./hooks/useContext/useContext";
import Reducer from "./hooks/useReducer/useReducer";
import Callback from "./hooks/useCallback/useCallback";

ReactDOM.render(
  <React.StrictMode>
    <State />
    <Effect />
    <Context />
    <Reducer />
    <Callback />
  </React.StrictMode>,
  document.getElementById("root")
);
