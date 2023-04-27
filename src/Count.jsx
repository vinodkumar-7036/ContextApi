import React, { useContext } from "react";
import { store } from "./App";

function Count() {
  const { data, setData } = useContext(store);
  return (
    <div>
      <h3> {data.length}</h3>
      <div></div>
    </div>
  );
}

export default Count;
