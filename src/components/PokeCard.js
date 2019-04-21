import React from "react";
import "./style.css";

// Dumb component only receives props
function PokeCard(props) {
  return (
    <div className="card" onClick={ ()=> props.pickedCard(props.id)}>
      <div className="img-container">
        <img
          alt={props.name}
          src={props.image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PokeCard;
