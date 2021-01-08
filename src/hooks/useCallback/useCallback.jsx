import React, { useCallback, useState } from "react";
import "./useCallback.css";

const fnCounter = new Set();

function Callback() {
  const [counter, setCounter] = useState(0);

  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  const handleMinus = useCallback(() => {
    setCounter((prevState) => prevState - 1);
  }, []);

  fnCounter.add(handlePlus, handleMinus);
  console.log(fnCounter.size);

  return (
    <div className="container">
      <h1>useCallback</h1>
      <h1>{counter}</h1>
      <div className="buttons">
        <Button className="button" onClick={handleMinus} type="-" />
        <Button className="button" onClick={handlePlus} type="+" />
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.type}
    </button>
  );
}

export default Callback;
