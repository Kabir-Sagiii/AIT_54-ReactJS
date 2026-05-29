import React from "react";

function B(props) {
  //props = {data:"Kabir"}
  return (
    <div className="dummy-title">
      <h1>Child Component B :{props.data}</h1>
    </div>
  );
}

export default B;
