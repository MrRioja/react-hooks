import React, { useState } from "react";
import "./useState.css";

function State() {
  const [counter, setCounter] = useState(0);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
    sessionStorage.setItem("counter", counter + 1);
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1);
    sessionStorage.setItem("counter", counter - 1);
  }

  return (
    <div className="container">
      <h1>useState</h1>
      <h1>{counter}</h1>
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

export default State;
