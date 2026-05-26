import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="card-container">
      <img src={props.image} width={"100%"} height={210} alt="" />
      <h3>{props.title}</h3>
    </div>
  );
}

export default Card;
