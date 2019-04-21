import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pokeom from '../pokemon.json'

export class cards extends Component {
  state = {
    pokemon,
    score: 0
  }

  // method for shuffling cards

  // method for changing card's 'picked' state to true if clicked
  pickedCard = id => {
    // change state of pokemon picked to true
    this.setState({
      pokemon: {
        id: id,
        picked: true
      }
    })
  }

  // reset picked to false, score to 0 then reload cards

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default cards
