import { useState } from "react";

function Count() {
  const [value, setValue] = useState(0);

  // function incCount() {
  //   setValue(value + 3); // 0 + 3 // 3 Asynchronous
  //   setValue(value + 2); // 3 +2 // 5
  //   setValue(value + 1); // 5 + 1 // 6
  // }

  function incCount() {
    setValue(function (prevState) {
      //logiccs
      return prevState + 2; // 0 + 2 = 2
    });

    setValue(function (prevState) {
      return prevState + 3; // 2+3 = 5
    });
  }

  function decCount() {
    setValue(value - 1);
  }

  function getValue() {
    return 100;
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
