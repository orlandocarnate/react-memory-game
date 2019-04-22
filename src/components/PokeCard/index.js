import React from "react";
import "./style.css";

// Dumb component only receives props
// The Parent App Component passes a function to the Pokecard component so that Pokecard can update the App state.
function PokeCard(props) {
  return (
    <div className="col-sm-3 mb-4">
      {/* when clicked, we update the state in App compoonet */}
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
