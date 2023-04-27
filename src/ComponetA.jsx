import React, { useContext } from "react";
import { store } from "./App";
function ComponetA() {
  const [data, setData] = useContext(store);
  return (
    <div className="card">
      <div className="card-body">Component A{data}</div>
    </div>
  );
}

export default ComponetA;
