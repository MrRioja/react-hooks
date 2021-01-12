import React, { useLayoutEffect, useState } from "react";
import "./useLayoutEffect.css";

function LayoutEffect() {
  const [counter, setCounter] = useState(0);

  useLayoutEffect(() => {
    setInterval(() => {
      setCounter(sessionStorage.getItem("counter"));
    }, 3000);
  }, []);

  return (
    <div className="container">
      <h1 class="imperativeHandle">useLayoutEffect</h1>
      <h1>{counter}</h1>
    </div>
  );
}

export default LayoutEffect;
