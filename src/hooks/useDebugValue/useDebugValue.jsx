import React, { useEffect, useState, useDebugValue } from "react";
import "./useDebugValue.css";

function DebugValue() {
  const [name, setName] = useLocalState("name");

  return (
    <div className="container">
      <h1 className="imperativeHandle">useDebugValue</h1>
      <h1 className="imperativeHandle">{name}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

function useLocalState(key, initialValue = "") {
  const [state, setState] = useState(() => {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      return JSON.parse(storedData);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  useDebugValue(`Name: ${state}`, (message) => {
    return message.toUpperCase();
  });

  return [state, setState];
}

export default DebugValue;
