import "./App.css";
import React, { createContext, useState } from "react";
import Count from "./Count";
import Display from "./Display";
import Material from "./Material";

export const store = createContext();

function App() {
  const [data, setData] = useState([
    { brandname: "Honor" },
    { brandname: "Realme" },
    { brandname: "Iphone" },
    { brandname: "MI" },
  ]);
  return (
    <div className="App">
      <store.Provider value={{ data, setData }}>
        <Count />
        <Display />
      </store.Provider>
      <Material />
    </div>
  );
}

export default App;
