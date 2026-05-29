import { useState } from "react";

function Title() {
  var [state, setState] = useState("Welcome to State Concept");

  function updateState() {
    setState("Hello, State Concept");
  }

  return (
    <div className="dummy-title">
      <h1>{state}</h1>
      <br />
      <button onClick={updateState}>Submit</button>
    </div>
  );
}

export default Title;
