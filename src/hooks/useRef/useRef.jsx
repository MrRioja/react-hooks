import React, { useRef } from "react";
import "./useRef.css";

function Ref() {
  const inputRef = useRef("");

  function handlePrintName() {
    console.log(inputRef.current.value);
  }

  return (
    <div className="container">
      <h1>useRef</h1>
      <input ref={inputRef} />
      <button onClick={handlePrintName}>Print name</button>
    </div>
  );
}

export default Ref;
