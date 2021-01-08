import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import State from "./hooks/useState/useState";
import Effect from "./hooks/useEffect/useEffect";
import Context from "./hooks/useContext/useContext";
import Reducer from "./hooks/useReducer/useReducer";
import Callback from "./hooks/useCallback/useCallback";
import Memo from "./hooks/useMemo/useMemo";

ReactDOM.render(
  <React.StrictMode>
    <State />
    <Effect />
    <Context />
    <Reducer />
    <Callback />
    <Memo />
  </React.StrictMode>,
  document.getElementById("root")
);
