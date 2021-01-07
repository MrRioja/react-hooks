import React, { createContext, useContext } from "react";
import "./useContext.css";

const ThemeContext = createContext();

function Context() {
  return (
    <div className="container">
      <h1>useContext</h1>
      <ThemeContext.Provider value={{ mode: "Dark" }}>
        <Button />
      </ThemeContext.Provider>
    </div>
  );
}

function Button() {
  const theme = useContext(ThemeContext);

  return <button className="button_context">{theme.mode}</button>;
}

export default Context;
