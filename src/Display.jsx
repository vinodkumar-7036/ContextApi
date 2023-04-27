import React, { useContext, useState } from "react";
import { store } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

function Display() {
  const { data, setData } = useContext(store);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    setData([...data, { brandname: name }]);
    setName("");
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        {data.map((item) => (
          <h3>{item.brandname}</h3>
        ))}
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter brand name"
          />
          {/* <input type="submit" value="Add" /> */}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Display;
