import React from "react";
import "./style.css";

// Dumb component only receives props
// The Parent App Component passes a function to the Pokecard component so that Pokecard can update the App state.
function PokeCard(props) {
  return (
    <div className="col-xs-3">
      {/* when clicked, we update the state in App compoonet */}
      <div className="card hvr-grow" onClick={() => props.pickedCard(props.id)}>
        <img
          className="card-img"
          alt={props.name}
          src={process.env.PUBLIC_URL + props.image}
        />
      </div>
    </div>
  );
}

export default PokeCard;
