import React, { useReducer } from "react";
import "./useReducer.css";

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return {
        counter: state.counter + 1,
        click: state.click + 1,
      };

    case "minus":
      return {
        counter: state.counter - 1,
        click: state.click + 1,
      };

    default:
      return state;
  }
}

const initialValue = {
  counter: 0,
  click: 0,
};

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  function handlePlus() {
    dispatch({ type: "plus" });
  }

  function handleMinus() {
    dispatch({ type: "minus" });
  }

  return (
    <div className="container">
      <h1>useReducer</h1>
      <h1>{state.counter}</h1>
      <h1>Clicks: {state.click}</h1>
      <div className="buttons">
        <button className="button" onClick={handleMinus}>
          -
        </button>
        <button className="button" onClick={handlePlus}>
          +
        </button>
      </div>
    </div>
  );
}

export default Reducer;
