import React, { useMemo, useState } from "react";
import "./useMemo.css";

function Memo() {
  const [counter, setCounter] = useState(0);

  const doubleCounter = useMemo(() => {
    console.log("Memo rodou");
    return counter * 2;
  }, [counter]);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }

  return (
    <div className="container">
      <h1>useMemo</h1>
      <h1>{counter}</h1>
      <h1>{doubleCounter}</h1>
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

export default Memo;
