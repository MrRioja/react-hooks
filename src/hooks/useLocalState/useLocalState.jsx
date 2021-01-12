import React, { useEffect, useState } from "react";
import "./useLocalState.css";

function LocalState() {
  const [name, setName] = useLocalState("name");

  return (
    <div className="container">
      <h1 className="imperativeHandle">useLocalState</h1>
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

  return [state, setState];
}

export default LocalState;
