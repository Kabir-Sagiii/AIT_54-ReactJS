import { useState } from "react";

function Count() {
  const [value, setValue] = useState(0);

  function incCount() {
    setValue(value + 1);
  }

  function decCount() {
    setValue(value - 1);
  }

  return (
    <div className="dummy-title">
      <h1>Count Value is : {value} </h1>
      <br />
      <button onClick={incCount}>incCount</button>&nbsp;&nbsp;
      <button onClick={decCount}>decCount</button>
    </div>
  );
}

export default Count;
