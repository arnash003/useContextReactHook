import React, { useState, createContext } from "react";
import Login from "../Login";
import User from "../User";

export const AppContext = createContext(null);

function ContextTutorial() {
  const [userName, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ userName, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextTutorial;

// A context is a collection of states
// Wherever or whichever component you want to have access to the context
// You wrap it around it using AppContext
// You have access to all these states inside a wrapping provider
// Passs a value to tge provider which is all the states and functions.
