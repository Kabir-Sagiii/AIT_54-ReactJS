import { useState } from "react";
import B from "./B";

function A() {
  var [state, setState] = useState("Kabir");

  const modify = () => {
    setState("AIT");
  };

  return (
    <div className="dummy-title">
      <h1>Parent Component A</h1>
      <br />
      <button onClick={modify}>Submit</button>
      <br />
      <br />
      <hr />
      <B data={state} />
    </div>
  );
}

export default A;
