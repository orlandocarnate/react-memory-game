import React from "react";
import "./style.css";

// Dumb component only receives props
function PokeCard(props) {
  return (
    <div className="col-sm-4 mb-4">
      <div className="card" onClick={() => props.pickedCard(props.id)}>
        <div className="img-container">
          <img
            className="card-img"
            alt={props.name}
            src={process.env.PUBLIC_URL + props.image}
          />
        </div>
      </div>
    </div>
  );
}

export default PokeCard;
