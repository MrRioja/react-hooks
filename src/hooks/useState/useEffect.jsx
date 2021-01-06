import React, { useEffect, useState } from "react";
import "./useState.css";

function State() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(localStorage.getItem("counter"));
  }, []);

  return (
    <div className="container">
      <h1>useEffect</h1>
      <h1>{counter}</h1>
    </div>
  );
}

export default State;
