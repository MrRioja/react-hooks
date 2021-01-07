import React, { useEffect, useState } from "react";
import "./useEffect.css";

function Effect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(sessionStorage.getItem("counter"));
  }, []);

  return (
    <div className="container">
      <h1>useEffect</h1>
      <h1>{counter}</h1>
    </div>
  );
}

export default Effect;
